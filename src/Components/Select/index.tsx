import React, { FC, useRef, useState } from "react";
import { useOnClickOutside } from "../../utils/hooks";
import { DropDown, Container, Display, DropDownDisplay } from "./styles";
import { localOnSelectType, Props } from "./interface";
import { FetchDropDownDataType_Results_Data } from "../../ApiResponseType";
import { OnClickFunctionType } from "../../utils/commonTypes";

export const Select: FC<Props> = (props) => {
  const [selectValue, setSelectValue] = useState(
    props?.initialValue ?? "Select"
  );

  const dropDownRef = useRef<HTMLDivElement>(null);
  const [openDropDown, setOpenDropDown] = useState<boolean>(false);

  useOnClickOutside(dropDownRef, () => {
    setOpenDropDown(false);
  });

  const localOnSelect: localOnSelectType = (data) => (event) => {
    event.preventDefault();
    props.onChange("assigned_user", data.user_id);
    setSelectValue(data.name);
    setOpenDropDown(false);
  };

  const localOnClick: OnClickFunctionType = (event) => {
    event.preventDefault();
    setOpenDropDown((prv) => !prv);
  };

  return (
    <Container>
      <label>assign user</label>
      <Display onClick={localOnClick} clickedStyleChange={openDropDown}>
        {selectValue}
      </Display>
      {openDropDown ? (
        <DropDown ref={dropDownRef}>
          {props.dropDownData?.map(
            (data: FetchDropDownDataType_Results_Data, i) => (
              <DropDownDisplay onClick={localOnSelect(data)} key={`key_${i}`}>
                {data.name}
              </DropDownDisplay>
            )
          )}
        </DropDown>
      ) : (
        ""
      )}
    </Container>
  );
};
