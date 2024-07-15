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
exports.DeleteEventController = void 0;
const http_1 = require("@/erros/http");
const validation_1 = require("@/erros/validation");
const event_1 = require("@/schemas/event");
const zod_1 = require("zod");
class DeleteEventController {
    constructor(deleteEventUseCase) {
        this.deleteEventUseCase = deleteEventUseCase;
    }
    execute(httpRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const eventId = httpRequest.params.eventId;
                yield event_1.isValidIdSchema.parseAsync({ eventId });
                const deleteEvent = yield this.deleteEventUseCase.execute(eventId);
                if (!deleteEvent) {
                    return (0, validation_1.eventNotFoundResponse)();
                }
                return (0, http_1.ok)(deleteEvent);
            }
            catch (error) {
                if (error instanceof zod_1.ZodError) {
                    return (0, http_1.badRequest)({
                        error: error.errors[0].message,
                    });
                }
                console.error(error);
                return (0, http_1.serverError)();
            }
        });
    }
}
exports.DeleteEventController = DeleteEventController;
