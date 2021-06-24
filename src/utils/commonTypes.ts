import { MouseEvent, FormEvent, ChangeEvent } from "react";

export type OnClickFunctionType = (event: MouseEvent<HTMLElement>) => void;

export type OnSubmitFunctionType = (event: FormEvent<HTMLFormElement>) => void;

export type OnChangeFunctionType = (
  event: ChangeEvent<HTMLInputElement>
) => void;
