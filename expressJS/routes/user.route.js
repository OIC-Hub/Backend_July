const express = require("express");
const getUser = require("../controller/user")
const router = express();

router.get('/users', getUser);

module.exports = router;