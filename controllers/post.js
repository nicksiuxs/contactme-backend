const express = require("express");
const Post = require("../models/Post");

const createPost = async (req, res = express.request) => {
    const postToCreate = req.body

    const post = new Post(postToCreate);
    try {
        post.user = req.uid;
        const saved = await post.save();

        res.json({
            ok: true,
            task: saved
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            task: "Internal error"
        })
    }
};

const getPosts = async (req, res = express.request) => {
    const posts = await Post.find().populate("user", "name");

    try {
        res.json({
            ok: true,
            posts
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            task: "Internal error"
        })
    }
}


module.exports = {
    createPost,
    getPosts
};
