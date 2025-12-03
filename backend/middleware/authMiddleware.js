const JWT = require("jsonwebtoken");

module.exports = (req, res, next)=>{
    const token = req.cookies.refreshToken;
    if(!token){
        return res.status(401).json({message:"NOT Authenticated"})
    }
    try{
        const user = JWT.verify(token, process.env.REFRESH_SECRET);
        
        req.user = user;
        next()
    }catch(err){
        return res.status(403).json({message: "Token is invalid or expired"})
    }
}

