import { c } from "@/contract";

import { z } from "zod";

export const authContract = c.router({
  login: {
    method: "POST",
    path: "/login",
    body: z.object({
      email: z.string().email(),
      password: z.string().min(8),
    }),
    responses: {
      200: z.object({
        token: z.string(),
      }),
      401: z.object({
        message: z.string(),
      }),
    },
    summary: "Login to the application",
  },
  register: {
    method: "POST",
    path: "/register",
    body: z.object({
      email: z.string().email(),
      password: z.string().min(8),
    }),
    responses: {
      201: z.object({
        message: z.string(),
      }),
    },
    summary: "Register to the application",
  },
});
