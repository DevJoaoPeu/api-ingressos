"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QtTicketUnavailable = exports.ControlleTicketExists = exports.TicketNotFound = exports.UserNotFound = exports.EventNotFound = exports.NotAuthorized = exports.EmailOrPasswordIncorrect = exports.EmailAlreadyExists = exports.DateInvalid = exports.IdNotFound = void 0;
class IdNotFound extends Error {
    constructor() {
        super(`Invalid id, please verify`);
        this.name = "IdNotFound";
    }
}
exports.IdNotFound = IdNotFound;
class DateInvalid extends Error {
    constructor() {
        super(`End date cannot be greater than start date`);
        this.name = "DateInvalid";
    }
}
exports.DateInvalid = DateInvalid;
class EmailAlreadyExists extends Error {
    constructor(email) {
        super(`The provided e-mail ${email} is already in use`);
        this.name = "EmailAlreadyExists";
    }
}
exports.EmailAlreadyExists = EmailAlreadyExists;
class EmailOrPasswordIncorrect extends Error {
    constructor(email) {
        super(`The email ${email} or password provided is incorrect`);
        this.name = "EmailOrPasswordIncorrect";
    }
}
exports.EmailOrPasswordIncorrect = EmailOrPasswordIncorrect;
class NotAuthorized extends Error {
    constructor() {
        super(`Not Authorized`);
        this.name = "NotAuthorized";
    }
}
exports.NotAuthorized = NotAuthorized;
class EventNotFound extends Error {
    constructor() {
        super(`Event not found`);
        this.name = "EventNotFound";
    }
}
exports.EventNotFound = EventNotFound;
class UserNotFound extends Error {
    constructor() {
        super(`User not found`);
        this.name = "UserNotFound";
    }
}
exports.UserNotFound = UserNotFound;
class TicketNotFound extends Error {
    constructor() {
        super(`Ticket not found`);
        this.name = "TicketNotFound";
    }
}
exports.TicketNotFound = TicketNotFound;
class ControlleTicketExists extends Error {
    constructor(type) {
        super(`The track ${type} controlleTicket already exists, update the existing one!`);
        this.name = "ControlleTicketExists";
    }
}
exports.ControlleTicketExists = ControlleTicketExists;
class QtTicketUnavailable extends Error {
    constructor(amount) {
        super(`number ${amount} of tickets unavailable`);
        this.name = "QtTicketUnavailable";
    }
}
exports.QtTicketUnavailable = QtTicketUnavailable;
