const express = require("express");
const User = require("../models/User");

const createUser = async (req, res = express.request) => {
    const { name, lastname, phone, birthdate, email, password } = req.body
    const newUser = { name, lastname, phone, email, password };
    newUser.birthdate = Date.parse(birthdate);
    newUser.type = 1;
    try {
        const user = new User(newUser)
        await user.save();
        res.status(200).json({
            ok: true,
            user: newUser
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            error
        })
    }
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
