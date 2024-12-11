import { z } from "zod";

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

export const OnboardingSchema = z.object({
  firstName: z.string().min(2, "Name is required"),
  lastName: z.string().min(2, "Name is required"),
  email: z.string().email(),
  address: z.string(),
  phone: z.string().regex(phoneRegex, "Invalid phone"),
});

export type TYPE_ONBOARD_SCHEMA = z.infer<typeof OnboardingSchema>;
