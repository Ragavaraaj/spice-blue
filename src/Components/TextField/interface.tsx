import { ChangeEvent } from "react";

export interface Props {
  initialValue?: string;
  onChange: (name: string, data: string) => void;
}

export type localOnChangeType = (event: ChangeEvent<HTMLInputElement>) => void;
