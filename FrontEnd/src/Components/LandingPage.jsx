import { useNavigate } from "react-router-dom"

export function LandingPage () {
  const navigate = useNavigate();
    return <>
       <header>
          <div>
            <button onClick={() => {
                navigate("/signup");
            }}>Sign Up</button>

            <button onClick={() => {
                navigate("/Login");
            }}>Login</button>
          </div>

       </header>

    </>
}