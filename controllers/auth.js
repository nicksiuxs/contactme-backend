const express = require("express");

const createUser = (req, res = express.request) => {
    console.log(req.body)
    const { name, lastname, phone, birthdate, email, password } = req.body;
    res.status(200).json({
        ok: true,
        name, lastname, phone, birthdate, email, password
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

const changePassword = (req, res = express.request) => {
    res.json({
        ok: true
    })
}

module.exports = {
    createUser,
    loginUser,
    revalidateToken,
    changePassword
};
