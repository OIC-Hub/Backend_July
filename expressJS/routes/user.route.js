const express = require("express");
const getUser = require("../controller/user")
const Register = require("../controller/onboarding.controller")
const router = express();

router.get('/users', getUser);
router.post('/register', Register)

module.exports = router;