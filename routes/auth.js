const express = require('express');
const router = express.Router();

const { createUser, loginUser, revalidateToken } = require("../controllers/auth")

router.post("/", loginUser);
router.post("/new", createUser);
router.get("/renew", revalidateToken);

module.exports = router