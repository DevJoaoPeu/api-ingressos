"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationUserUseCase = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
class ValidationUserUseCase {
    execute(token) {
        const { id, email, role } = (0, jsonwebtoken_1.verify)(token, process.env.JWT_SECRET);
        return { id, email, role };
    }
}
exports.ValidationUserUseCase = ValidationUserUseCase;
