const express = require('express');
const router = express.Router();
const { validateToken } = require("../middlewares/validateToken");
const { createPost, getPosts } = require("../controllers/post");

router.use(validateToken);

router.get("/", getPosts);
router.post("/", createPost);

module.exports = router