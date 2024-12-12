import { Check } from "lucide-react";

interface ProgressIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

export default function FormProgressIndicator({
  currentStep,
  totalSteps,
}: ProgressIndicatorProps) {
  return (
    <div className="flex items-center justify-between">
      {Array.from({ length: totalSteps }, (_, i) => (
        <div key={i} className="flex items-center">
          <div
            className={`rounded-full h-3 w-3 flex items-center justify-center ${
              i <= currentStep ? "bg-primary" : "bg-muted"
            }`}
          >
            {i < currentStep && (
              <Check className="h-2 w-2 text-primary-foreground" />
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
  );
}
