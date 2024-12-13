import * as z from "zod";

export const ONBOARDING_SCHEMA = z.object({
  // Step 1: Personal Information
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  gender: z.enum(["male", "female", "other"]),
  // zipCode: z.string().min(5, "Zip code must be at least 5 digits"),
  email: z.string().email("Invalid email address"),
  dateOfBirth: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Invalid date format"),
  countryCode: z.string().min(1, "Country code is required"),
  country: z.string().min(1, "Country is required"),
  phoneNumber: z.string().min(5, "Phone number must be at least 5 digits"),
  profileImage: z.string().optional(),
  

  // Step 2: Financial Goals
  primaryGoal: z.enum([
    "savings",
    "investment",
    "debt_repayment",
    "retirement",
  ]),
  targetAmount: z.number().min(1000, "Target amount must be at least 1000"),
  timeframe: z.number().min(1, "Timeframe must be at least 1 year"),

  // Step 3: Income Details
  employmentStatus: z.enum([
    "employed",
    "self_employed",
    "unemployed",
    "retired",
  ]),
  monthlyIncome: z.number().min(0, "Monthly income cannot be negative"),
  additionalIncome: z.number().min(0, "Additional income cannot be negative"),

  // Step 4: Expense Breakdown
  housingExpense: z.number().min(0, "Housing expense cannot be negative"),
  transportationExpense: z
    .number()
    .min(0, "Transportation expense cannot be negative"),
  foodExpense: z.number().min(0, "Food expense cannot be negative"),
  utilitiesExpense: z.number().min(0, "Utilities expense cannot be negative"),
  otherExpenses: z.number().min(0, "Other expenses cannot be negative"),
});

export type TYPE_ONBOARDING_SCHEMA = z.infer<typeof ONBOARDING_SCHEMA>;
