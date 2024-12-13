"use client";
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
import { useEffect, useRef } from "react";
import { TYPE_ONBOARDING_SCHEMA } from "@/schema/onBoardingSchema";
import Image from "next/image";
import { revalidatePath } from "next/cache";
import { Supported_Countries } from "@/lib/countries";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

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
  // const [countries,setCountries]=useState{Supported_Countries[0]}
  const profileImage = watch("profileImage");
  const selectedCountry = watch("country");

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
    <div className="flex flex-col w-full items-center  justify-center  ">
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
                <Avatar className="w-[8rem] h-[8rem]">
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

      <div className="grid md:grid-cols-6 grid-cols-3 w-full space-x-2 mt-2">
        <FormField
          control={control}
          name="firstName"
          render={({ field }) => (
            <FormItem className="col-span-3">
              <FormLabel>First Name</FormLabel>
              <FormControl>
                <Input
                  type="name"
                  className="focus:border-cyan-700"
                  // placeholder="Email"
                  disabled={true}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="lastName"
          render={({ field }) => (
            <FormItem className="col-span-3">
              <FormLabel>Last Name</FormLabel>
              <FormControl>
                <Input
                  type="name"
                  className="focus:border-cyan-700"
                  // placeholder="Email"
                  disabled={true}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <div className="grid md:grid-cols-6 grid-cols-3 w-full space-x-2 mt-2">
        <FormField
          control={control}
          name="email"
          render={({ field }) => (
            <FormItem className="col-span-3">
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" disabled={true} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="dateOfBirth"
          render={({ field }) => (
            <FormItem className="col-span-3">
              <FormLabel>Date of Birth</FormLabel>
              <FormControl>
                <Input type="date" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <div className="grid md:grid-cols-6 grid-cols-3 w-full space-x-2 mt-2">
        <FormField
          control={control}
          name="country"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Country</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your country" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {Supported_Countries.map((country) => (
                    <SelectItem key={country.code} value={country.code}>
                      {country.name}
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
            <FormItem>
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <Input type="tel" placeholder="123456789" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="email"
          render={({ field }) => (
            <FormItem className="col-span-3">
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" disabled={true} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  );
}
