import React, { useState, type FC } from "react";
import { Span, Wrapper } from "./styled";
import { Global } from "../../styles/globalStyled";
import ChooseDate from "../ChooseDate/ChooseDate";
import Calendar from "../Calendar/Calendar";
import { type DatePickerProps } from "./types";

const DatePicker: FC<DatePickerProps> = ({
  type,
  minDate,
  maxDate,
  showWeekends,
  weekStart,
}) => {
  const [date, setDate] = useState(new Date());

  const handleChange = (newDate: Date): void => {
    setDate(newDate);
  };

  return (
    <>
      <Global />
      <Wrapper>
        <Span>Calendar</Span>
        <ChooseDate
          handleChange={handleChange}
          date={date.toLocaleDateString("en-GB")}
          minDate={minDate}
          maxDate={maxDate}
        />
        <Calendar
          date={date}
          onChange={setDate}
          minDate={minDate}
          maxDate={maxDate}
          showWeekends={showWeekends}
          weekStart={weekStart}
        />
      </Wrapper>
    </>
  );
};

export default DatePicker;
