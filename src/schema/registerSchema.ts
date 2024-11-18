import { z } from "zod";

export const REGISTER_SCHEMA = z.object({
  firstName: z.string().min(2, "First Name is required"),
  lastName: z.string().min(2, "Last Name is required"),
  email: z.string().email(),
  password: z
    .string()
    .min(10, "Password must be at least 10 characters")
    .refine(
      (password) => {
        let strength = 0;
        if (password.length >= 8) strength++;
        if (/[A-Z]/.test(password) && /[a-z]/.test(password)) strength++;
        if (/[0-9]/.test(password) && /[^A-Za-z0-9]/.test(password)) strength++;

        return strength; // Adjust the minimum strength threshold as needed
      },
      {
        message: "Password is too weak",
      }
    ),
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
