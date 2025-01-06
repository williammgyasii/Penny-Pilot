"use client";
import { useFormContext } from "react-hook-form";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { format } from "date-fns";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { TYPE_ONBOARDING_SCHEMA } from "@/schema/onBoardingSchema";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { Supported_Countries } from "@/lib/countries";

export default function FinancialGoals() {
  const { control, watch } = useFormContext<TYPE_ONBOARDING_SCHEMA>();
  const [open, setOpen] = useState(false);
  const watchPrimaryGoal = watch("primaryGoal");
  const selectedCurrency = watch("currency");
  // console.log(watch("primaryGoal"));

  const radioOptions: { value: string; label: string; description: string }[] =
    [
      {
        value: "savings",
        label: "Savings 💰",
        description: "Save money for retirement, investments, etc. 🏡📈",
      },
      {
        value: "investment",
        label: "Investment 📊",
        description: "Buy stocks, bonds, or mutual funds to grow wealth. 💸📈",
      },
      {
        value: "debt_repayment",
        label: "Debt 💳",
        description: "Pay off debts or pay for student loans. 🚫💵",
      },
      {
        value: "retirement",
        label: "Retirement 🏖️",
        description: "Save money for retirement and start investing. 🏠🛥️",
      },
      {
        value: "other",
        label: "Other 🤷‍♂️",
        description: "I don't have a clear financial goal yet. ✨",
      },
    ];

  return (
    <div className="space-y-5">
      <h2 className="text-2xl font-bold">Financial Goals</h2>

      <FormField
        control={control}
        name="primaryGoal"
        render={({ field }) => (
          <FormItem className="space-y-3">
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                className="grid grid-cols-5 gap-2"
              >
                {radioOptions.map((plan) => (
                  <div key={plan.value}>
                    <RadioGroupItem
                      value={plan.value}
                      id={plan.value}
                      className="peer sr-only"
                    />
                    <Label
                      htmlFor={plan.value}
                      className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent cursor-pointer hover:text-accent-foreground peer-data-[state=checked]:border-blue-500 [&:has([data-state=checked])]:border-primary"
                    >
                      <span className=" font-poppins font-medium">
                        {plan.label}
                      </span>
                      {/* <span className="text-xs">{plan.description}/mo</span> */}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      {watchPrimaryGoal === "savings" && (
        <div className="grid grid-cols-3 gap-4 justify-center items-center ">
          <FormField
            control={control}
            name="targetAmount"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Target Amount {selectedCurrency}</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="10000"
                    {...field}
                    onChange={(e) => field.onChange(+e.target.value)}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={control}
            name="savingsTargetDate"
            render={({ field }) => (
              <FormItem className="flex flex-col space-y-1">
                <FormLabel>End Target Date</FormLabel>
                <Popover open={open} onOpenChange={setOpen}>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "text-left font-normal py-3 mt-10",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={(date) => {
                        field.onChange(date);
                        setOpen(false);
                      }}
                      disabled={(date) =>
                        date > new Date() || date < new Date("1900-01-01")
                      }
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={control}
            name="country"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Country</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your country" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {Supported_Countries.sort((a, b) =>
                      a.name.localeCompare(b.name)
                    ).map((country) => (
                      <SelectItem key={country.code} value={country.code}>
                        {country.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      )}
    </div>
  );
}
