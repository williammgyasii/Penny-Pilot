"use client";
import GoogleSignInButton from "@/components/GoogleSignInButton";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useAppDispatch } from "@/redux/hooks";
import { RootState } from "@/redux/store";
import { REGISTER_SCHEMA, TYPE_REGISTER_SCHEMA } from "@/schema/registerSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import PasswordRequirements from "./PasswordRequirements";
import PasswordStrengthIndicator from "./PasswordStrengthIndicator";
import { useRouter } from "next/navigation";
import { addToast } from "@/redux/features/toastSlice";
import { registerUser } from "@/redux/asyncfunctions/authFunctions";

export default function LoginForm() {
  const form = useForm<TYPE_REGISTER_SCHEMA>({
    resolver: zodResolver(REGISTER_SCHEMA),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
  });
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { AUTH_SLICE_LOADING } = useSelector((state: RootState) => state.auth);

  const onSubmit = form.handleSubmit(async (data: TYPE_REGISTER_SCHEMA) => {
    try {
      const result = await dispatch(registerUser(data)).unwrap();
      if (result) {
        router.push("/dashboard/overview");
        form.reset();
        dispatch(
          addToast({
            message: "Account created successfully!",
            type: "success",
          })
        );
      }
      form.reset();
    } catch (error: unknown) {
      dispatch(
        addToast({
          message: (error as string) || "Registration failed",
          type: "error",
        })
      );
    }
  });

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
              isLoading={AUTH_SLICE_LOADING}
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
