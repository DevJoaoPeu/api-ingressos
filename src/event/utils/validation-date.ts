import { parseISO, isBefore, isAfter, isEqual } from "date-fns"

export const validationDate = (
  paramsDtStart: string,
  paramsDtEnd: string,
  dataBaseDtStart: string,
  dataBaseDtEnd: string
) => {
  const dtStart = paramsDtStart ? parseISO(paramsDtStart) : false
  const dtEnd = paramsDtEnd ? parseISO(paramsDtEnd) : false

  if (dtStart && dtEnd) {
    if (isEqual(dtStart, dtEnd)) {
      return true
    }
    if (isAfter(dtStart, dataBaseDtStart) || isBefore(dtEnd, dataBaseDtEnd)) {
      return true
    }

    return false
  }
}
