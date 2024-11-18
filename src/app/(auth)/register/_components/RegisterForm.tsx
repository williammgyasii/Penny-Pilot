"use client";
import GoogleSignInButton from "@/components/GoogleSignInButton";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { registerUser, UserData } from "@/redux/features/authSlice";
import { useAppDispatch } from "@/redux/hooks";
import { REGISTER_SCHEMA, TYPE_REGISTER_SCHEMA } from "@/schema/registerSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Check, Info, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

interface PasswordRule {
  id: string;
  label: string;
  validator: (password: string) => boolean;
  met: boolean;
}

const PasswordStrengthIndicator: React.FC<{
  passwordValue: string;
  errorValue?: string | null;
}> = ({ passwordValue }) => {
  let strength: number = 0;
  if (passwordValue.length >= 4) {
    strength++;
  }
  if (/[A-Z]/.test(passwordValue) && /[a-z]/.test(passwordValue)) {
    strength++;
  }
  if (/[0-9]/.test(passwordValue) && /[^A-Za-z0-9]/.test(passwordValue)) {
    strength++;
  }
  return (
    <div className="flex gap-2 mt-2">
      {[1, 2, 3].map((level) => (
        <div
          key={level}
          className={`h-2 flex-1 rounded-full transition-all duration-500 ${
            strength >= level
              ? strength === 1
                ? "bg-red-500"
                : strength === 2
                ? "bg-yellow-500"
                : "bg-green-500"
              : "bg-gray-200"
          }`}
        />
      ))}
    </div>
  );
};

const PasswordRequirements: React.FC<{ password: string }> = ({ password }) => {
  const [rules, setRules] = useState<PasswordRule[]>([
    {
      id: "length",
      label: "At least 8 characters long",
      validator: (pass) => pass?.length >= 8,
      met: false,
    },
    {
      id: "uppercase",
      label: "Contains uppercase letter",
      validator: (pass) => /[A-Z]/.test(pass),
      met: false,
    },
    {
      id: "lowercase",
      label: "Contains lowercase letter",
      validator: (pass) => /[a-z]/.test(pass),
      met: false,
    },
    {
      id: "number",
      label: "Contains number",
      validator: (pass) => /[0-9]/.test(pass),
      met: false,
    },
    {
      id: "special",
      label: "Contains special character",
      validator: (pass) => /[^A-Za-z0-9]/.test(pass),
      met: false,
    },
  ]);

  useEffect(() => {
    setRules((prevRules) =>
      prevRules.map((rule) => ({
        ...rule,
        met: rule.validator(password),
      }))
    );
  }, [password]);

  return (
    <div className="mt-2 space-y-2 bg-gray-800 rounded-lg px-4 py-3 text-white text-xs">
      <div className="flex flex-row items-center w-full justify-center space-x-2">
        <Info size={20} className="inline-block" />
        <p className="font-medium text-white">Password requirements:</p>
      </div>
      <ul className="space-y-1">
        {rules.map((rule) => (
          <li
            key={rule.id}
            className="flex items-center gap-2 transition-colors duration-200"
          >
            <span className="flex-shrink-0">
              {rule.met ? (
                <Check className="w-4 h-4 text-green-500" />
              ) : (
                <X className="w-4 h-4 text-red-500" />
              )}
            </span>
            <span className={rule.met ? "text-green-700" : "text-white-600"}>
              {rule.label}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default function RegisterForm() {
  const form = useForm<TYPE_REGISTER_SCHEMA>({
    resolver: zodResolver(REGISTER_SCHEMA),
  });
  const router = useRouter();
  const dispatch = useAppDispatch();

  const onSubmit = form.handleSubmit(async (data: TYPE_REGISTER_SCHEMA) => {
    console.log(data);
    const result = await dispatch(registerUser(data))
  });
  // firstName and lastName will have correct type

  return (
    <>
      <Form {...form}>
        <div className=" w-[90%]  xl:w-[85%]">
          <form onSubmit={onSubmit} className="space-y-2">
            <div className="grid grid-cols-2 w-full gap-2">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem className="col-span-2 lg:col-span-1">
                    <FormLabel>First Name</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        className="focus:border-cyan-700"
                        placeholder="First Name"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem className=" col-span-2 lg:col-span-1">
                    <FormLabel>Last Name</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        className="focus:border-cyan-700"
                        placeholder="Last Name"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      className="focus:border-cyan-700"
                      placeholder="Email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      minLength={10}
                      type="password"
                      className="focus:border-cyan-700"
                      placeholder="************"
                      {...field}
                    />
                  </FormControl>
                  {form.getValues("password") && (
                    <PasswordStrengthIndicator
                      passwordValue={form.getValues("password")}
                    />
                  )}
                  {form.getValues("password") && (
                    <PasswordRequirements password={field.value} />
                  )}

                  {/* <FormMessage /> */}
                </FormItem>
              )}
            />

            <Button
              className="w-full "
              isLoading={form.formState.isSubmitting}
              disabled={form.formState.isSubmitting}
              type="submit"
            >
              Register
            </Button>
          </form>
          <GoogleSignInButton />
        </div>
      </Form>
    </>
  );
}
