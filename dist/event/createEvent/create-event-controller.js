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
exports.CreateEventController = void 0;
const event_1 = require("@/schemas/event");
const http_1 = require("@/erros/http");
const zod_1 = require("zod");
const errors_1 = require("@/erros/errors");
const errors_2 = require("@/erros/errors");
class CreateEventController {
    constructor(createEventUseCase) {
        this.createEventUseCase = createEventUseCase;
    }
    execute(httpRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const params = httpRequest.body;
                yield event_1.createEventSchema.parseAsync(params);
                const event = yield this.createEventUseCase.execute(params);
                return (0, http_1.created)(event);
            }
            catch (error) {
                if (error instanceof zod_1.ZodError) {
                    return (0, http_1.badRequest)({
                        message: error.errors[0].message,
                    });
                }
                if (error instanceof errors_1.IdNotFound) {
                    return (0, http_1.badRequest)({
                        message: error.message,
                    });
                }
                if (error instanceof errors_1.DateInvalid) {
                    return (0, http_1.badRequest)({
                        message: error.message,
                    });
                }
                if (error instanceof errors_2.NotAuthorized) {
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
exports.CreateEventController = CreateEventController;
