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
