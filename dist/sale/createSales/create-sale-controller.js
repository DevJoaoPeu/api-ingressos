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
exports.CreateSaleController = void 0;
const http_1 = require("@/erros/http");
const errors_1 = require("@/erros/errors");
class CreateSaleController {
    constructor(createSaleUseCase) {
        this.createSaleUseCase = createSaleUseCase;
    }
    execute(httpParams) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const params = httpParams.body;
                const createSale = yield this.createSaleUseCase.execute(params);
                return (0, http_1.ok)(createSale);
            }
            catch (error) {
                if (error instanceof errors_1.UserNotFound) {
                    return (0, http_1.badRequest)({
                        message: error.message,
                    });
                }
                if (error instanceof errors_1.TicketNotFound) {
                    return (0, http_1.badRequest)({
                        message: error.message,
                    });
                }
                if (error instanceof errors_1.QtTicketUnavailable) {
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
exports.CreateSaleController = CreateSaleController;
