import { createBuilder } from "@ibnlanre/portal";
import { API } from "./axios-config";
import { ITransactionDetailsList } from "@/types";

export const builder = createBuilder({
  supplies: {
    forecast: {
      fetch: () => API.get<ITransactionDetailsList>("/transactions/latest"),
    },
  },
});
