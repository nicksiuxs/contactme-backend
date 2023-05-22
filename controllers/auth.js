const express = require("express");
const bcrypt = require("bcryptjs");
const User = require("../models/User");

const createUser = async (req, res = express.request) => {
    const { name, lastname, phone, birthdate, email, password } = req.body
    const newUser = { name, lastname, phone, email, password };
    newUser.birthdate = Date.parse(birthdate);
    newUser.type = 1;
    try {
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({
                ok: false,
                msg: "El usuario ya existe"
            })
        }
        user = new User(newUser)
        const salt = bcrypt.genSaltSync();
        user.password = bcrypt.hashSync(password, salt);
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
