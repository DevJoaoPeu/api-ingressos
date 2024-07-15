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
exports.DeleteControlleTicketUseCase = void 0;
const prisma_1 = require("@/prisma/PrismaClient/prisma");
class DeleteControlleTicketUseCase {
    execute(controlleTicketId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const deleteControlleTicket = yield prisma_1.prisma.controllerTicket.delete({
                    where: {
                        id: controlleTicketId,
                    },
                });
                return deleteControlleTicket;
            }
            catch (error) {
                return null;
            }
        });
    }
}
exports.DeleteControlleTicketUseCase = DeleteControlleTicketUseCase;
