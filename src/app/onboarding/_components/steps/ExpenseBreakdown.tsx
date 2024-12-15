import { useFormContext } from "react-hook-form";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { TYPE_ONBOARDING_SCHEMA } from "@/schema/onBoardingSchema";

export default function ExpenseBreakdown() {
  const { control } = useFormContext<TYPE_ONBOARDING_SCHEMA>();

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Expense Breakdown</h2>
      <FormField
        control={control}
        name="housingExpense"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Housing Expense</FormLabel>
            <FormControl>
              <Input
                type="number"
                placeholder="1500"
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
        name="transportationExpense"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Transportation Expense</FormLabel>
            <FormControl>
              <Input
                type="number"
                placeholder="300"
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
        name="foodExpense"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Food Expense</FormLabel>
            <FormControl>
              <Input
                type="number"
                placeholder="500"
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
        name="utilitiesExpense"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Utilities Expense</FormLabel>
            <FormControl>
              <Input
                type="number"
                placeholder="200"
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
        name="otherExpenses"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Other Expenses</FormLabel>
            <FormControl>
              <Input
                type="number"
                placeholder="300"
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
