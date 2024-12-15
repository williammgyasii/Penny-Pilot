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
    <div className="flex items-center">
      {Array.from({ length: totalSteps }, (_, i) => (
        <div key={i} className="flex items-center ">
          <div
            className={`rounded-full h-7 w-7 flex items-center justify-center ${
              i <= currentStep ? "bg-primary" : "bg-muted"
            }`}
          >
            {i < currentStep && (
              <Check className="h-5 w-5 text-primary-foreground" />
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
