import { useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './login.css'
import { useDispatch } from "react-redux";
import { login } from "../redux/slices/authSlice";
const Login = ()=>{
        const [username, setUsername] = useState("");
        const [password, setPassword] = useState("");
        const dispatch = useDispatch();

        const navigator = useNavigate();
        const loginFunc=async()=>{
            try{
                const response = await axios.post("http://localhost:3001/auth/login",{username, password},{withCredentials: true})
                console.log(response)
                if(response.status==200){
                    dispatch(login({"username":username,"password": password, "token":"kk", "expiresIn":"8h"}))
                    navigator("/")
                }
            }catch(e){
                console.log(e)
            }
            console.log("lll")
        }
    return(<div className="main">
       
        <form className="form" onSubmit={(e)=>{e.preventDefault();loginFunc()}}>
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