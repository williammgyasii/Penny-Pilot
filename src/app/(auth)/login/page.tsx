"use client";
import { RootState } from "@/redux/store";
import React from "react";
import { useSelector } from "react-redux";

const LoginPage = () => {
  const { currentUser } = useSelector((state: RootState) => state.auth);
  console.log(currentUser);
  return <div>Login Page</div>;
};

export default LoginPage;
