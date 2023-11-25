import { createBuilder } from "@ibnlanre/portal";
import { API } from "./axios-config";
import {
  IGraphData,
  ITableList,
  ITransactionDetailsList,
  ITransactionOverviewList,
} from "@/types";

export const builder = createBuilder({
  supplies: {
    forecast: {
      fetch: () => API.get<ITableList>("/supplies/forecast"),
    },
  },
  transaction: {
    latest: {
      fetch: () => API.get<ITransactionDetailsList>("/transactions/latest"),
    },
    overview: {
      fetch: () => API.get<ITransactionOverviewList>("/transactions/overview"),
    },
    logs: { fetch: () => API.get<IGraphData>("transactions/payout-logs") },
  },
});
