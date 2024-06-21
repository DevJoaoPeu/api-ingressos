import { EmailOrPasswordIncorrect } from "@/erros/user/errors";
import { FindUserByEmailRepository } from "../findUserByEmail/find-user-by-email-repository";
import { userNotFoundResponse } from "@/erros/helpers/validation";
import { ISessionUserParams } from "@/types/user/type";
import { compare } from "bcrypt";
import { sign } from 'jsonwebtoken';

export class SessionUserUseCase {
  constructor(
    private readonly findUserByEmailRepository: FindUserByEmailRepository
  ) {
    this.findUserByEmailRepository = findUserByEmailRepository;
  }

  async execute(sessionUserParams: ISessionUserParams) {
    const isValidUser = await this.findUserByEmailRepository.execute(sessionUserParams.email);

    if (!isValidUser || !(await compare(sessionUserParams.password, isValidUser.password))) {
      throw new EmailOrPasswordIncorrect(sessionUserParams.email)
    }

    const token = sign({
        email: sessionUserParams.email
      },
      process.env.JWT_SECRET as string,
      { subject: isValidUser.id, expiresIn: '30d' }
    );

    const user = {
      ...isValidUser,
      token
    };

    return user;
  }
}
