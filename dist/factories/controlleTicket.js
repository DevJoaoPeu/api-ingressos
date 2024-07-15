"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDeleteControlleTicketController = exports.makeFindControlleTicketByEventIdController = exports.makeCreateControlleTicketController = void 0;
const create_controlleTicket_use_case_1 = require("@/controlleTickets/createControlleTicket/create-controlleTicket-use-case");
const create_controlleTickets_controller_1 = require("@/controlleTickets/createControlleTicket/create-controlleTickets-controller");
const create_controlleTickets_repository_1 = require("@/controlleTickets/createControlleTicket/create-controlleTickets-repository");
const delete_controlleTicket_controller_1 = require("@/controlleTickets/deleteControlleTicket/delete-controlleTicket-controller");
const delete_controlleTicket_use_case_1 = require("@/controlleTickets/deleteControlleTicket/delete-controlleTicket-use-case");
const find_controlleTicket_by_eventId_controller_1 = require("@/controlleTickets/findControlleTicketByEventId/find-controlleTicket-by-eventId-controller");
const find_controlleTicket_by_eventId_repository_1 = require("@/controlleTickets/findControlleTicketByEventId/find-controlleTicket-by-eventId-repository");
const find_controlleTicket_by_eventId_use_case_1 = require("@/controlleTickets/findControlleTicketByEventId/find-controlleTicket-by-eventId-use-case");
const find_controlle_ticket_by_type_repository_1 = require("@/controlleTickets/findControlleTicketByType/find-controlle-ticket-by-type-repository");
const helper_1 = require("@/controlleTickets/helper/helper");
const find_event_by_id_repository_1 = require("@/event/findEventById/find-event-by-id-repository");
const makeCreateControlleTicketController = () => {
    const createControlleTicketRepository = new create_controlleTickets_repository_1.CreateControlleTicketRepository();
    const findEventByIdRepository = new find_event_by_id_repository_1.FindEventByIdRepository();
    const findControlleTicketByTypeRepository = new find_controlle_ticket_by_type_repository_1.FindControlleTicketByTypeRepository();
    const existControlleTicket = new helper_1.ExistControlleTicket(findControlleTicketByTypeRepository);
    const createControlleTicketUseCase = new create_controlleTicket_use_case_1.CreateControlleTicketUseCase(createControlleTicketRepository, findEventByIdRepository, existControlleTicket);
    const createControlleTicketController = new create_controlleTickets_controller_1.CreateControlleTicketController(createControlleTicketUseCase);
    return createControlleTicketController;
};
exports.makeCreateControlleTicketController = makeCreateControlleTicketController;
const makeFindControlleTicketByEventIdController = () => {
    const findControlleTicketByEventIdRepository = new find_controlleTicket_by_eventId_repository_1.FindControlleTicketByEventIdRepository();
    const findControlleTicketByEventIdUseCase = new find_controlleTicket_by_eventId_use_case_1.FindControlleTicketByEventIdUseCase(findControlleTicketByEventIdRepository);
    const findControlleTicketByEventIdController = new find_controlleTicket_by_eventId_controller_1.FindControlleTicketByEventIdController(findControlleTicketByEventIdUseCase);
    return findControlleTicketByEventIdController;
};
exports.makeFindControlleTicketByEventIdController = makeFindControlleTicketByEventIdController;
const makeDeleteControlleTicketController = () => {
    const deleteControlleTicketUseCase = new delete_controlleTicket_use_case_1.DeleteControlleTicketUseCase();
    const deleteControlleTicketController = new delete_controlleTicket_controller_1.DeleteControlleTicketController(deleteControlleTicketUseCase);
    return deleteControlleTicketController;
};
exports.makeDeleteControlleTicketController = makeDeleteControlleTicketController;
