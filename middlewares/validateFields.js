const express = require("express");
const { validationResult } = require("express-validator")

const validateFields = (req, res = express.request) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            ok: false,
            errors: errors.mapped()
        });
    }
    next();
}

module.exports = { validateFields };