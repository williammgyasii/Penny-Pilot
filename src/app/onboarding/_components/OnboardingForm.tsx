"use client";
import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import PersonalInfo from "./steps/PersonalInfo";
import FinancialGoals from "./steps/FinancialGoals";
import IncomeDetails from "./steps/IncomeInfo";
import ExpenseBreakdown from "./steps/ExpenseBreakdown";
import { useToast } from "@/hooks/use-toast";
import {
  ONBOARDING_SCHEMA,
  TYPE_ONBOARDING_SCHEMA,
} from "@/schema/onBoardingSchema";
import FormProgressIndicator from "./FormProgressIndicator";
import { Form } from "@/components/ui/form";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

const steps = [
  {
    component: PersonalInfo,
    fields: [
      "firstName",
      "lastName",
      "gender",
      "email",
      "dateOfBirth",
      "country",
      "countryCode",
      "phoneNumber",
      "profileImage",
    ],
  },
  {
    component: FinancialGoals,
    fields: ["primaryGoal", "targetAmount", "timeframe"],
  },
  {
    component: IncomeDetails,
    fields: ["employmentStatus", "monthlyIncome", "additionalIncome"],
  },
  {
    component: ExpenseBreakdown,
    fields: [
      "housingExpense",
      "transportationExpense",
      "foodExpense",
      "utilitiesExpense",
      "otherExpenses",
    ],
  },
];
export default function OnboardingFormControl() {
  const [currentStep, setCurrentStep] = useState(0);
  const { toast } = useToast();
  const { currentUser } = useSelector((state: RootState) => state.auth);
  const methods = useForm<TYPE_ONBOARDING_SCHEMA>({
    resolver: zodResolver(ONBOARDING_SCHEMA),
    mode: "onChange",
    defaultValues: {
      firstName: currentUser?.firstName,
      lastName: currentUser?.lastName,
      email: currentUser?.email,
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
      const userId = uuidv4();

      // Handle profile image upload
      let profileImageUrl = data.profileImage;
      if (data.profileImage && data.profileImage.startsWith("data:")) {
        const imageId = uuidv4();
        const storageRef = ref(storage, `profile_images/${imageId}`);
        const response = await fetch(data.profileImage);
        const blob = await response.blob();
        await uploadBytes(storageRef, blob);
        profileImageUrl = await getDownloadURL(storageRef);
      }

      // Prepare user data
      const userData = {
        ...data,
        profileImage: profileImageUrl,
        createdAt: new Date(),
      };

      // Add user data to Firestore
      await setDoc(doc(db, "users", userId), userData);

      toast({
        title: "Success",
        description: "Your financial profile has been saved.",
      });

      // Redirect to profile
      router.push(`/profile/${userId}`);
    } catch (error) {
      console.error("Error submitting form: ", error);
      toast({
        title: "Error",
        description:
          "There was an error saving your profile. Please try again.",
        variant: "destructive",
      });
    }
  };

  const nextStep = async () => {
    const fieldsToValidate = steps[currentStep]
      .fields as (keyof TYPE_ONBOARDING_SCHEMA)[];
    const isStepValid = await trigger(fieldsToValidate);

    if (isStepValid) {
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

  const CurrentStepComponent = steps[currentStep].component;

  return (
    <Form {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 px-4">
        <FormProgressIndicator
          currentStep={currentStep}
          totalSteps={steps.length}
        />
        <div className="h-[65vh]">
          <CurrentStepComponent />
        </div>
        <div className="flex justify-between ">
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
    </Form>
  );
}
