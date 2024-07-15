"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.token = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const token = (id, email, role) => {
    const token = (0, jsonwebtoken_1.sign)({
        id,
        email,
        role,
    }, process.env.JWT_SECRET, {
        subject: id,
        expiresIn: "30d",
    });
    return token;
};
exports.token = token;
