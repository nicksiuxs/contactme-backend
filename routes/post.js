const express = require('express');
const router = express.Router();
const { validateToken } = require("../middlewares/validateToken");
const { createPost } = require("../controllers/post");

router.use(validateToken);

router.post("/", createPost);

module.exports = router