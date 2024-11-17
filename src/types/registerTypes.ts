import { z } from "zod";

export const SignUpSchema = z
  .object({
    firstName: z.string().min(2, "First Name is required"),
    lastName: z.string().min(2),
    email: z.string().email(),
    password: z
      .string()
      .min(10, "Password must be at least 10 characters")
      .regex(/(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[^A-Za-z0-9])/),
    confirmPassword: z.string().min(10) ,
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type SIGN_UP_SCHEMA = z.infer<typeof SignUpSchema>;
