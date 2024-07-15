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
exports.CreateTicketUseCase = void 0;
const errors_1 = require("@/erros/errors");
class CreateTicketUseCase {
    constructor(createTicketRepository, findEventByIdRepository, createControlleTicketRepository, existControlleTicket) {
        this.createTicketRepository = createTicketRepository;
        this.findEventByIdRepository = findEventByIdRepository;
        this.createControlleTicketRepository = createControlleTicketRepository;
        this.existControlleTicket = existControlleTicket;
    }
    execute(createTicketParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const event = yield this.findEventByIdRepository.execute(createTicketParams.eventId);
            if (!event) {
                throw new errors_1.EventNotFound();
            }
            const paramsControlleTicket = {
                qtTicket: createTicketParams.qtTicket,
                price: createTicketParams.price,
                type: createTicketParams.type,
                eventId: createTicketParams.eventId,
            };
            yield this.existControlleTicket.execute(createTicketParams.type);
            const createControlleTicket = yield this.createControlleTicketRepository.execute(paramsControlleTicket);
            const ticket = yield this.createTicketRepository.execute(createTicketParams);
            return { ticket, createControlleTicket };
        });
    }
}
exports.CreateTicketUseCase = CreateTicketUseCase;
