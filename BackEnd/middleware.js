const jwt = require("jsonwebtoken");

function authMiddleware (req,res,next) {
  try {
    const token = req.headers.token;
    const decoded = jwt.verify(token,"sonu123");
    const userId = decoded.userId;

    if(!userId) {
        return res.status(403).json({
            msg : "Malformed token"
        })
    } else {
        req.userId = userId;
        next()
    }
  } catch(e) {
    res.status(400).json({
        msg : "Invalid token check"
    })
  }
}

module.exports = {
    authMiddleware : authMiddleware
}