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
exports.CreateTicketController = void 0;
const http_1 = require("@/erros/http");
const ticket_1 = require("@/schemas/ticket");
const zod_1 = require("zod");
const errors_1 = require("@/erros/errors");
class CreateTicketController {
    constructor(createTicketUseCase) {
        this.createTicketUseCase = createTicketUseCase;
    }
    execute(httpRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const params = httpRequest.body;
                if (params.qtTicket > 5) {
                    return (0, http_1.badRequest)({
                        message: "For now, the maximum number of tickets you can create is 5",
                    });
                }
                yield ticket_1.createTicketSchema.parseAsync(params);
                const ticket = yield this.createTicketUseCase.execute(params);
                return (0, http_1.created)(ticket);
            }
            catch (error) {
                if (error instanceof errors_1.EventNotFound) {
                    return (0, http_1.badRequest)({
                        message: error.message,
                    });
                }
                if (error instanceof zod_1.ZodError) {
                    return (0, http_1.badRequest)({
                        message: error.errors[0].message,
                    });
                }
                if (error instanceof errors_1.ControlleTicketExists) {
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
exports.CreateTicketController = CreateTicketController;
