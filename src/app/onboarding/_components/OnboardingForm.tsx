"use client";

import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { formSchema, FormData } from "@/types/form";
import PersonalInfo from "./steps/PersonalInfo";
import FinancialGoals from "./steps/FinancialGoals";
import IncomeDetails from "./steps/IncomeDetails";
import ExpenseBreakdown from "./steps/ExpenseBreakdown";
import ProgressIndicator from "./ProgressIndicator";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { useToast } from "@/components/ui/use-toast";

const firebaseConfig = {
  // Your Firebase configuration here
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const steps = [PersonalInfo, FinancialGoals, IncomeDetails, ExpenseBreakdown];

export default function FinancialForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const { toast } = useToast();
  const methods = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    defaultValues: {
      fullName: "",
      email: "",
      dateOfBirth: "",
      countryCode: "+1",
      phoneNumber: "",
      profileImage: "",
      primaryGoal: "savings",
      targetAmount: 0,
      timeframe: 0,
      employmentStatus: "employed",
      monthlyIncome: 0,
      additionalIncome: 0,
      housingExpense: 0,
      transportationExpense: 0,
      foodExpense: 0,
      utilitiesExpense: 0,
      otherExpenses: 0,
    },
  });

  const { handleSubmit, trigger } = methods;

  const onSubmit = async (data: FormData) => {
    try {
      await addDoc(collection(db, "financialProfiles"), data);
      toast({
        title: "Success",
        description: "Your financial profile has been saved.",
      });
    } catch (error) {
      console.error("Error adding document: ", error);
      toast({
        title: "Error",
        description:
          "There was an error saving your profile. Please try again.",
        variant: "destructive",
      });
    }
  };

  const nextStep = async () => {
    const isValid = await trigger();
    if (isValid) {
      setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
    } else {
      toast({
        title: "Validation Error",
        description:
          "Please fill in all required fields correctly before proceeding.",
        variant: "destructive",
      });
    }
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  const CurrentStepComponent = steps[currentStep];

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        <ProgressIndicator
          currentStep={currentStep}
          totalSteps={steps.length}
        />
        <CurrentStepComponent />
        <div className="flex justify-between">
          <Button
            type="button"
            onClick={prevStep}
            disabled={currentStep === 0}
            variant="outline"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Previous
          </Button>
          {currentStep === steps.length - 1 ? (
            <Button type="submit">Submit</Button>
          ) : (
            <Button type="button" onClick={nextStep}>
              Next <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          )}
        </div>
      </form>
    </FormProvider>
  );
}
