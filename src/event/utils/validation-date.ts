import { parseISO } from "date-fns"

export const validationDate = (
  paramsDtStart: string | undefined,
  paramsDtEnd: string | undefined,
  dataBaseDtStart: number | undefined,
  dataBaseDtEnd: number | undefined
): boolean => {
  const startDate = paramsDtStart ? parseISO(paramsDtStart).getTime() : null
  const endDate = paramsDtEnd ? parseISO(paramsDtEnd).getTime() : null

  if (startDate !== null && endDate !== null) {
    return startDate >= endDate
  }

  if (startDate !== null) {
    return startDate >= dataBaseDtEnd
  }

  if (endDate !== null) {
    return endDate <= dataBaseDtStart
  }

  return false
}
