"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidIdSchema = exports.updateEventSchema = exports.createEventSchema = void 0;
const zod_1 = require("zod");
exports.createEventSchema = zod_1.z.object({
    name: zod_1.z
        .string({
        message: "Name is required",
    })
        .trim()
        .min(2, {
        message: "Name is required",
    }),
    userId: zod_1.z
        .string({
        message: "userId is required",
    })
        .uuid({
        message: "invalid uuid",
    })
        .trim()
        .min(1, {
        message: "userId is required",
    }),
    dtStart: zod_1.z
        .string({
        required_error: "dtStart is required",
    })
        .datetime({
        message: "dtStart must be a valid date",
    }),
    dtEnd: zod_1.z
        .string({
        required_error: "dtEnd is required",
    })
        .datetime({
        message: "dtEnd must be a valid date",
    }),
    location: zod_1.z
        .string({
        message: "location is required",
    })
        .trim()
        .min(2, {
        message: "location is required",
    }),
});
exports.updateEventSchema = exports.createEventSchema.partial().strict();
exports.isValidIdSchema = zod_1.z.object({
    eventId: zod_1.z
        .string({
        message: "userId is required",
    })
        .uuid({
        message: "Uuid is invalid",
    }),
});
