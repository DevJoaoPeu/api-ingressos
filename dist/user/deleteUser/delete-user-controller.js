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
exports.DeleteUserController = void 0;
const validation_1 = require("@/erros/validation");
const http_1 = require("@/erros/http");
const user_1 = require("@/schemas/user");
const zod_1 = require("zod");
class DeleteUserController {
    constructor(deleteUserUseCase) {
        this.deleteUserUseCase = deleteUserUseCase;
    }
    execute(httpRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userId = httpRequest.params.userId;
                yield user_1.isValidIdSchema.parseAsync({ userId });
                const deleteUser = yield this.deleteUserUseCase.execute(userId);
                if (!deleteUser) {
                    return (0, validation_1.userNotFoundResponse)();
                }
                return (0, http_1.ok)(deleteUser);
            }
            catch (error) {
                if (error instanceof zod_1.ZodError) {
                    return (0, http_1.badRequest)({
                        message: error.errors[0].message,
                    });
                }
                console.error(error);
                return (0, http_1.serverError)();
            }
        });
    }
}
exports.DeleteUserController = DeleteUserController;
