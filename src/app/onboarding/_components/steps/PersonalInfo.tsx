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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Camera, CameraIcon } from "lucide-react";
import { useRef } from "react";
import { TYPE_ONBOARDING_SCHEMA } from "@/schema/onBoardingSchema";
import Image from "next/image";
import { revalidatePath } from "next/cache";

const countryCodes = [
  { value: "+1", label: "United States (+1)" },
  { value: "+44", label: "United Kingdom (+44)" },
  { value: "+91", label: "India (+91)" },
  { value: "+86", label: "China (+86)" },
  { value: "+81", label: "Japan (+81)" },
  // Add more country codes as needed
];

export const revalidate = 2;
export default function PersonalInfo() {
  const { control, setValue, watch } = useFormContext<TYPE_ONBOARDING_SCHEMA>();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const profileImage = watch("profileImage");

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setValue("profileImage", reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex flex-col w-full items-center bg-red-600 justify-center ">
      <div className="flex flex-col self-start">
        <h1 className="text-3xl">Basic Details</h1>
        <span className="text-ui-ui_light_600 inline-block w-full text-xs">
          Please fill the fields below with your contact details.
        </span>
      </div>

      <FormField
        control={control}
        name="profileImage"
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <div className="relative">
                <Avatar className="w-[10rem] h-[10rem]">
                  <AvatarImage
                    className="object-cover"
                    src={field.value}
                    alt="Profile"
                  />
                  <AvatarFallback>
                    <Image
                      src="https://www.tapback.co/api/avatar.webp"
                      fill
                      alt="Memoji"
                    />
                  </AvatarFallback>
                </Avatar>

                <Button
                  type="button"
                  className="absolute bottom-0 -right-0 text-xs"
                  onClick={() => fileInputRef.current?.click()}
                >
                  <CameraIcon size={10} />
                </Button>
                <input
                  type="file"
                  ref={fileInputRef}
                  className="hidden"
                  accept="image/*"
                  onChange={handleImageUpload}
                />
              </div>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <div className="grid grid-cols-6 w-full">
        <FormField
          control={control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input placeholder="John Doe" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="john@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <FormField
        control={control}
        name="dateOfBirth"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Date of Birth</FormLabel>
            <FormControl>
              <Input type="date" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <div className="flex space-x-4">
        <FormField
          control={control}
          name="countryCode"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormLabel>Country Code</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select country code" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {countryCodes.map((code) => (
                    <SelectItem key={code.value} value={code.value}>
                      {code.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="phoneNumber"
          render={({ field }) => (
            <FormItem className="flex-[2]">
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <Input type="tel" placeholder="123456789" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  );
}
