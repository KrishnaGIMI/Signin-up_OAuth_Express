import { useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import './login.css'
const Login = ()=>{
        const [username, setUsername] = useState("");
        const [password, setPassword] = useState("");

        const navigator = useNavigate();
        const login=()=>{
            console.log("lll")
            navigator("/")
        }
    return(<div className="main">
       
        <form className="form" onSubmit={()=>login()}>
             <p className="heading">Login</p>
             <div className="cards">
                 <div className="card">
                <label className="label">Username</label><br />
                <input className="inputBox" value={username} onChange={(e)=>setUsername(e.target.value)} />
            </div>

            <div className="card">
                <label>Password</label><br />
                <input className="inputBox" value={password} onChange={(e)=>setPassword(e.target.value)} />
            </div>
             </div>
           

            <p className="forgot-pssd" onClick={()=>console.log("kkk")}>Forgot password ?</p>
   

            <button className="button" type="submit">Sign in
                {/* <p className="label">Sign In</p> */}
            </button>

        </form>
    </div>)
}
export default Login;