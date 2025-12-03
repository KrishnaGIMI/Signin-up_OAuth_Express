const express = require("express")
const JWT = require("jsonwebtoken")
const { login, logout, signup , refresh} = require("../controller/authController")
const router = express.Router()



router.post("/login", login)

router.get("/logout", logout)

router.post("/refresh", refresh)

router.post("/signup",signup)

module.exports = router;