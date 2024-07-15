"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notFound = exports.serverError = exports.ok = exports.created = exports.badRequest = void 0;
const badRequest = (body) => ({
    statusCode: 400,
    body,
});
exports.badRequest = badRequest;
const created = (body) => ({
    statusCode: 201,
    body,
});
exports.created = created;
const ok = (body) => ({
    statusCode: 200,
    body,
});
exports.ok = ok;
const serverError = () => ({
    statusCode: 500,
    body: {
        errorMessage: "Internal server error",
    },
});
exports.serverError = serverError;
const notFound = (body) => ({
    statusCode: 404,
    body,
});
exports.notFound = notFound;
