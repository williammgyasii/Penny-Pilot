import { z } from "zod";

export const LOGIN_SCHEMA = z.object({
  email: z.string().email(),
  password: z.string(),
});

export type TYPE_LOGIN_SCHEMA = z.infer<typeof LOGIN_SCHEMA>;
