const express = require("express");
// const getUser = require("../controller/user")
const {Register, getUsers, updateUser} = require("../controller/onboarding.controller")
const router = express();

router.get('/users', getUsers);
router.post('/register', Register)
router.put("/user/:id", updateUser)
module.exports = router;