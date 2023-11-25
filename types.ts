import React, { ReactNode } from "react";

export interface ISidebarItem {
  id: number;
  text: string;
  icon: React.ReactNode;
  c: string;
  link: string;
}

export interface IQuickTransfer {
  id: string;
  img: string;
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

// transaction overview type
export interface ITransactionOverviewList {
  message: string;
  current_page: number;
  page_size: number;
  next_page_url: null;
  prev_page_url: null;
  count: number;
  data: ITransactionOverviewData[];
}

export interface ITransactionOverviewData {
  name: string;
  current: number;
  last_month: number;
}

// table data type
export interface ITableList {
  data: ITableData;
}

export interface ITableData {
  message: string;
  current_page: number;
  page_size: number;
  next_page_url: null;
  prev_page_url: null;
  count: number;
  data: ITableResult[];
}

export interface ITableResult {
  actual_value: number;
  forecasted_value: number;
  name: string;
  q1_variance: number;
  q2_variance: number;
  q3_variance: number;
  q4_variance: number;
}

// graph data type
export interface IGraphList {
  message: string;
  current_page: number;
  page_size: number;
  next_page_url: null;
  prev_page_url: null;
  count: number;
  data: IGraphData[];
}

export interface IGraphData {
  date: Date;
  salary_paid: number;
  cash_bond_bought: number;
}
