"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validationDate = void 0;
const date_fns_1 = require("date-fns");
const validationDate = (paramsDtStart, paramsDtEnd, dataBaseDtStart, dataBaseDtEnd) => {
    const dtStart = paramsDtStart ? (0, date_fns_1.parseISO)(paramsDtStart) : false;
    const dtEnd = paramsDtEnd ? (0, date_fns_1.parseISO)(paramsDtEnd) : false;
    if (dtStart && dtEnd) {
        if ((0, date_fns_1.isEqual)(dtStart, dtEnd)) {
            return true;
        }
        if ((0, date_fns_1.isAfter)(dtStart, dataBaseDtStart) || (0, date_fns_1.isBefore)(dtEnd, dataBaseDtEnd)) {
            return true;
        }
        return false;
    }
};
exports.validationDate = validationDate;
