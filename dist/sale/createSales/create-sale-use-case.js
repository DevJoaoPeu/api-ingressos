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
exports.CreateSaleUseCase = void 0;
const errors_1 = require("@/erros/errors");
class CreateSaleUseCase {
    constructor(createSaleRepository, findUserByIdRepository, findTicketByIdRepository, findControlleTicketByEventIdRepository, updateOwnerIdRepository, updateQtTicketRepository) {
        this.createSaleRepository = createSaleRepository;
        this.findUserByIdRepository = findUserByIdRepository;
        this.findTicketByIdRepository = findTicketByIdRepository;
        this.findControlleTicketByEventIdRepository = findControlleTicketByEventIdRepository;
        this.updateOwnerIdRepository = updateOwnerIdRepository;
        this.updateQtTicketRepository = updateQtTicketRepository;
    }
    execute(createSaleParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.findUserByIdRepository.execute(createSaleParams.userId);
            if (!user) {
                throw new errors_1.UserNotFound();
            }
            const ticket = yield this.findTicketByIdRepository.execute(createSaleParams.ticketId);
            if (!ticket) {
                throw new errors_1.TicketNotFound();
            }
            const params = {
                eventId: ticket.eventId,
                type: ticket.type,
            };
            const controlleTicket = yield this.findControlleTicketByEventIdRepository.execute(params);
            if (createSaleParams.amountTotal > controlleTicket[0].qtTicket) {
                throw new errors_1.QtTicketUnavailable(createSaleParams.amountTotal);
            }
            const createSale = yield this.createSaleRepository.execute(createSaleParams);
            const updateOwnerId = yield this.updateOwnerIdRepository.execute(createSaleParams.ticketId, createSaleParams.userId);
            const calcQtTicket = controlleTicket[0].qtTicket - createSaleParams.amountTotal;
            const updateQtTicket = {
                qtSale: calcQtTicket,
                id: controlleTicket[0].id,
            };
            const qtTicket = yield this.updateQtTicketRepository.execute(updateQtTicket);
            return { createSale, updateOwnerId, qtTicket };
        });
    }
}
exports.CreateSaleUseCase = CreateSaleUseCase;
