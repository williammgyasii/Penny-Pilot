import { NavItem } from "@/types/userTypes";

export const navItems: NavItem[] = [
  {
    title: "Dashboard",
    url: "/dashboard/overview",
    icon: "dashboard",
    isActive: true,
    shortcut: ["d", "d"],
    items: [], // No child items
  },
  {
    title: "Budgeting",
    url: "/dashboard/budgeting",
    icon: "budget",
    shortcut: ["b", "b"],
    isActive: false,
    items: [
      {
        title: "Monthly Budget",
        url: "/dashboard/budgeting/monthly",
        // icon: "monthly",
        shortcut: ["m", "b"],
      },
      {
        title: "Savings Plan",
        url: "/dashboard/budgeting/savings",
        // icon: "savings",
        shortcut: ["s", "p"],
      },
      {
        title: "Debt Tracker",
        url: "/dashboard/budgeting/debt-tracker",
        // icon: "debt",
        shortcut: ["d", "t"],
      },
    ],
  },
  {
    title: "Expenses",
    url: "/dashboard/expenses",
    icon: "expenses",
    shortcut: ["e", "e"],
    isActive: false,
    items: [
      {
        title: "Recent Transactions",
        url: "/dashboard/expenses/recent",
        // icon: "transactions",
        shortcut: ["r", "t"],
      },
      {
        title: "Recurring Expenses",
        url: "/dashboard/expenses/recurring",
        // icon: "recurring",
        shortcut: ["r", "e"],
      },
      {
        title: "Expense Categories",
        url: "/dashboard/expenses/categories",
        // icon: "categories",
        shortcut: ["e", "c"],
      },
    ],
  },
  {
    title: "AI Forecasting",
    url: "/dashboard/ai-forecasting",
    icon: "ai",
    shortcut: ["a", "f"],
    isActive: false,
    items: [
      {
        title: "Income Prediction",
        url: "/dashboard/ai-forecasting/income-prediction",
        // icon: "prediction",
        shortcut: ["i", "p"],
      },
      {
        title: "Expense Projection",
        url: "/dashboard/ai-forecasting/expense-projection",
        // icon: "projection",
        shortcut: ["e", "p"],
      },
    ],
  },
  {
    title: "Tax Tools",
    url: "/dashboard/tax-tools",
    icon: "tax",
    shortcut: ["t", "t"],
    isActive: false,
    items: [
      {
        title: "Income Overview",
        url: "/dashboard/tax-tools/income",
        // icon: "income",
        shortcut: ["i", "o"],
      },
      {
        title: "Deductions",
        url: "/dashboard/tax-tools/deductions",
        // icon: "deductions",
        shortcut: ["d", "d"],
      },
      {
        title: "Tax Filing",
        url: "/dashboard/tax-tools/filing",
        // icon: "filing",
        shortcut: ["t", "f"],
      },
    ],
  },
  {
    title: "Financial Goals",
    url: "/dashboard/goals",
    icon: "goals",
    shortcut: ["f", "g"],
    isActive: false,
    items: [
      {
        title: "Set a Goal",
        url: "/dashboard/goals/set",
        // icon: "goal-setting",
        shortcut: ["s", "g"],
      },
      {
        title: "Progress Tracker",
        url: "/dashboard/goals/progress",
        // icon: "progress",
        shortcut: ["p", "t"],
      },
    ],
  },
  {
    title: "Group Financials",
    url: "/dashboard/group-financials",
    icon: "group",
    shortcut: ["g", "g"],
    isActive: false,
    items: [
      {
        title: "Shared Budgets",
        url: "/dashboard/group-financials/shared-budgets",
        // icon: "shared-budget",
        shortcut: ["s", "b"],
      },
      {
        title: "Group Contributions",
        url: "/dashboard/group-financials/contributions",
        // icon: "contributions",
        shortcut: ["g", "c"],
      },
    ],
  },

  {
    title: "Reports",
    url: "/dashboard/reports",
    icon: "reports",
    shortcut: ["r", "r"],
    isActive: false,
  },
];
