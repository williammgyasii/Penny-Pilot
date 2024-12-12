import { useFormContext } from "react-hook-form"
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { FormData } from "@/types/form"

export default function IncomeDetails() {
  const { control } = useFormContext<FormData>()

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Income Details</h2>
      <FormField
        control={control}
        name="employmentStatus"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Employment Status</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="employed">Employed</SelectItem>
                <SelectItem value="self_employed">Self-employed</SelectItem>
                <SelectItem value="unemployed">Unemployed</SelectItem>
                <SelectItem value="retired">Retired</SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name="monthlyIncome"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Monthly Income</FormLabel>
            <FormControl>
              <Input type="number" placeholder="5000" {...field} onChange={(e) => field.onChange(+e.target.value)} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name="additionalIncome"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Additional Income</FormLabel>
            <FormControl>
              <Input type="number" placeholder="1000" {...field} onChange={(e) => field.onChange(+e.target.value)} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  )
}

