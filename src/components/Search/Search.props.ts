import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface ISearchProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLFormElement>, HTMLFormElement> {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  queryRequest: (query: string) => void;
}
