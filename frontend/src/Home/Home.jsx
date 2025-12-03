import { useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { logout } from "../redux/slices/authSlice"

const Home =()=>{  
    const navigator = useNavigate()
    const dispatch = useDispatch()
    const logoutFunc = async()=>{
    const resp = await axios.get("http://localhost:3001/auth/logout", {  withCredentials: true})
    if(resp){
        dispatch(logout())
        navigator("/login")
    }
  }

  const data = useSelector((state)=>state.authReducer)
  console.log("state data", data)

  useEffect( ()=>{
    const checker =async()=>{
      try {
        const resp = await axios.get("http://localhost:3001/user/user", {  withCredentials: true})
        console.log("resp", resp)
      } catch(err) {
        console.error("Error fetching user:", err.response?.data || err.message)
      }
    }
    checker()

  },[])



  return  <div
      style={{
        height: "100vh",
        marginLeft:"550px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // background: "#f0f4f8",
      }}
    >
      <div
        style={{
          background: "#ffffff",
          padding: "2rem 3rem",
          borderRadius: "12px",
          boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontSize: "1.5rem",
            fontWeight: "500",
            marginBottom: "1.5rem",
            color: "#333333",
          }}
        >
          Hi {data.username}
        </p>
        <button
          onClick={logoutFunc}
          style={{
            padding: "0.6rem 1.5rem",
            backgroundColor: "#ff5252",
            color: "#ffffff",
            fontWeight: "500",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#ff1744")}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#ff5252")}
        >
          Logout
        </button>
      </div>
    </div>
}

export default Home;