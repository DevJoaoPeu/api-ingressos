"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidIdSchema = exports.findTicketsSchema = exports.createTicketSchema = exports.TipoIngressoEnum = void 0;
const zod_1 = require("zod");
exports.TipoIngressoEnum = zod_1.z.enum(["PISTA", "VIP"]);
exports.createTicketSchema = zod_1.z.object({
    qtTicket: zod_1.z.number({
        message: "qtTicket is required",
    }),
    eventId: zod_1.z
        .string({
        message: "eventId is required",
    })
        .trim()
        .min(1, {
        message: "eventId is required",
    }),
    ownerId: zod_1.z
        .string({
        required_error: "dtStart is required",
    })
        .optional(),
    dtAvailability: zod_1.z
        .string({
        required_error: "dtAvailability is required",
    })
        .datetime({
        message: "dtAvailability must be a valid date",
    }),
    type: exports.TipoIngressoEnum,
    price: zod_1.z
        .number({
        message: "price is required",
    })
        .min(2, {
        message: "price is required",
    }),
});
exports.findTicketsSchema = zod_1.z.object({
    type: exports.TipoIngressoEnum,
    eventId: zod_1.z
        .string({
        message: "eventId is required",
    })
        .uuid()
        .trim()
        .min(1, {
        message: "eventId is required",
    }),
});
exports.isValidIdSchema = zod_1.z.object({
    ticketId: zod_1.z
        .string({
        message: "ticketId is required",
    })
        .uuid({
        message: "Uuid is invalid",
    }),
});
