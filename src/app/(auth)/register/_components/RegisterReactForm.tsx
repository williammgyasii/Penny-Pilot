"use client";
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
import { REGISTER_SCHEMA, TYPE_REGISTER_SCHEMA } from "@/schema/registerSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export default function RegisterReactForm() {
  const form = useForm<TYPE_REGISTER_SCHEMA>({
    resolver: zodResolver(REGISTER_SCHEMA),
  });

  const onSubmit = form.handleSubmit((data: TYPE_REGISTER_SCHEMA) => {
    console.log(data);
    // reset();
  });
  // firstName and lastName will have correct type

  return (
    <>
      <Form {...form}>
        <form onSubmit={onSubmit} className="space-y-8 pt-4 w-[80%]">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                {/* <FormLabel>First Name</FormLabel> */}
                <FormControl>
                  <Input
                    className="focus:border-cyan-700"
                    placeholder="First Name"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            className="w-full"
            isLoading={form.formState.isSubmitting}
            disabled={form.formState.isSubmitting}
            type="submit"
          >
            Submit
          </Button>
        </form>
      </Form>
    </>
  );
}
