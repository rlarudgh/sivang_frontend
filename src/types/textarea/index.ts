import { ChangeEvent } from "react";

export interface TextAreaType {
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  label: string;
  placeholder: string;
}
