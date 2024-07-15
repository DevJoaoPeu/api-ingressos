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
exports.CreateControlleTicketUseCase = void 0;
const errors_1 = require("@/erros/errors");
class CreateControlleTicketUseCase {
    constructor(createControlleTicketRepository, findEventByIdRepository, existControlleTicket) {
        this.createControlleTicketRepository = createControlleTicketRepository;
        this.findEventByIdRepository = findEventByIdRepository;
        this.existControlleTicket = existControlleTicket;
    }
    execute(createControlleTicketParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const eventExists = yield this.findEventByIdRepository.execute(createControlleTicketParams.eventId);
            if (!eventExists) {
                throw new errors_1.EventNotFound();
            }
            yield this.existControlleTicket.execute(createControlleTicketParams.type);
            const createControlleTicket = yield this.createControlleTicketRepository.execute(createControlleTicketParams);
            return createControlleTicket;
        });
    }
}
exports.CreateControlleTicketUseCase = CreateControlleTicketUseCase;
