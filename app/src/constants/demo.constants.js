import {
  faChartPie,
  faDollarSign,
  faMoneyBill,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

export const DEMO_LIVE_DATA_CARDS = [
  {
    title: "$6,449,620",
    subtitle: "Invested in Fairmint",
    variant: "info",
    icon: faDollarSign,
  },
  {
    title: "$34.3M",
    subtitle: "Company valuation",
    variant: "primary",
    icon: faUser,
  },
  {
    title: "2,187,707 FAIR",
    subtitle: "Purchased by investors",
    variant: "success",
    icon: faMoneyBill,
  },
  {
    title: "35.36 %",
    subtitle: "Equity allocation (minimum)",
    variant: "danger",
    icon: faChartPie,
  },
];

export const DEMO_SAFE_PARAMETERS = [
  {
    title: "35.36 %",
    subtitle: "Invested in Fairmint",
    variant: "grey-light",
  },
  {
    title: "3.36 %",
    subtitle: "Stakeholders Equity allocation",
    variant: "grey-light",
  },
  {
    title: "12 months",
    subtitle: "Lock-up period",
    variant: "warning",
  },
  {
    title: "USDC",
    subtitle: "Reserve currency",
    variant: "success",
  },
  {
    title: "$5000",
    subtitle: "Minimum investment",
    variant: "success",
  },
];
