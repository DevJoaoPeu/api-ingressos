import { ok } from "assert"
import { SessionUserUseCase } from "./session-user-use-case"

export class SessionUserController {

    constructor(private readonly sessionUserUseCase: SessionUserUseCase){
        this.sessionUserUseCase = sessionUserUseCase
    }

    async execute(httpRequest){
        const params = httpRequest.body
   
        const user = await this.sessionUserUseCase.execute(params)

        return ok(user)
    }
}