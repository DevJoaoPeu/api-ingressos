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
exports.CreateUserUseCase = void 0;
const errors_1 = require("@/erros/errors");
const bcrypt_1 = require("bcrypt");
const token_1 = require("../helper/auth/token");
class CreateUserUseCase {
    constructor(createUserRepository, findUserByEmailRepository) {
        this.createUserRepository = createUserRepository;
        this.findUserByEmailRepository = findUserByEmailRepository;
    }
    execute(createUserParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const userWithProvidedEmail = yield this.findUserByEmailRepository.execute(createUserParams.email);
            if (userWithProvidedEmail) {
                throw new errors_1.EmailAlreadyExists(createUserParams.email);
            }
            const hashedPassword = yield (0, bcrypt_1.hash)(createUserParams.password, 10);
            const user = Object.assign(Object.assign({}, createUserParams), { password: hashedPassword });
            const createdUser = yield this.createUserRepository.execute(user);
            const tokenJwt = (0, token_1.token)(createdUser.id, createUserParams.email, createUserParams.role);
            const createUser = Object.assign(Object.assign({}, createdUser), { tokenJwt });
            return createUser;
        });
    }
}
exports.CreateUserUseCase = CreateUserUseCase;
