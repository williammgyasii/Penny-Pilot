import { useFormContext } from "react-hook-form";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { TYPE_ONBOARDING_SCHEMA } from "@/schema/onBoardingSchema";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function FinancialGoals() {
  const { control } = useFormContext<TYPE_ONBOARDING_SCHEMA>();

  const radioOptions = [
    {
      value: "savings",
      label: "Savings",
      description: "Save money for retirement, investments, etc.",
    },
    {
      value: "investment",
      label: "Investment",
      description: "Buy stocks, bonds, or mutual funds to grow wealth.",
    },
    {
      value: "debt_repayment",
      label: "Debt Repayment",
      description: "Pay off debts or pay for student loans.",
    },
    {
      value: "retirement",
      label: "Retirement",
      description: "Save money for retirement and start investing.",
    },
    {
      value: "other",
      label: "Other",
      description: "I don't have a clear financial goal yet.",
    },
  ];

  return (
    <div className="space-y-2">
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
                className="grid-cols-10"
              >
                {radioOptions.map(({ value, label, description }, index) => {
                  return (
                    <FormItem
                      key={index}
                      className="flex bg-ui-ui_dark_700 rounded-lg px-2 py-5 col-span-2 items-center space-x-3 space-y-0"
                    >
                      <FormControl>
                        <RadioGroupItem value={value} />
                      </FormControl>
                      <FormLabel className="font-normal text-white">{label}</FormLabel>
                    </FormItem>
                  );
                })}
                {/* 
                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="mentions" />
                  </FormControl>
                  <FormLabel className="font-normal">
                    Direct messages and mentions
                  </FormLabel>
                </FormItem>
                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="none" />
                  </FormControl>
                  <FormLabel className="font-normal">Nothing</FormLabel>
                </FormItem> */}
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="targetAmount"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Target Amount</FormLabel>
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
        name="timeframe"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Timeframe (in years)</FormLabel>
            <FormControl>
              <Input
                type="number"
                placeholder="5"
                {...field}
                onChange={(e) => field.onChange(+e.target.value)}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}
