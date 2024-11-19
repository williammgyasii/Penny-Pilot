import { z } from "zod";

export const REGISTER_SCHEMA = z.object({
  firstName: z.string().min(2, "First Name is required"),
  lastName: z.string().min(2, "Last Name is required"),
  email: z.string().email(),
  password: z
    .string()
    .min(10, "Password must be at least 10 characters")
    .regex(/(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[^A-Za-z0-9])/),
});

export type TYPE_REGISTER_SCHEMA = z.infer<typeof REGISTER_SCHEMA>;
