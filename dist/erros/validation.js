"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.controlleTicketNotFoundResponse = exports.ticketNotFoundResponse = exports.eventNotFoundResponse = exports.invalidIdResponse = exports.userNotFoundResponse = void 0;
const http_1 = require("./http");
const userNotFoundResponse = () => (0, http_1.notFound)({
    message: "User not found",
});
exports.userNotFoundResponse = userNotFoundResponse;
const invalidIdResponse = () => (0, http_1.badRequest)({
    message: "Id invalid. Please provide a valid one",
});
exports.invalidIdResponse = invalidIdResponse;
const eventNotFoundResponse = () => (0, http_1.notFound)({
    message: "Event not found",
});
exports.eventNotFoundResponse = eventNotFoundResponse;
const ticketNotFoundResponse = () => (0, http_1.notFound)({
    message: "Ticket not found",
});
exports.ticketNotFoundResponse = ticketNotFoundResponse;
const controlleTicketNotFoundResponse = () => (0, http_1.notFound)({
    message: "controlleTicket not found",
});
exports.controlleTicketNotFoundResponse = controlleTicketNotFoundResponse;
