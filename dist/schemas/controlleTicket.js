"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidControlleTicketIdSchema = exports.findControlleTicketSchema = exports.controlleTicketSchema = void 0;
const zod_1 = require("zod");
const ticket_1 = require("./ticket");
exports.controlleTicketSchema = zod_1.z.object({
    qtTicket: zod_1.z.number({
        message: "qtTicket is required",
    }),
    type: ticket_1.TipoIngressoEnum,
    price: zod_1.z.number({
        message: "price is required",
    }),
    eventId: zod_1.z
        .string({
        message: "eventId is required",
    })
        .trim()
        .min(1, {
        message: "eventId is required",
    }),
});
exports.findControlleTicketSchema = zod_1.z.object({
    eventId: zod_1.z
        .string({
        message: "eventId is required",
    })
        .uuid({
        message: "Invalid uuid",
    })
        .trim()
        .min(1, {
        message: "eventId is required",
    }),
    type: ticket_1.TipoIngressoEnum.optional(),
});
exports.isValidControlleTicketIdSchema = zod_1.z.object({
    controlleTicketId: zod_1.z
        .string({
        message: "userId is required",
    })
        .uuid({
        message: "Uuid is invalid",
    }),
});
