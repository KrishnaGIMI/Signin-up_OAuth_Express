const express = require("express")
const JWT = require("jsonwebtoken")
const { login, logout, signup } = require("../controller/authController")
const router = express.Router()



router.post("/login", login)

router.get("/logout", logout)

router.post("/signup",signup)

module.exports = router;