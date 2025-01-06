import { Check } from "lucide-react";

interface ProgressIndicatorProps {
  currentStep: number;
  totalSteps: number;
  currency: string;
}

export default function FormProgressIndicator({
  currentStep,
  totalSteps,
  currency = "USD ($)",
}: ProgressIndicatorProps) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        {Array.from({ length: totalSteps }, (_, i) => (
          <div key={i} className="flex items-center ">
            <div
              className={`rounded-full h-4 w-4 flex items-center justify-center ${
                i <= currentStep ? "bg-primary" : "bg-muted"
              }`}
            >
              {i < currentStep && (
                <Check className="h-3 w-3 text-primary-foreground" />
              )}
            </div>
            {i < totalSteps - 1 && (
              <div
                className={`h-1 w-16 ${
                  i < currentStep ? "bg-primary" : "bg-muted"
                }`}
              />
            )}
          </div>
        ))}
      </div>

      <div className="flex items-center space-x-2 bg-gray-100 text-gray-800 border border-gray-300 rounded-lg p-2 shadow-sm">
        <span className="text-md font-semibold">{currency}</span>
        <span className="text-sm text-gray-500">Currency</span>
      </div>
    </div>
  );
}
