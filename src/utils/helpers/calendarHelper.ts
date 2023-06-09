export function getNumberOfMonthDays(month: number, year: number): number {
  const months30 = [4, 6, 9, 11];
  const leapYear = year % 4 === 0;
  if (month === 2) {
    if (leapYear) {
      return 29;
    }
    return 28;
  }
  if (months30.includes(month)) {
    return 30;
  }
  return 31;
}

export function zeroPad(value: number, length: number = 2): string {
  return `${value}`.padStart(length, "0");
}

export function getMonthFirstDay(month: number, year: number): number {
  return new Date(`${year}-${zeroPad(month, 2)}-01`).getDay() + 1;
}

export function isDate(date: Date): boolean {
  const isDateType = Object.prototype.toString.call(date) === "[object Date]";
  const isValid = date && !Number.isNaN(date.valueOf());

  return isDateType && isValid;
}

export function isSameMonth(date: Date, basedate: Date = new Date()): boolean {
  if (!(isDate(date) && isDate(basedate))) return false;
  const basedateMonth = +basedate.getMonth() + 1;
  const basedateYear = basedate.getFullYear();
  const dateMonth = +date.getMonth() + 1;
  const dateYear = date.getFullYear();
  return +basedateMonth === +dateMonth && +basedateYear === +dateYear;
}

export function isSameDay(date: Date, basedate: Date = new Date()): boolean {
  if (!(isDate(date) && isDate(basedate))) return false;
  const basedateDate = basedate.getDate();
  const basedateMonth = +basedate.getMonth() + 1;
  const basedateYear = basedate.getFullYear();
  const dateDate = date.getDate();
  const dateMonth = +date.getMonth() + 1;
  const dateYear = date.getFullYear();
  return (
    +basedateDate === +dateDate &&
    +basedateMonth === +dateMonth &&
    +basedateYear === +dateYear
  );
}

export function getFormatedDate(date: Date = new Date()): string | null {
  if (!isDate(date)) return null;
  return [
    date.getFullYear(),
    zeroPad(+date.getMonth() + 1, 2),
    zeroPad(+date.getDate(), 2),
  ].join("/");
}

export function isDateValid(inputStr: string): boolean {
  const dateRegex = /^\d{2}\/\d{2}\/\d{4}$/;
  if (!dateRegex.test(inputStr)) {
    return false;
  }
  return true;
}

export function isDateLess(firstDate: Date, secondDate: Date): boolean {
  const fDate = typeof firstDate === "object" ? firstDate : new Date(firstDate);
  const sDate =
    typeof secondDate === "object" ? secondDate : new Date(secondDate);

  return fDate.getTime() <= sDate.getTime();
}

export function isDateGreater(firstDate: Date, secondDate: Date): boolean {
  const fDate = typeof firstDate === "object" ? firstDate : new Date(firstDate);
  const sDate =
    typeof secondDate === "object" ? secondDate : new Date(secondDate);

  return fDate.getTime() >= sDate.getTime();
}

export function getCurrentWeekNumber(
  date: Date,
  month: number,
  year: number,
  weekStart: "mo" | "su" | undefined
): number {
  if (weekStart === "su") {
    return (
      Math.ceil((date.getDate() + getMonthFirstDay(month, year) - 1) / 7) - 1
    );
  }
  if (weekStart === "mo") {
    return (
      Math.ceil((date.getDate() + getMonthFirstDay(month, year) - 2) / 7) - 1
    );
  }

  return Math.ceil((date.getDate() + getMonthFirstDay(month, year)) / 7) - 1;
}

export function isSameDate(
  date: Date | null | undefined,
  newDate: Date | null | undefined
): boolean {
  const firstDate = typeof date === "number" ? new Date(date) : date;
  const secondDate = typeof newDate === "number" ? new Date(newDate) : newDate;
  return firstDate?.getTime() === secondDate?.getTime();
}

export function isInRange(
  startDate: Date | null | undefined,
  endDate: Date | null | undefined,
  currentDate: Date | null | undefined
): boolean {
  const firstDate =
    typeof startDate === "number" ? new Date(startDate) : startDate;
  const secondDate = typeof endDate === "number" ? new Date(endDate) : endDate;
  const curtDate =
    typeof currentDate === "number" ? new Date(currentDate) : currentDate;
  if (firstDate && secondDate && curtDate) {
    if (
      curtDate.getTime() < secondDate.getTime() &&
      curtDate.getTime() > firstDate.getTime()
    ) {
      return true;
    }
  }
  return false;
}

export function isValidDate(
  startDate: Date | null | undefined,
  endDate: Date | null | undefined,
  currentDate: Date | null | undefined
): boolean {
  const firstDate =
    typeof startDate === "number" ? new Date(startDate) : startDate;
  const secondDate = typeof endDate === "number" ? new Date(endDate) : endDate;
  const curtDate =
    typeof currentDate === "number" ? new Date(currentDate) : currentDate;
  if (firstDate && secondDate && curtDate) {
    if (
      curtDate.getTime() <= secondDate.getTime() &&
      curtDate.getTime() >= firstDate.getTime()
    ) {
      return true;
    }
  }
  return false;
}
