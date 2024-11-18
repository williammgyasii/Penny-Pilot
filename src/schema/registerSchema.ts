import { z } from "zod";

export const REGISTER_SCHEMA = z.object({
  firstName: z.string().min(2, "First Name is required"),
  lastName: z.string().min(2, "Last Name is required"),
  email: z.string().email(),
  password: z
    .string()
    .min(10, "Password must be at least 10 characters")
    .regex(/(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[^A-Za-z0-9])/,),
  // confirmPassword: z
  //   .string()
  //   .min(10, "Confirm Password must be at least 10 characters"),
});
// .refine((data) => data.password === data.confirmPassword, {
//   message: "Passwords do not match",
//   path: ["confirmPassword"],
// });

export type TYPE_REGISTER_SCHEMA = z.infer<typeof REGISTER_SCHEMA>;

export const LOGIN_SCHEMA = z.object({
  email: z.string().email(),
  password: z.string(),
});
