import { parseISO, isBefore, isAfter, isEqual } from "date-fns"

export const validationDate = (
  paramsDtStart: string,
  paramsDtEnd: string,
  dataBaseDtStart: string,
  dataBaseDtEnd: string
) => {
  const dtStart = paramsDtStart ? parseISO(paramsDtStart) : null
  const dtEnd = paramsDtEnd ? parseISO(paramsDtEnd) : null

  if (dtStart && dtEnd) {
    if (isEqual(dtStart, dtEnd)) {
      return false
    }
    if (isAfter(dtStart, dataBaseDtStart) || isBefore(dtEnd, dataBaseDtEnd)) {
      return false
    }

    return true
  }
}
