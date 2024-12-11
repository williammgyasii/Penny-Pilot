import { z } from "zod";
export const OnboardingSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email(),
  password: z.string().min(10, "Password must be at least 10 characters"),
});

export type TYPE_ONBOARD_SCHEMA = z.infer<typeof OnboardingSchema>;
