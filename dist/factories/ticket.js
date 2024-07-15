"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDeleteTicketController = exports.makeFindTicketByUserIdController = exports.makeFindTicketByTypeController = exports.makeFindAllTicketsByEventIdController = exports.makeFindTicketByIdController = exports.makeCreateTicketController = void 0;
const create_controlleTickets_repository_1 = require("@/controlleTickets/createControlleTicket/create-controlleTickets-repository");
const find_controlle_ticket_by_type_repository_1 = require("@/controlleTickets/findControlleTicketByType/find-controlle-ticket-by-type-repository");
const helper_1 = require("@/controlleTickets/helper/helper");
const find_event_by_id_repository_1 = require("@/event/findEventById/find-event-by-id-repository");
const create_ticket_controller_1 = require("@/ticket/createTicket/create-ticket-controller");
const create_ticket_repository_1 = require("@/ticket/createTicket/create-ticket-repository");
const create_ticket_use_case_1 = require("@/ticket/createTicket/create-ticket-use-case");
const delete_ticket_controller_1 = require("@/ticket/deleteTicket/delete-ticket-controller");
const delete_ticket_use_case_1 = require("@/ticket/deleteTicket/delete-ticket-use-case");
const find_all_tickets_by_eventId_controller_1 = require("@/ticket/findAllTicketsByEventId/find-all-tickets-by-eventId-controller");
const find_all_tickets_by_eventId_repository_1 = require("@/ticket/findAllTicketsByEventId/find-all-tickets-by-eventId-repository");
const find_all_tickets_by_eventId_use_case_1 = require("@/ticket/findAllTicketsByEventId/find-all-tickets-by-eventId-use-case");
const find_ticket_by_id_controller_1 = require("@/ticket/findTicketById/find-ticket-by-id-controller");
const find_ticket_by_id_repository_1 = require("@/ticket/findTicketById/find-ticket-by-id-repository");
const find_ticket_by_id_use_case_1 = require("@/ticket/findTicketById/find-ticket-by-id-use-case");
const find_ticket_by_type_controller_1 = require("@/ticket/findTicketByType/find-ticket-by-type-controller");
const find_ticket_by_type_repository_1 = require("@/ticket/findTicketByType/find-ticket-by-type-repository");
const find_ticket_by_type_use_case_1 = require("@/ticket/findTicketByType/find-ticket-by-type-use-case");
const find_tickets_by_user_id_controller_1 = require("@/ticket/findTicketByUserId/find-tickets-by-user-id-controller");
const find_tickets_by_user_id_repository_1 = require("@/ticket/findTicketByUserId/find-tickets-by-user-id-repository");
const find_tickets_by_user_id_use_case_1 = require("@/ticket/findTicketByUserId/find-tickets-by-user-id-use-case");
const makeCreateTicketController = () => {
    const createTicketRepository = new create_ticket_repository_1.CreateTicketRepository();
    const findEventByIdRepository = new find_event_by_id_repository_1.FindEventByIdRepository();
    const createControlleTicketRepository = new create_controlleTickets_repository_1.CreateControlleTicketRepository();
    const findControlleTicketByTypeRepository = new find_controlle_ticket_by_type_repository_1.FindControlleTicketByTypeRepository();
    const existControlleTicket = new helper_1.ExistControlleTicket(findControlleTicketByTypeRepository);
    const createTicketUseCase = new create_ticket_use_case_1.CreateTicketUseCase(createTicketRepository, findEventByIdRepository, createControlleTicketRepository, existControlleTicket);
    const createTicketController = new create_ticket_controller_1.CreateTicketController(createTicketUseCase);
    return createTicketController;
};
exports.makeCreateTicketController = makeCreateTicketController;
const makeFindTicketByIdController = () => {
    const findTicketByIdRepository = new find_ticket_by_id_repository_1.FindTicketByIdRepository();
    const findTicketByIdUseCase = new find_ticket_by_id_use_case_1.FindTicketByIdUseCase(findTicketByIdRepository);
    const findTicketByIdController = new find_ticket_by_id_controller_1.FindTicketByIdController(findTicketByIdUseCase);
    return findTicketByIdController;
};
exports.makeFindTicketByIdController = makeFindTicketByIdController;
const makeFindAllTicketsByEventIdController = () => {
    const findAllTicketsByEventIdRepository = new find_all_tickets_by_eventId_repository_1.FindAllTicketsByEventIdRepository();
    const findAllTicketsByEventIdUseCase = new find_all_tickets_by_eventId_use_case_1.FindAllTicketsByEventIdUseCase(findAllTicketsByEventIdRepository);
    const findAllTicketsByEventIdController = new find_all_tickets_by_eventId_controller_1.FindAllTicketsByEventIdController(findAllTicketsByEventIdUseCase);
    return findAllTicketsByEventIdController;
};
exports.makeFindAllTicketsByEventIdController = makeFindAllTicketsByEventIdController;
const makeFindTicketByTypeController = () => {
    const findTicketByTypeRepository = new find_ticket_by_type_repository_1.FindTicketByTypeRepository();
    const findTicketByTypeUseCase = new find_ticket_by_type_use_case_1.FindTicketByTypeUseCase(findTicketByTypeRepository);
    const findTicketByTypeController = new find_ticket_by_type_controller_1.FindTicketByTypeController(findTicketByTypeUseCase);
    return findTicketByTypeController;
};
exports.makeFindTicketByTypeController = makeFindTicketByTypeController;
const makeFindTicketByUserIdController = () => {
    const findTicketByUserIdRepository = new find_tickets_by_user_id_repository_1.FindTicketByUserIdRepository();
    const findTicketByUserIdUseCase = new find_tickets_by_user_id_use_case_1.FindTicketByUserIdUseCase(findTicketByUserIdRepository);
    const findTicketByUserIdController = new find_tickets_by_user_id_controller_1.FindTicketByUserIdController(findTicketByUserIdUseCase);
    return findTicketByUserIdController;
};
exports.makeFindTicketByUserIdController = makeFindTicketByUserIdController;
const makeDeleteTicketController = () => {
    const deleteTicketsUseCase = new delete_ticket_use_case_1.DeleteTicketUseCase();
    const deleteTicketsController = new delete_ticket_controller_1.DeleteTicketController(deleteTicketsUseCase);
    return deleteTicketsController;
};
exports.makeDeleteTicketController = makeDeleteTicketController;
