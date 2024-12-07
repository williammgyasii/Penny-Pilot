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
import { useAppDispatch } from "@/redux/reduxhooks";
import { RootState } from "@/redux/store";
import { REGISTER_SCHEMA, TYPE_REGISTER_SCHEMA } from "@/schema/registerSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import PasswordRequirements from "./PasswordRequirements";
import PasswordStrengthIndicator from "./PasswordStrengthIndicator";
import { useRouter } from "next/navigation";
import { addToast } from "@/redux/features/toastSlice";
import { LOGIN_EXISTING_USER } from "@/redux/functions/authFunctions";
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { LOGIN_SCHEMA, TYPE_LOGIN_SCHEMA } from "@/schema/loginSchema";

export default function LoginForm() {
  const form = useForm<TYPE_REGISTER_SCHEMA>({
    resolver: zodResolver(LOGIN_SCHEMA),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { AUTH_SLICE_LOADING } = useSelector((state: RootState) => state.auth);
  const { toast } = useToast();

  const handleSubmit = form.handleSubmit(async (data: TYPE_LOGIN_SCHEMA) => {
    try {
      console.log(AUTH_SLICE_LOADING);
      const { email, password } = data;
      await dispatch(LOGIN_EXISTING_USER({ email, password })).unwrap();
      router.push("/dashboard");
    } catch (error) {
      console.log("Login error on login page", error);
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: error as string,
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
    }
  });

  return (
    <>
      <Form {...form}>
        <div className=" w-[90%]  xl:w-[85%]">
          <form onSubmit={handleSubmit} className="space-y-2">
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
                </FormItem>
              )}
            />

            <Button
              className="w-full "
              isLoading={AUTH_SLICE_LOADING}
              disabled={form.formState.isSubmitting}
              type="submit"
            >
              Login
            </Button>
          </form>
          <GoogleSignInButton />
        </div>
      </Form>
    </>
  );
}
