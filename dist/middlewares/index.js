"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAuthenticated = void 0;
const errors_1 = require("@/erros/errors");
const jsonwebtoken_1 = require("jsonwebtoken");
const isAuthenticated = (request, response, next) => {
    const authToken = request.headers.authorization;
    if (!authToken) {
        return response.status(401).end();
    }
    const [, token] = authToken.split(" ");
    try {
        const { sub } = (0, jsonwebtoken_1.verify)(token, process.env.JWT_SECRET);
        request.user_id = sub;
        return next();
    }
    catch (error) {
        throw new errors_1.NotAuthorized();
    }
};
exports.isAuthenticated = isAuthenticated;
