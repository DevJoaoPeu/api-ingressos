"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeValidationUserController = exports.makeFindUserByIdController = exports.makeDeleteUserController = exports.makeSessionUserController = exports.makeUpdateUserController = exports.makeCreateUserController = void 0;
const create_user_controller_1 = require("@/user/createUser/create-user-controller");
const create_user_repository_1 = require("@/user/createUser/create-user-repository");
const create_user_use_case_1 = require("@/user/createUser/create-user-use-case");
const delete_user_controller_1 = require("@/user/deleteUser/delete-user-controller");
const delete_user_repository_1 = require("@/user/deleteUser/delete-user-repository");
const delete_user_use_case_1 = require("@/user/deleteUser/delete-user-use-case");
const find_user_by_email_repository_1 = require("@/user/findUserByEmail/find-user-by-email-repository");
const find_user_by_id_controller_1 = require("@/user/findUserById/find-user-by-id-controller");
const find_user_by_id_repository_1 = require("@/user/findUserById/find-user-by-id-repository");
const find_user_by_id_use_case_1 = require("@/user/findUserById/find-user-by-id-use-case");
const session_user_controller_1 = require("@/user/session/session-user-controller");
const session_user_use_case_1 = require("@/user/session/session-user-use-case");
const update_user_controller_1 = require("@/user/updateUser/update-user-controller");
const update_user_repository_1 = require("@/user/updateUser/update-user-repository");
const update_user_use_case_1 = require("@/user/updateUser/update-user-use-case");
const validation_user_controller_1 = require("@/user/validationUser/validation-user-controller");
const validation_user_use_case_1 = require("@/user/validationUser/validation-user-use-case");
const makeCreateUserController = () => {
    const createUserRepository = new create_user_repository_1.CreateUserRepository();
    const findUserByEmailRepository = new find_user_by_email_repository_1.FindUserByEmailRepository();
    const createUserUseCase = new create_user_use_case_1.CreateUserUseCase(createUserRepository, findUserByEmailRepository);
    const createUserController = new create_user_controller_1.CreateUserController(createUserUseCase);
    return createUserController;
};
exports.makeCreateUserController = makeCreateUserController;
const makeUpdateUserController = () => {
    const updateUserRepository = new update_user_repository_1.UpdateUserRepository();
    const findUserByEmailRepository = new find_user_by_email_repository_1.FindUserByEmailRepository();
    const updateUserUseCase = new update_user_use_case_1.UpdateUserUseCase(updateUserRepository, findUserByEmailRepository);
    const updateUserController = new update_user_controller_1.UpdateUserController(updateUserUseCase);
    return updateUserController;
};
exports.makeUpdateUserController = makeUpdateUserController;
const makeSessionUserController = () => {
    const findUserByEmailRepository = new find_user_by_email_repository_1.FindUserByEmailRepository();
    const sessionUserUseCase = new session_user_use_case_1.SessionUserUseCase(findUserByEmailRepository);
    const sessionUserController = new session_user_controller_1.SessionUserController(sessionUserUseCase);
    return sessionUserController;
};
exports.makeSessionUserController = makeSessionUserController;
const makeDeleteUserController = () => {
    const deleteUserRepository = new delete_user_repository_1.DeleteUserRepository();
    const deleteUserUseCase = new delete_user_use_case_1.DeleteUserUseCase(deleteUserRepository);
    const deleteUserController = new delete_user_controller_1.DeleteUserController(deleteUserUseCase);
    return deleteUserController;
};
exports.makeDeleteUserController = makeDeleteUserController;
const makeFindUserByIdController = () => {
    const findUserByIdRepository = new find_user_by_id_repository_1.FindUserByIdRepository();
    const findUserByIdUseCase = new find_user_by_id_use_case_1.FindUserByIdUseCase(findUserByIdRepository);
    const findUserByIdController = new find_user_by_id_controller_1.FindUserByIdController(findUserByIdUseCase);
    return findUserByIdController;
};
exports.makeFindUserByIdController = makeFindUserByIdController;
const makeValidationUserController = () => {
    const validationUserUseCase = new validation_user_use_case_1.ValidationUserUseCase();
    const validationUserController = new validation_user_controller_1.ValidationUserController(validationUserUseCase);
    return validationUserController;
};
exports.makeValidationUserController = makeValidationUserController;
