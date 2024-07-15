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
exports.UpdateUserUseCase = void 0;
const errors_1 = require("@/erros/errors");
const bcrypt_1 = require("bcrypt");
class UpdateUserUseCase {
    constructor(updateUserRepository, findUserByEmailRepository) {
        this.updateUserRepository = updateUserRepository;
        this.findUserByEmailRepository = findUserByEmailRepository;
    }
    execute(userId, updateUserParams) {
        return __awaiter(this, void 0, void 0, function* () {
            if (updateUserParams.email) {
                const userWithProvidedEmail = yield this.findUserByEmailRepository.execute(updateUserParams.email);
                if (userWithProvidedEmail && userWithProvidedEmail.id !== userId) {
                    throw new errors_1.EmailAlreadyExists(updateUserParams.email);
                }
            }
            const user = Object.assign({}, updateUserParams);
            if (updateUserParams.password) {
                const hashedPassword = yield (0, bcrypt_1.hash)(updateUserParams.password, 10);
                user.password = hashedPassword;
            }
            const updateUser = yield this.updateUserRepository.execute(userId, user);
            return updateUser;
        });
    }
}
exports.UpdateUserUseCase = UpdateUserUseCase;
