"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateEventController = void 0;
const http_1 = require("@/erros/http");
const event_1 = require("@/schemas/event");
const validation_1 = require("@/erros/validation");
const zod_1 = require("zod");
const errors_1 = require("@/erros/errors");
class UpdateEventController {
    constructor(updateEventUseCase) {
        this.updateEventUseCase = updateEventUseCase;
    }
    execute(httpRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const eventId = httpRequest.params.eventId;
                const params = httpRequest.body;
                yield event_1.updateEventSchema.parseAsync(params);
                const event = yield this.updateEventUseCase.execute(eventId, params);
                if (!event) {
                    return (0, validation_1.eventNotFoundResponse)();
                }
                return (0, http_1.ok)(event);
            }
            catch (error) {
                if (error instanceof zod_1.ZodError) {
                    return (0, http_1.badRequest)({
                        message: error.errors[0].message,
                    });
                }
                if (error instanceof errors_1.DateInvalid) {
                    return (0, http_1.badRequest)({
                        message: error.message,
                    });
                }
                console.error(error);
                return (0, http_1.serverError)();
            }
        });
    }
}
exports.UpdateEventController = UpdateEventController;
