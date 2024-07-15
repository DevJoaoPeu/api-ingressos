"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidIdSchema = exports.sessionUserSchema = exports.updateUserSchema = exports.createUserSchema = void 0;
const zod_1 = require("zod");
exports.createUserSchema = zod_1.z.object({
    name: zod_1.z
        .string({
        message: "Name is required",
    })
        .trim()
        .min(2, {
        message: "Name is required",
    }),
    email: zod_1.z
        .string({
        required_error: "E-mail is required",
    })
        .email({
        message: "Please provide a vaid e-mail",
    })
        .trim()
        .min(1, {
        message: "E-mail is required",
    }),
    password: zod_1.z
        .string({
        message: "Password is required",
    })
        .trim()
        .min(6, {
        message: "Password must have at least 6 characters",
    }),
});
exports.updateUserSchema = exports.createUserSchema.partial().strict();
exports.sessionUserSchema = zod_1.z.object({
    email: zod_1.z
        .string({
        required_error: "E-mail is required",
    })
        .email({
        message: "Please provide a vaid e-mail",
    })
        .trim()
        .min(1, {
        message: "E-mail is required",
    }),
    password: zod_1.z
        .string({
        message: "Password is required",
    })
        .trim()
        .min(6, {
        message: "Password must have at least 6 characters",
    }),
});
exports.isValidIdSchema = zod_1.z.object({
    userId: zod_1.z
        .string({
        message: "userId is required",
    })
        .uuid({
        message: "Uuid is invalid",
    }),
});
