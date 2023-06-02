import { type State } from "../utils/decorators/DefaultCalendar";

export interface ISettings {
  type?: "month" | "week" | "year";
  weekStart?: "su" | "mo";
  withTodo?: boolean;
  minDate?: Date | null;
  maxDate?: Date | null;
  showWeekends?: boolean;
}
export interface ICalendar extends ISettings {
  getPrevious: (state: State) => object;
  getNext: (state: State) => object;
  getDateArr: (state: State) => Array<Array<string | number>>;
}
