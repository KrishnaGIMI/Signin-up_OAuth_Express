import { useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
const SignUp= ()=>{
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const navigator = useNavigate();

    const signUp = ()=>{
        if(password==confirmPassword){
            console.log("kk")
        }
        navigator("/login")

    }
    return(<div>
        <h1>Sign up form</h1>
        <form onSubmit={()=>signUp()}>
            <div id="username">
                <label>Username</label>
                <input value={username} onChange={(e)=>setUsername(e.target.value)} />
            </div>

             <div id="email">
                <label>Email</label>
                <input value={email} onChange={(e)=>setEmail(e.target.value)} />
            </div>

            <div id="password">
                <label>Password</label>
                <input value={password} onChange={(e)=>setPassword(e.target.value)} />
            </div>

            <div id="confirmPassword">
                <label>Confirm Password</label>
                <input value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} />
            </div>           

            <button type="submit">
                Sign Up
            </button>

        </form>
    </div>)
}
export default SignUp;