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

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Financial Goals</h2>
      <FormField
        control={control}
        name="primaryGoal"
        render={({ field }) => (
          <FormItem className="space-y-3">
            <FormLabel>Notify me about...</FormLabel>
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                className="flex flex-col space-y-1"
              >
                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="all" />
                  </FormControl>
                  <FormLabel className="font-normal">
                    All new messages
                  </FormLabel>
                </FormItem>
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
                </FormItem>
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
        // <FormItem>
        //   <FormLabel>Primary Financial Goal</FormLabel>
        //   <Select onValueChange={field.onChange} defaultValue={field.value}>
        //     <FormControl>
        //       <SelectTrigger>
        //         <SelectValue placeholder="Select a goal" />
        //       </SelectTrigger>
        //     </FormControl>
        //     <SelectContent>
        //       <SelectItem value="savings">Savings</SelectItem>
        //       <SelectItem value="investment">Investment</SelectItem>
        //       <SelectItem value="debt_repayment">Debt Repayment</SelectItem>
        //       <SelectItem value="retirement">Retirement</SelectItem>
        //     </SelectContent>
        //   </Select>
        //   <FormMessage />
        // </FormItem>
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
