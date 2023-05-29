const express = require("express");
const bcrypt = require("bcryptjs");

const { generateJWT } = require("../helpers/jwt");
const User = require("../models/User");

const createUser = async (req, res = express.request) => {
    const { name, lastname, phone, birthdate, email, password } = req.body;
    const newUser = { name, lastname, phone, email, password };
    newUser.birthdate = Date.parse(birthdate);

    try {
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({
                ok: false,
                msg: "El usuario ya existe",
            });
        }
        user = new User(newUser);
        const salt = bcrypt.genSaltSync();
        user.password = bcrypt.hashSync(password, salt);
        await user.save();

        const token = await generateJWT(user.id, user.name);

        res.status(200).json({
            ok: true,
            user: newUser,
            token: token
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            error,
        });
    }
};

const loginUser = async (req, res = express.request) => {
    const { email, password } = req.body;

    try {
        let user = await User.findOne({ email: email });
        if (!user) {
            return res.status(400).json({
                ok: false,
                msg: "El usuario no existe",
            });
        }

        const passwordValid = bcrypt.compareSync(password, user.password);
        if (!passwordValid) {
            return res.status(400).json({
                ok: false,
                msg: "La contraseña no es válida",
            });
        }
        const token = await generateJWT(user.id, user.name);

        res.status(200).json({
            ok: true,
            user,
            token,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            error,
        });
    }
};

const revalidateToken = async (req, res = express.request) => {
    const { uid, name } = req;
    const token = await (generateJWT(uid, name));
    res.status(200).json({
        ok: true,
        token
    });
};

const changePassword = (req, res = express.request) => {
    res.json({
        ok: true,
    });
};

module.exports = {
    createUser,
    loginUser,
    revalidateToken,
    changePassword,
};
