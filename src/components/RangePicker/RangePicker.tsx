import React, { useState, type FC } from "react";
import { RangeContainer } from "./styled";
import DatePicker from "@/components/DatePicker/DatePicker";
import { type RangePickerProps } from "./types";

const RangePicker: FC<RangePickerProps> = ({
  type,
  minDate,
  maxDate,
  showWeekends,
  weekStart,
  withTodo,
  startDate,
  endDate,
}) => {
  const [newStartDate, setStartDate] = useState(startDate);
  const [newEndDate, setEndDate] = useState(endDate);

  const handleStartDate = (newDate: Date): void => {
    setStartDate(newDate);
  };

  const handleEndDate = (newDate: Date): void => {
    setEndDate(newDate);
  };

  return (
    <RangeContainer>
      <DatePicker
        onChange={handleStartDate}
        minDate={minDate}
        maxDate={maxDate}
        startDate={newStartDate}
        endDate={newEndDate}
        showWeekends={showWeekends}
        weekStart={weekStart}
        withTodo={withTodo}
        type={type}
        title="From"
      />
      <DatePicker
        onChange={handleEndDate}
        minDate={minDate}
        maxDate={maxDate}
        startDate={newStartDate}
        endDate={newEndDate}
        showWeekends={showWeekends}
        weekStart={weekStart}
        withTodo={withTodo}
        type={type}
        title="To"
      />
    </RangeContainer>
  );
};

export default RangePicker;
