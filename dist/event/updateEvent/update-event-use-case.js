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
exports.UpdateEventUseCase = void 0;
const errors_1 = require("@/erros/errors");
const validation_date_1 = require("../utils/validation-date");
class UpdateEventUseCase {
    constructor(updateEventRepository, findEventByIdRepository) {
        this.updateEventRepository = updateEventRepository;
        this.findEventByIdRepository = findEventByIdRepository;
    }
    execute(eventId, updateEventParams) {
        var _a, _b, _c, _d;
        return __awaiter(this, void 0, void 0, function* () {
            const existingEvent = yield this.findEventByIdRepository.execute(eventId);
            const validationDateParams = (0, validation_date_1.validationDate)(((_a = updateEventParams.dtStart) === null || _a === void 0 ? void 0 : _a.toISOString()) || "", ((_b = updateEventParams.dtEnd) === null || _b === void 0 ? void 0 : _b.toISOString()) || "", ((_c = existingEvent === null || existingEvent === void 0 ? void 0 : existingEvent.dtStart) === null || _c === void 0 ? void 0 : _c.toISOString()) || "", ((_d = existingEvent === null || existingEvent === void 0 ? void 0 : existingEvent.dtEnd) === null || _d === void 0 ? void 0 : _d.toISOString()) || "");
            if (validationDateParams) {
                throw new errors_1.DateInvalid();
            }
            const updatedEvent = yield this.updateEventRepository.execute(eventId, updateEventParams);
            return updatedEvent;
        });
    }
}
exports.UpdateEventUseCase = UpdateEventUseCase;
