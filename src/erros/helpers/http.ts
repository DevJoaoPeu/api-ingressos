export const badRequest = <T>(body: T) => ({
  statusCode: 400,
  body,
})

export const created = <T>(body: T) => ({
  statusCode: 201,
  body,
})

export const ok = <T>(body: T) => ({
  statusCode: 200,
  body,
})

export const serverError = () => ({
  statusCode: 500,
  body: {
    errorMessage: "Internal server error",
  },
})

export const notFound = <T>(body: T) => ({
  statusCode: 404,
  body,
})
