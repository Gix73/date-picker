import { styled } from "styled-components";

export const CalendarWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 1px solid #e1e1e1;
  border-radius: 8px;
`;
export const CalendarControlsWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 29px;
  padding: 10px 10px 0;
`;
export const ImgWrapper = styled.div`
  cursor: pointer;
  width: 16px;
  height: 16px;
`;
export const Img = styled.img`
  width: 100%;
  height: auto;
`;
export const CalendarContainer = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(7, 1fr);
  gap: 5px;
`;
export const Title = styled.span`
  width: 100%;
  text-align: center;
`;
export const DaysWrapper = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(7, 1fr);
  gap: 5px;
  padding: 0px 10px;
`;

export const DayCell = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 32px;
  width: 100%;
  height: 32px;
  font-size: 15px;
`;
