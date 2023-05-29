const express = require('express');
const router = express.Router();
const { validateToken } = require("../middlewares/validateToken");
const { createPost, getPosts, getPostsByUser } = require("../controllers/post");

router.use(validateToken);

router.get("/:id", getPostsByUser);
router.get("/", getPosts);
router.post("/", createPost);

module.exports = router