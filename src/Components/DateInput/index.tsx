import React from "react";
import { useRef, useState, FC, useEffect } from "react";
import { useOnClickOutside } from "../../utils/hooks";
import { Props, IncOrDecType, OnSelectDateType } from "./interface";
import {
  Container,
  Content,
  Display,
  Icon,
  DropDown,
  YearAndMonthSelector,
  Chevron,
  DoubleChevron,
  DateGrid,
  DateDisplay,
} from "./styles";
import { OnClickFunctionType } from "../../utils/commonTypes";

const MONTH_NAME = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const DateInput: FC<Props> = (props) => {
  const [year, setYear] = useState<number>(
    (props?.initialValue
      ? new Date(props?.initialValue)
      : new Date()
    ).getFullYear()
  );
  const [month, setMonth] = useState<number>(new Date().getMonth());
  const [date, setDate] = useState<number>(new Date().getDate());
  const dropDownRef = useRef<HTMLDivElement>(null);
  const [openDropDown, setOpenDropDown] = useState<boolean>(false);

  useOnClickOutside(dropDownRef, () => {
    setOpenDropDown(false);
  });

  const localOnClick: OnClickFunctionType = (event) => {
    event.preventDefault();
    !openDropDown && setOpenDropDown(true);
  };

  const onSelectDate: OnSelectDateType = (data) => (event) => {
    event.preventDefault();
    setOpenDropDown(false);
    setDate(data);
  };

  const incOrDecYrAndMonth: IncOrDecType = (forValue, action) => (event) => {
    event.preventDefault();
    switch (forValue) {
      case "year":
        setYear((prv) => (action === "inc" ? prv + 1 : prv - 1));
        break;
      case "month":
        if (month === 0 && action === "dec") {
          setYear((prv) => prv - 1);
          setMonth(11);
          break;
        }
        if (month === 12 && action === "inc") {
          setYear((prv) => prv + 1);
          setMonth(0);
          break;
        }
        setMonth((prv) => (action === "inc" ? prv + 1 : prv - 1));
        break;
    }
  };

  const getDateArr = (): number[] => {
    const firstDay = new Date(year, month, 1).getDay();
    const firstDayIndex = firstDay === 0 ? 6 : firstDay - 1;
    const dateRange: number[] = Array.from({ length: 35 }, (_, i) => i + 1);

    if (firstDayIndex === 0) {
      return dateRange;
    }

    const rest = dateRange.slice(0, dateRange.length - firstDayIndex);
    const move = dateRange.slice(
      dateRange.length - firstDayIndex,
      dateRange.length
    );

    return [...move, ...rest];
  };

  useEffect(() => {
    const stringMonth = month < 10 ? `0${month + 1}` : `${month + 1}`;
    const stringDate = date < 10 ? `0${date}` : `${date}`;
    props.onChange("task_date", `${year}-${stringMonth}-${stringDate}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [year, month, date]);

  return (
    <Container>
      <label>date</label>
      <Content onClick={localOnClick}>
        <Icon>date_range</Icon>
        <Display>
          {date < 10 ? `0${date}` : `${date}`}/
          {month < 10 ? `0${month + 1}` : `${month + 1}`}/{year}
        </Display>
        {openDropDown ? (
          <DropDown ref={dropDownRef}>
            <YearAndMonthSelector>
              <DoubleChevron onClick={incOrDecYrAndMonth("year", "dec")}>
                <span>chevron_left</span>
                <span>chevron_left</span>
              </DoubleChevron>
              <Chevron onClick={incOrDecYrAndMonth("month", "dec")}>
                chevron_left
              </Chevron>
              <p>
                {MONTH_NAME[month]} {year}
              </p>
              <Chevron onClick={incOrDecYrAndMonth("month", "inc")}>
                chevron_right
              </Chevron>
              <DoubleChevron
                moveToRight
                onClick={incOrDecYrAndMonth("year", "inc")}
              >
                <span>chevron_right</span>
                <span>chevron_right</span>
              </DoubleChevron>
            </YearAndMonthSelector>
            <DateGrid>
              {["M", "Tu", "W", "Th", "F", "S", "Su"].map((x, i) => (
                <p key={`key_${i}`}>{x}</p>
              ))}
              {getDateArr().map((x) => {
                if (x < new Date(year, month, 0).getDate())
                  return (
                    <DateDisplay
                      onClick={onSelectDate(x)}
                      selected={x === date}
                      key={`key_${x}`}
                    >
                      {x}
                    </DateDisplay>
                  );
                return <p key={`key_${x}`}></p>;
              })}
            </DateGrid>
          </DropDown>
        ) : (
          ""
        )}
      </Content>
    </Container>
  );
};
