export class EmailAlreadyExists extends Error {
  constructor(email: string) {
    super(`The provided e-mail ${email} is already in use`)
    this.name = "EmailAlreadyExists"
  }
}

export class EmailOrPasswordIncorrect extends Error {
  constructor(email: string) {
    super(`The email ${email} or password provided is incorrect`)
    this.name = "EmailOrPasswordIncorrect"
  }
}

