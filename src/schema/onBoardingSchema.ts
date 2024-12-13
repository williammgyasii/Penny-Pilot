import * as z from "zod";

const today = new Date();
const minAge = 16;

const calculateMinDate = () => {
  const today = new Date();
  return new Date(today.getFullYear() - 16, today.getMonth(), today.getDate());
};
export const ONBOARDING_SCHEMA = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  gender: z.enum(["male", "female", "other"]),
  // zipCode: z.string().min(5, "Zip code must be at least 5 digits"),
  email: z.string().email("Invalid email address"),
  dateOfBirth: z.string().refine((dob) => {
    const date = new Date(dob);
    return date <= calculateMinDate();
  }, "You must be at least 16 years old to use this app"),
  countryCode: z.string().min(1, "Country code is required"),
  country: z.string().min(1, "Country is required"),
  profileImage: z.string().optional(),
  address: z.string().min(2, "Address is required"),
  phoneNumber: z
    .string()
    .regex(/^\+?[0-9]+$/, {
      message:
        "Phone number must contain only numbers and may optionally start with '+'.",
    })
    .min(5, "Phone number must be at least 5 digits long.")
    .max(15, "Phone number cannot exceed 15 digits."),

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
