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
exports.router = void 0;
const express_1 = require("express");
const user_1 = require("@/factories/user");
const event_1 = require("./factories/event");
const middlewares_1 = require("./middlewares");
const ticket_1 = require("./factories/ticket");
const controlleTicket_1 = require("./factories/controlleTicket");
const sale_1 = require("./factories/sale");
const router = (0, express_1.Router)();
exports.router = router;
router.post("/user/register", (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const createUserController = (0, user_1.makeCreateUserController)();
    const { statusCode, body } = yield createUserController.execute(request);
    response.status(statusCode).send(body);
}));
router.patch("/user/update/:userId", middlewares_1.isAuthenticated, (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const updateUserController = (0, user_1.makeUpdateUserController)();
    const { statusCode, body } = yield updateUserController.execute(request);
    response.status(statusCode).send(body);
}));
router.post("/user/session", (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const sessionUserController = (0, user_1.makeSessionUserController)();
    const { statusCode, body } = yield sessionUserController.execute(request);
    response.status(statusCode).send(body);
}));
router.delete("/user/delete/:userId", middlewares_1.isAuthenticated, (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const deleteUserController = (0, user_1.makeDeleteUserController)();
    const { statusCode, body } = yield deleteUserController.execute(request);
    response.status(statusCode).send(body);
}));
router.get("/user/find/:userId", middlewares_1.isAuthenticated, (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const findUserByIdController = (0, user_1.makeFindUserByIdController)();
    const { statusCode, body } = yield findUserByIdController.execute(request);
    response.status(statusCode).send(body);
}));
router.post("/event/create", middlewares_1.isAuthenticated, (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const createEventController = (0, event_1.makeCreateEventController)();
    const { statusCode, body } = yield createEventController.execute(request);
    response.status(statusCode).send(body);
}));
router.get("/event/findAll/:userId", middlewares_1.isAuthenticated, (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const findAllEventsByUserIdController = (0, event_1.makeFindAllEventsByUserIdController)();
    const { statusCode, body } = yield findAllEventsByUserIdController.execute(request);
    response.status(statusCode).send(body);
}));
router.get("/event/findOne/:eventId", middlewares_1.isAuthenticated, (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const findEventByIdController = (0, event_1.makeFindEventByIdController)();
    const { statusCode, body } = yield findEventByIdController.execute(request);
    response.status(statusCode).send(body);
}));
router.patch("/event/update/:eventId", middlewares_1.isAuthenticated, (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const updateEventController = (0, event_1.makeUpdateEventController)();
    const { statusCode, body } = yield updateEventController.execute(request);
    response.status(statusCode).send(body);
}));
router.delete("/event/delete/:eventId", middlewares_1.isAuthenticated, (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const deleteEventController = (0, event_1.makeDeleteEventController)();
    const { statusCode, body } = yield deleteEventController.execute(request);
    response.status(statusCode).send(body);
}));
router.post("/ticket/create", (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const createTicketController = (0, ticket_1.makeCreateTicketController)();
    const { statusCode, body } = yield createTicketController.execute(request);
    response.status(statusCode).send(body);
}));
router.get("/ticket/find/:ticketId", (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const findTicketByIdController = (0, ticket_1.makeFindTicketByIdController)();
    const { statusCode, body } = yield findTicketByIdController.execute(request);
    response.status(statusCode).send(body);
}));
router.get("/ticket/findAll/:eventId", (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const findTicketsByEventIdController = (0, ticket_1.makeFindAllTicketsByEventIdController)();
    const { statusCode, body } = yield findTicketsByEventIdController.execute(request);
    response.status(statusCode).send(body);
}));
router.get("/ticket/findTicket/:eventId/:type", (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const findTicketByTypeController = (0, ticket_1.makeFindTicketByTypeController)();
    const { statusCode, body } = yield findTicketByTypeController.execute(request);
    response.status(statusCode).send(body);
}));
router.get("/ticket/user/findTickets/:userId", (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const findTicketByUserIdController = (0, ticket_1.makeFindTicketByUserIdController)();
    const { statusCode, body } = yield findTicketByUserIdController.execute(request);
    response.status(statusCode).send(body);
}));
router.delete("/ticket/delete/:eventId", (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const deleteTicketsController = (0, ticket_1.makeDeleteTicketController)();
    const { statusCode, body } = yield deleteTicketsController.execute(request);
    response.status(statusCode).send(body);
}));
router.post("/controlleTicket/create", (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const createControlleTicketController = (0, controlleTicket_1.makeCreateControlleTicketController)();
    const { statusCode, body } = yield createControlleTicketController.execute(request);
    response.status(statusCode).send(body);
}));
router.get("/controlleTicket/find", (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const findControlleTicketByEventIdController = (0, controlleTicket_1.makeFindControlleTicketByEventIdController)();
    const { statusCode, body } = yield findControlleTicketByEventIdController.execute(request);
    response.status(statusCode).send(body);
}));
router.delete("/controlleTicket/delete/:controlleTicketId", (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const findControlleTicketByEventIdController = (0, controlleTicket_1.makeDeleteControlleTicketController)();
    const { statusCode, body } = yield findControlleTicketByEventIdController.execute(request);
    response.status(statusCode).send(body);
}));
router.get("/user/me", (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const validationUserController = (0, user_1.makeValidationUserController)();
    const validationUserRequest = {
        headers: {
            authorization: request.headers.authorization || "",
        },
    };
    const { statusCode, body } = yield validationUserController.execute(validationUserRequest);
    response.status(statusCode).send(body);
}));
router.post("/sale/create", (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const createSaleController = (0, sale_1.makeCreateSaleController)();
    const { statusCode, body } = yield createSaleController.execute(request);
    response.status(statusCode).send(body);
}));
router.get("/event/findAll", (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const findAllEventscontroller = (0, event_1.makeFindAllEventsController)();
    const { statusCode, body } = yield findAllEventscontroller.execute();
    response.status(statusCode).send(body);
}));
