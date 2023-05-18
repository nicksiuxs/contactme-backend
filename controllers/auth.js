const express = require("express");

const createUser = (req, res = express.request) => {
    res.json({
        ok: true,
    });
};

const loginUser = (req, res = express.request) => {
    res.json({
        ok: true,
    });
};

const revalidateToken = (req, res = express.request) => {
    res.json({
        ok: true,
    });
};

module.exports = {
    createUser,
    loginUser,
    revalidateToken,
};
