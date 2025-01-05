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
    <div className="space-y-2">
      <h2 className="text-2xl font-bold">Financial Goals</h2>
      
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
