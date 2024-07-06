export class IdNotFound extends Error {
  constructor() {
    super(`Invalid id, please verify`)
    this.name = "IdNotFound"
  }
}

export class DateInvalid extends Error {
  constructor() {
    super(`End date cannot be greater than start date`)
    this.name = "DateInvalid"
  }
}

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

export class NotAuthorized extends Error {
  constructor() {
    super(`Not Authorized`)
    this.name = "NotAuthorized"
  }
}

export class EventNotFound extends Error {
  constructor() {
    super(`Event not found`)
    this.name = "EventNotFound"
  }
}

export class UserNotFound extends Error {
  constructor() {
    super(`User not found`)
    this.name = "UserNotFound"
  }
}

export class TicketNotFound extends Error {
  constructor() {
    super(`Ticket not found`)
    this.name = "TicketNotFound"
  }
}
