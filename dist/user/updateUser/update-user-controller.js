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
exports.UpdateUserController = void 0;
const http_1 = require("@/erros/http");
const user_1 = require("@/schemas/user");
const validation_1 = require("@/erros/validation");
const zod_1 = require("zod");
const errors_1 = require("@/erros/errors");
class UpdateUserController {
    constructor(updateUserUseCase) {
        this.updateUserUseCase = updateUserUseCase;
    }
    execute(httpRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const params = httpRequest.body;
                const userId = httpRequest.params.userId;
                yield user_1.updateUserSchema.parseAsync(params);
                const updateUser = yield this.updateUserUseCase.execute(userId, params);
                if (!updateUser) {
                    return (0, validation_1.userNotFoundResponse)();
                }
                console.log(updateUser);
                return (0, http_1.ok)(updateUser);
            }
            catch (error) {
                if (error instanceof zod_1.ZodError) {
                    return (0, http_1.badRequest)({
                        message: error.errors[0].message,
                    });
                }
                if (error instanceof errors_1.EmailAlreadyExists) {
                    return (0, http_1.badRequest)({
                        message: error.message,
                    });
                }
                console.log(error);
                return (0, http_1.serverError)();
            }
        });
    }
}
exports.UpdateUserController = UpdateUserController;
