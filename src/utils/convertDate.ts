import { format } from "date-fns";

export const convertDate = (date: string) => {
  const result = format(new Date(date), "dd/MM/yyyy HH:mm:ss");
  return result;
};
