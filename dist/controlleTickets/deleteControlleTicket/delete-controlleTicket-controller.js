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
exports.DeleteControlleTicketController = void 0;
const http_1 = require("@/erros/http");
const controlleTicket_1 = require("@/schemas/controlleTicket");
const zod_1 = require("zod");
const validation_1 = require("@/erros/validation");
class DeleteControlleTicketController {
    constructor(deleteControlleTicketUseCase) {
        this.deleteControlleTicketUseCase = deleteControlleTicketUseCase;
    }
    execute(httpParams) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const controlleTicketId = httpParams.params.controlleTicketId;
                yield controlleTicket_1.isValidControlleTicketIdSchema.parseAsync({ controlleTicketId });
                const controlleTicket = yield this.deleteControlleTicketUseCase.execute(controlleTicketId);
                if (!controlleTicket) {
                    return (0, validation_1.controlleTicketNotFoundResponse)();
                }
                return (0, http_1.ok)(controlleTicket);
            }
            catch (error) {
                if (error instanceof zod_1.ZodError) {
                    return (0, http_1.badRequest)({
                        message: error.errors[0].message,
                    });
                }
                console.log(error);
                return (0, http_1.serverError)();
            }
        });
    }
}
exports.DeleteControlleTicketController = DeleteControlleTicketController;
