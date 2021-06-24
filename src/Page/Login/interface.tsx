import { ChangeEvent, FormEvent } from "react";
import { IPage } from "../../AppInterface";

export interface Props {
  setPage: React.Dispatch<React.SetStateAction<IPage>>;
}

export type OnSubmitType = (event: FormEvent<HTMLFormElement>) => void;

export type localOnChangeType = (event: ChangeEvent<HTMLInputElement>) => void;
