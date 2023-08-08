import { ChangeEvent } from "react";

export type Option = {
  value: string;
  label: string;
};

export type SelectProps = {
  options: Option[];
  value: string;
  width: number;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
};
