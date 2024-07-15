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
exports.CreateEventUseCase = void 0;
const errors_1 = require("@/erros/errors");
class CreateEventUseCase {
    constructor(createEventRepository, findUserByIdRepository) {
        this.createEventRepository = createEventRepository;
        this.findUserByIdRepository = findUserByIdRepository;
    }
    execute(createEventParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const findUserId = yield this.findUserByIdRepository.execute(createEventParams.userId);
            if (!findUserId) {
                throw new errors_1.IdNotFound();
            }
            if (createEventParams.dtEnd <= createEventParams.dtStart) {
                throw new errors_1.DateInvalid();
            }
            const event = yield this.createEventRepository.execute(createEventParams);
            return event;
        });
    }
}
exports.CreateEventUseCase = CreateEventUseCase;
