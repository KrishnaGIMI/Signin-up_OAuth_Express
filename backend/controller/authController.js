const JWT = require("jsonwebtoken")
const Users = require("../model/authModel")
const sendResponse = async(status, data, req, res)=>{
    return res.send({status, data})
}
const login = async (req, res)=>{
    const {username, password} = req.body;
    //check user exits 
    let user="";
    try{
        user = await Users.find({username:username, password: password})    
        console.log("user in login fun", user)
        console.log("user id is ", user[0]._id)
    }catch(err){
        console.log(err)
    }
    if(user.length>0){
        //if yes generate jwt token
        const accessToken = JWT.sign({userId: user[0]._id, username, password}, process.env.SECRET, {expiresIn: "1m"}) 
        const refreshToken = JWT.sign({userId: user[0]._id, username, password}, process.env.REFRESH_SECRET, {expiresIn:"7h"})
        console.log("accessToken", accessToken)
        console.log("refreshToken", refreshToken)
        res.cookie("refreshToken", refreshToken)  
        sendResponse(200, {userId:user[0]._id, username, password, accessToken}, req, res);
    }else{
        sendResponse(401, "unauthorized user", req, res)
    }
    
}

const refresh = async(req, res)=>{
    const refreshToken = req.cookies.refreshToken;
    const accessToken = req.body.accessToken;
    try{
        JWT.verify(accessToken, process.env.SECRET);
        return sendResponse(400, "Token is still valid", req, res)

    }catch(err){
        //sendResponse(401, "Token is still valid", req, res)
        if (err.name !== "TokenExpiredError") {
            // Error but not expired
            return sendResponse(401, "Invalid access token", req, res);
        }
    }
    const payload = JWT.verify(refreshToken, process.env.REFRESH_SECRET)
    console.log("payload is", payload)
    const user = await Users.findById(payload.userId)
    console.log("user", user)
    try{
        if(!user){
            res.send("Invalid token")
        }else{
            const new_access_token = JWT.sign({userId:user._id,username:user.username, password:user.password}, process.env.SECRET, {expiresIn: "1m"})
            res.json({accessToken: new_access_token})
        }
    }catch(error){
        console.log(error)
        res.json(error)
    }
}

const logout =  async(req, res)=>{
    res.clearCookie("refreshToken")
    res.send("logged out")
}

const signup = async(req, res)=>{
    const {username, password, email, confirmPassword} = req.body;
    try{
        const resp = await Users.create({username, password, email})
        console.log("response after object created in db")
        if(resp){
            sendResponse(200, {username, password, email}, req, res);
        }
    }catch(error){
        console.log(error)
    }
    console.log({username, password, email, confirmPassword})
    //res.send({username, password, email, confirmPassword})
}

module.exports = {
    login, logout, signup, refresh
}