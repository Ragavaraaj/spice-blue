import React, { FC, useEffect, useRef, useState } from "react";
import { useOnClickOutside } from "../../utils/hooks";
import { localOnClickType, localOnClickDivType, Props } from "./interface";
import {
  Content,
  Display,
  Icon,
  DropDown,
  DropDownDisplay,
  Container,
} from "./styles";

export const TimeInput: FC<Props> = (props) => {
  const [hours, setHours] = useState<string>(props.initialValue.hours);
  const [minutes, setMinutes] = useState<string>(props.initialValue.mins);
  const [amOrPm, setAmOrPm] = useState<string>(props.initialValue.amOrPM);

  const dropDownRef = useRef<HTMLDivElement>(null);
  const [openDropDown, setOpenDropDown] = useState<boolean>(false);

  useEffect(() => {
    const get24Hrs =
      amOrPm === "PM" && parseInt(hours) < 12
        ? parseInt(hours) + 12
        : parseInt(hours);
    const getTimeInSeconds = get24Hrs * 60 * 60 + parseInt(minutes) * 60;
    props.onChange("task_time", getTimeInSeconds);
  }, [hours, minutes, amOrPm]);

  useOnClickOutside(dropDownRef, () => {
    setOpenDropDown(false);
  });

  const localOnClick: localOnClickType = (forEvent, val) => (event) => {
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

  const localOnClickDiv: localOnClickDivType = (event) => {
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
                    onClick={localOnClick("hours", val)}
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
                onClick={localOnClick("minutes", "00")}
                selected={"00" === minutes}
              >
                00
              </DropDownDisplay>
              <DropDownDisplay
                onClick={localOnClick("minutes", "30")}
                selected={"30" === minutes}
              >
                30
              </DropDownDisplay>
            </div>
            <div>
              <DropDownDisplay
                onClick={localOnClick("amOrPm", "AM")}
                selected={"AM" === amOrPm}
              >
                AM
              </DropDownDisplay>
              <DropDownDisplay
                onClick={localOnClick("amOrPm", "PM")}
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
