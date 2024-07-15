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
exports.UpdateUserRepository = void 0;
const prisma_1 = require("@/prisma/PrismaClient/prisma");
class UpdateUserRepository {
    execute(userId, updateUserParams) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield prisma_1.prisma.user.update({
                    where: {
                        id: userId,
                    },
                    data: updateUserParams,
                });
            }
            catch (error) {
                return null;
            }
        });
    }
}
exports.UpdateUserRepository = UpdateUserRepository;
