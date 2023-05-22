const express = require('express');
const router = express.Router();
const { check } = require("express-validator");

const { loginErrors, registerErrors } = require("../helpers/errorMessages")
const { createUser, loginUser, revalidateToken, changePassword } = require("../controllers/auth");
const { validateFields } = require("../middlewares/validateFields");

router.post(
    "/",
    [
        check("email", loginErrors.email).not().isEmpty(),
        check("password", loginErrors.password).not().isEmpty(),
        validateFields
    ],
    loginUser
);

router.post(
    "/new",
    [
        check("name", registerErrors.name).not().isEmpty(),
        check("lastname", registerErrors.lastname).not().isEmpty(),
        check("phone", registerErrors.phone).not().isEmpty(),
        check("birthdate", registerErrors.birthdate).not().isEmpty(),
        check("email", registerErrors.email).not().isEmpty(),
        check("password", registerErrors.password).not().isEmpty(),
        validateFields
    ],
    createUser
);

router.get("/renew", revalidateToken);

router.post("/password", changePassword);

module.exports = router