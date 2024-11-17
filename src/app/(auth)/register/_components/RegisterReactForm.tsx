"use client";
import { SIGN_UP_SCHEMA, SignUpSchema } from "@/types/types";
import { zodResolver } from "@hookform/resolvers/zod";
import * as React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

export default function RegisterReactForm() {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors, isSubmitting },
    getValues,
    reset,
  } = useForm<SIGN_UP_SCHEMA>({
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
