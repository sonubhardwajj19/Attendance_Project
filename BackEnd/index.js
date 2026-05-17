const express = require("express");
const cors = require("cors")
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const {Pool} = require("pg");
const z = require("zod");
const { authMiddleware } = require("./middleware");

const pool = new Pool ({
    connectionString : ""
})

const app = express();
app.use(express.json());
app.use(cors());

const SignupSchema = z.object({
    name : z.string().min(3) ,
    password : z.string().min(5) ,
    email : z.email()
})

app.post("/signup" , async (req, res) => {    
 try{
    const {data , error} = SignupSchema.safeParse(req.body)
    if(!data) {
    return res.status(403).json({
            msg : "Incorrect cred" , error : JSON.parse(error)
        })
    } 
    const name = data.name;
    const email = data.email;
    const password = data.password;
    const hashedPassword = await bcrypt.hash(password,10)

    const response = await pool.query(`INSERT INTO users (name, email ,password) VALUES ($1,$2,$3) RETURNING id`,[name,email,hashedPassword]);
    res.json({
        msg : "Sign-up done" ,
        id : response.rows[0].id
    })
 } catch (e) {
    res.json({
        msg : "Something went worng"
    })
 }
   
})

app.post("/signin" , async (req,res) => {
   const name = req.body.name;
   const password = req.body.password;
   const response = await pool.query(`SELECT * FROM users WHERE name=$1`,[name]);
   const userExists = response.rows[0];

   if (!userExists){
     return res.status(403).json({
        msg : "No user found with this username"
     })
   } else {
    const correctPassword = await bcrypt.compare(password,userExists.password)
      if(!correctPassword) {
        return res.status(400).json({
            msg : "Incorrect password"
        })
      } else {
        const token = jwt.sign({
            userId : userExists.id
        },"sonu123");

        res.json({
            msg : "You have signed up",
            token : token
        })
      }
   }
})


app.post("/subject", authMiddleware , async (req,res) => {
    const userId = req.userId;
    const subjectName = req.body.subjectName;
    const response = await pool.query(`SELECT * FROM users WHERE id=$1`,[userId]);
    const userExists = response.rows[0];

    if (!userExists) {
        return res.status(403).json({
           msg : "You have not registered yet"
        })
      }

    if (subjectName === "") {
        return res.status(402).json({
            msg : "Subject name is required"
        })
    }

    const subject = await pool.query(`INSERT INTO subjects (name,userId) VALUES ($1,$2) RETURNING id`,[subjectName,userId])
    console.log(subject)
    res.json({
        msg : "Subject created" ,
        subId : subject.rows[0].id
    })
})

app.get("/subject" , authMiddleware , async (req,res) => {
    const userId =  req.userId;
    const response = await pool.query(`SELECT * FROM users WHERE id=$1`,[userId]);
    const userExists = response.rows[0];

    try {
        if(!userExists) {
            return res.status(400).json({
            msg : "You have not registered yet"
            })
        }
        
        const subject = await pool.query(`SELECT * FROM  subjects WHERE userId=$1`,[userId])
        let subname = subject.rows.map(n =>({ name: n.name , Id : n.id}))

        res.json({
            subjects : subname
        })
        } 
  catch(e) {
            res.status(403).json({
                msg : "Invalid userId"
           })
        }
})

app.delete("/subject" , authMiddleware , async (req,res) => {
    const userId =  req.userId;
    const subjectId = req.body.subjectId;

    const response = await pool.query(`SELECT * FROM users WHERE id=$1`,[userId]);
    const userExists = response.rows[0];

    if(!userExists) {
        return res.status(400).json({
        msg : "You have not registered yet"
        })
    }

    const subExists = await pool.query(`SELECT * FROM subjects WHERE userId=$1`,[userId]);
    if(subExists.rows.length === 0) {
        return res.status(402).json({
            msg : "You dont have any subjects"
        })
    }

    const subOwn =  await pool.query(`SELECT * FROM subjects WHERE id=$1 AND userid=$2`,[subjectId,userId])
    if(subOwn.rows.length === 0) {
        return res.status(403).json({
            msg : "You donot own this subject"
        })
    } else {
        await pool.query(`DELETE FROM subjects WHERE id=$1 AND userid=$2`,[subjectId,userId])
        res.json({
        msg: "Subject deleted successfully"
        })
    }
   
 })


 app.post("/attendance", authMiddleware , async (req,res) => {
    const userId =  req.userId;
    const subjectId = req.body.subjectId;
    const date = req.body.date;  // YYYY-MM-DD
    const status = req.body.status;

    const subExists = await pool.query(`SELECT * FROM subjects WHERE userId=$1`,[userId]);
    if(subExists.rows.length === 0) {
        return res.status(402).json({
            msg : "You dont have any subjects"
        })
    }
 
    const subOwn =  await pool.query(`SELECT * FROM subjects WHERE id=$1 AND userid=$2`,[subjectId,userId])
    if(subOwn.rows.length === 0) {
        return res.status(403).json({
            msg : "You donot own this subject"
        })
    }

    if(!["present","absent"].includes(status)) {
        return res.json({
            msg : "please put valid status"
        })
    }

    await pool.query(`INSERT INTO attendance (userid,subid,date,status) VALUES ($1,$2,$3,$4)`,[userId,subjectId,date,status])

    res.json({
        msg : "Attendance updated"
    })

})

app.get("/attendance", authMiddleware , async(req,res) => {
    const userId =  req.userId;
    
    const response = await pool.query(`SELECT * FROM attendance WHERE userid=$1`,[userId]);
    if(response.rows.length === 0) {
        return res.status(402).json({
            msg : "You have no attendance record" 
        })
    }

    const record = response.rows.map( n => ({
        SubjectId : n.subid ,
        Date : n.date ,
        Status: n.status
    }))
    
    res.json({
        Attendance_record : record
    })
})


app.listen(4000 , () => {
    console.log("running")
})
