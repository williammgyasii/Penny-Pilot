"use client";
import { SignUpData } from "@/types/types";
import * as React from "react";
import { useForm } from "react-hook-form";

export default function RegisterReactForm() {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors, isSubmitting },
    getValues,
    reset,
  } = useForm<SignUpData>();

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
