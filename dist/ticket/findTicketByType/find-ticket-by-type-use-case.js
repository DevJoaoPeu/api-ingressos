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
exports.FindTicketByTypeUseCase = void 0;
class FindTicketByTypeUseCase {
    constructor(findTicketByTypeRepository) {
        this.findTicketByTypeRepository = findTicketByTypeRepository;
    }
    execute(ticketParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const ticket = yield this.findTicketByTypeRepository.execute(ticketParams);
            return ticket;
        });
    }
}
exports.FindTicketByTypeUseCase = FindTicketByTypeUseCase;
