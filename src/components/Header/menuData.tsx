import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 2,
    title: "About",
    path: "/about",
    newTab: false,
  },
  {
    id: 5,
    title: "Contact",
    path: "/contact",
    newTab: false,
  },
  {
    id: 6,
    title: "Products",
    newTab: false,
    submenu: [
      {
        id: 61,
        title: "Personal Loans",
        path: "/products/personal-loans",
        newTab: false,
      },
      {
        id: 61,
        title: "Business Loans",
        path: "/products/business-loans",
        newTab: false,
      },
      {
        id: 61,
        title: "Auto Loans",
        path: "/products/auto-loans",
        newTab: false,
      },

      {
        id: 61,
        title: "Health Loans",
        path: "/products/health-loans",
        newTab: false,
      },

      {
        id: 61,
        title: "Nari Shakti Loans",
        path: "/products/nari-shakti-loans",
        newTab: false,
      },
      
    ],
  },
  {
    id: 6,
    title: "Calculators",
    newTab: false,
    submenu: [
      {
        id: 61,
        title: "Personal Loan Calculator",
        path: "/personal-loan-emi-calculator",
        newTab: false,
      },
      {
        id: 62,
        title: "Auto Loan Calculator",
        path: "/auto-loan-emi-calculator",
        newTab: false,
      },
      {
        id: 63,
        title: "Mutual Fund Calculator",
        path: "/mutual-fund-calculator",
        newTab: false,
      },
      {
        id: 63,
        title: "Sip Calculator",
        path: "/sip-calculator",
        newTab: false,
      },
      
    ],
  },
];
export default menuData;
