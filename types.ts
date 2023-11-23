import React, { ReactNode } from "react";

export interface ISidebarItem {
  id: number;
  text: string;
  icon: React.ReactNode;
}

// transaction details type
export interface ITransactionDetailsList {
  message: string;
  current_page: number;
  page_size: number;
  next_page_url: null;
  prev_page_url: null;
  count: number;
  data: ITransactionDetailsData[];
}

export interface ITransactionDetailsData {
  created_at: Date;
  charged_by: ChargedBy;
  charge: ITransactionDetailsCharge;
}

export interface ITransactionDetailsCharge {
  amount: number;
  currency: ITransactionDetailsCurrency;
  type: string;
}

export interface ITransactionDetailsCurrency {
  code: string;
  sign: string;
}

export interface ChargedBy {
  company: string;
  logo: string;
}
