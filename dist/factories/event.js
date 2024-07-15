"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeFindAllEventsController = exports.makeDeleteEventController = exports.makeUpdateEventController = exports.makeFindEventByIdController = exports.makeFindAllEventsByUserIdController = exports.makeCreateEventController = void 0;
const create_event_controller_1 = require("@/event/createEvent/create-event-controller");
const create_event_repository_1 = require("@/event/createEvent/create-event-repository");
const create_event_use_case_1 = require("@/event/createEvent/create-event-use-case");
const delete_event_controller_1 = require("@/event/deleteEvent/delete-event-controller");
const delete_event_repository_1 = require("@/event/deleteEvent/delete-event-repository");
const delete_event_use_case_1 = require("@/event/deleteEvent/delete-event-use-case");
const find_all_events_controller_1 = require("@/event/findAllEvents/find-all-events-controller");
const find_all_events_repository_1 = require("@/event/findAllEvents/find-all-events-repository");
const find_all_events_use_case_1 = require("@/event/findAllEvents/find-all-events-use-case");
const find_all_events_controller_2 = require("@/event/findAllEventsByUserId/find-all-events-controller");
const find_all_events_repository_2 = require("@/event/findAllEventsByUserId/find-all-events-repository");
const find_all_events_use_case_2 = require("@/event/findAllEventsByUserId/find-all-events-use-case");
const find_event_by_id_controller_1 = require("@/event/findEventById/find-event-by-id-controller");
const find_event_by_id_repository_1 = require("@/event/findEventById/find-event-by-id-repository");
const find_event_by_id_use_case_1 = require("@/event/findEventById/find-event-by-id-use-case");
const update_event_controller_1 = require("@/event/updateEvent/update-event-controller");
const update_event_repository_1 = require("@/event/updateEvent/update-event-repository");
const update_event_use_case_1 = require("@/event/updateEvent/update-event-use-case");
const find_user_by_id_repository_1 = require("@/user/findUserById/find-user-by-id-repository");
const makeCreateEventController = () => {
    const createEventRepository = new create_event_repository_1.CreateEventRepository();
    const findUserByIdRepository = new find_user_by_id_repository_1.FindUserByIdRepository();
    const createEventUseCase = new create_event_use_case_1.CreateEventUseCase(createEventRepository, findUserByIdRepository);
    const createEventController = new create_event_controller_1.CreateEventController(createEventUseCase);
    return createEventController;
};
exports.makeCreateEventController = makeCreateEventController;
const makeFindAllEventsByUserIdController = () => {
    const findAllEventsByUserIdRepository = new find_all_events_repository_2.FindAllEventsByUserIdRepository();
    const findAllEventsByUserIdUseCase = new find_all_events_use_case_2.FindAllEventsByUserIdUseCase(findAllEventsByUserIdRepository);
    const findAllEventsByUserIdController = new find_all_events_controller_2.FindAllEventsByUserIdController(findAllEventsByUserIdUseCase);
    return findAllEventsByUserIdController;
};
exports.makeFindAllEventsByUserIdController = makeFindAllEventsByUserIdController;
const makeFindEventByIdController = () => {
    const findEventByIdRepository = new find_event_by_id_repository_1.FindEventByIdRepository();
    const findEventByIdUseCase = new find_event_by_id_use_case_1.FindEventByIdUseCase(findEventByIdRepository);
    const findEventByIdController = new find_event_by_id_controller_1.FindEventByIdController(findEventByIdUseCase);
    return findEventByIdController;
};
exports.makeFindEventByIdController = makeFindEventByIdController;
const makeUpdateEventController = () => {
    const updateEventRepository = new update_event_repository_1.UpdateEventRepository();
    const findEventByIdRepository = new find_event_by_id_repository_1.FindEventByIdRepository();
    const updateEventUseCase = new update_event_use_case_1.UpdateEventUseCase(updateEventRepository, findEventByIdRepository);
    const updateEventController = new update_event_controller_1.UpdateEventController(updateEventUseCase);
    return updateEventController;
};
exports.makeUpdateEventController = makeUpdateEventController;
const makeDeleteEventController = () => {
    const deleteEventRepository = new delete_event_repository_1.DeleteEventRepository();
    const deleteEventUseCase = new delete_event_use_case_1.DeleteEventUseCase(deleteEventRepository);
    const deleteEventController = new delete_event_controller_1.DeleteEventController(deleteEventUseCase);
    return deleteEventController;
};
exports.makeDeleteEventController = makeDeleteEventController;
const makeFindAllEventsController = () => {
    const findAllEventsRepository = new find_all_events_repository_1.FindAllEventsRepository();
    const findAllEventsUseCase = new find_all_events_use_case_1.FindAllEventsUseCase(findAllEventsRepository);
    const findAllEventsController = new find_all_events_controller_1.FindAllEventsController(findAllEventsUseCase);
    return findAllEventsController;
};
exports.makeFindAllEventsController = makeFindAllEventsController;
