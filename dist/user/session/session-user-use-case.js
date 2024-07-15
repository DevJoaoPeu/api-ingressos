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
exports.SessionUserUseCase = void 0;
const errors_1 = require("@/erros/errors");
const bcrypt_1 = require("bcrypt");
const token_1 = require("../helper/auth/token");
class SessionUserUseCase {
    constructor(findUserByEmailRepository) {
        this.findUserByEmailRepository = findUserByEmailRepository;
    }
    execute(sessionUserParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const isValidUser = yield this.findUserByEmailRepository.execute(sessionUserParams.email);
            if (!isValidUser ||
                !(yield (0, bcrypt_1.compare)(sessionUserParams.password, isValidUser.password))) {
                throw new errors_1.EmailOrPasswordIncorrect(sessionUserParams.email);
            }
            const tokenJwt = (0, token_1.token)(isValidUser.id, sessionUserParams.email, isValidUser.role);
            const user = {
                token: tokenJwt,
            };
            return user;
        });
    }
}
exports.SessionUserUseCase = SessionUserUseCase;
