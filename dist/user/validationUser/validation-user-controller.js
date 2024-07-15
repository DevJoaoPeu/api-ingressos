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
exports.ValidationUserController = void 0;
const http_1 = require("@/erros/http");
const jsonwebtoken_1 = require("jsonwebtoken");
class ValidationUserController {
    constructor(validationUserUseCase) {
        this.validationUserUseCase = validationUserUseCase;
    }
    execute(httpParams) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const params = httpParams.headers.authorization;
                if (!params) {
                    return (0, http_1.badRequest)({
                        message: "token is required",
                    });
                }
                const [, token] = params.split(" ");
                const tokenJwt = yield this.validationUserUseCase.execute(token);
                return (0, http_1.ok)(tokenJwt);
            }
            catch (error) {
                if (error instanceof jsonwebtoken_1.JsonWebTokenError) {
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
exports.ValidationUserController = ValidationUserController;
