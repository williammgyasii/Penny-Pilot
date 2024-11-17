"use client";
import { SignUpData } from "@/types/types";
import { zodResolver } from "@hookform/resolvers/zod";
import * as React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const SignUpSchema = z
  .object({
    firstName: z.string().min(2),
    lastName: z.string().min(2),
    email: z.string().email(),
    password: z.string().min(10, "Password must be at least 10 characters"),
    confirmPassword: z.string().min(10),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export default function RegisterReactForm() {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors, isSubmitting },
    getValues,
    reset,
  } = useForm<SignUpData>({
    resolver: zodResolver(SignUpSchema),
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    reset();
  });
  // firstName and lastName will have correct type

  return (
    <form onSubmit={onSubmit} className="flex flex-col space-y-4">
      <label>First Name</label>
      <input {...register("firstName", { required: "Email is required" })} />
      <label>Last Name</label>
      <input {...register("lastName", { required: "Password is required" })} />
      <button className="bg-blue-800" type="button">
        SetValue
      </button>
    </form>
  );
}
