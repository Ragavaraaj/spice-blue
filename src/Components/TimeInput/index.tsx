import React, { FC, useEffect, useRef, useState } from "react";
import { useOnClickOutside } from "../../utils/hooks";
import { OnChangeOfTimeType, Props } from "./interface";
import {
  Content,
  Display,
  Icon,
  DropDown,
  DropDownDisplay,
  Container,
} from "./styles";
import { OnClickFunctionType } from "../../utils/commonTypes";

export const TimeInput: FC<Props> = (props) => {
  const [hours, setHours] = useState<string>(props.initialValue?.hours ?? "12");
  const [minutes, setMinutes] = useState<string>(
    props.initialValue?.mins ?? "30"
  );
  const [amOrPm, setAmOrPm] = useState<string>(
    props.initialValue?.amOrPM ?? "AM"
  );

  const dropDownRef = useRef<HTMLDivElement>(null);
  const [openDropDown, setOpenDropDown] = useState<boolean>(false);

  useEffect(() => {
    const get24Hrs =
      amOrPm === "PM" && parseInt(hours) < 12
        ? parseInt(hours) + 12
        : parseInt(hours);
    const getTimeInSeconds = get24Hrs * 60 * 60 + parseInt(minutes) * 60;
    props.onChange("task_time", getTimeInSeconds);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hours, minutes, amOrPm]);

  useOnClickOutside(dropDownRef, () => {
    setOpenDropDown(false);
  });

  const onChangeOfTime: OnChangeOfTimeType = (forEvent, val) => (event) => {
    event.preventDefault();
    switch (forEvent) {
      case "hours":
        setHours(val);
        break;
      case "minutes":
        setMinutes(val);
        break;
      case "amOrPm":
        setAmOrPm(val);
        break;
    }
  };

  const localOnClickDiv: OnClickFunctionType = (event) => {
    event.preventDefault();
    setOpenDropDown(true);
  };

  return (
    <Container>
      <label>time</label>
      <Content onClick={localOnClickDiv}>
        <Icon>schedule</Icon>
        <Display>
          {hours}:{minutes} {amOrPm}
        </Display>
        {openDropDown ? (
          <DropDown ref={dropDownRef}>
            <div>
              {Array.from({ length: 12 }, (_, i) => {
                const val = i + 1 < 10 ? `0${i + 1}` : `${i + 1}`;
                return (
                  <DropDownDisplay
                    onClick={onChangeOfTime("hours", val)}
                    selected={val === hours}
                    key={`key_${i}`}
                  >
                    {val}
                  </DropDownDisplay>
                );
              })}
            </div>
            <div>
              <DropDownDisplay
                onClick={onChangeOfTime("minutes", "00")}
                selected={"00" === minutes}
              >
                00
              </DropDownDisplay>
              <DropDownDisplay
                onClick={onChangeOfTime("minutes", "30")}
                selected={"30" === minutes}
              >
                30
              </DropDownDisplay>
            </div>
            <div>
              <DropDownDisplay
                onClick={onChangeOfTime("amOrPm", "AM")}
                selected={"AM" === amOrPm}
              >
                AM
              </DropDownDisplay>
              <DropDownDisplay
                onClick={onChangeOfTime("amOrPm", "PM")}
                selected={"PM" === amOrPm}
              >
                PM
              </DropDownDisplay>
            </div>
          </DropDown>
        ) : (
          ""
        )}
      </Content>
    </Container>
  );
};
