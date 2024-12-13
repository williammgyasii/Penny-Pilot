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
import { CameraIcon } from "lucide-react";
import { useMemo, useRef } from "react";
import { TYPE_ONBOARDING_SCHEMA } from "@/schema/onBoardingSchema";
import Image from "next/image";
import { Supported_Countries } from "@/lib/countries";
import { calculateMinDate } from "@/lib/utils";

export const revalidate = 2;
export default function PersonalInfo() {
  const { control, setValue, watch, formState } =
    useFormContext<TYPE_ONBOARDING_SCHEMA>();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const profileImage = watch("profileImage");
  const selectedCountry = watch("country");

  const countryCode = useMemo(() => {
    const countryCode = Supported_Countries.find(
      (country) => country.code === selectedCountry
    );
    setValue("countryCode", countryCode?.dialCode || "");
    return countryCode?.dialCode as string;
  }, [selectedCountry, setValue]);

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

  console.log(formState.errors);

  return (
    <div className="flex flex-col w-full items-center  justify-center space-y-3">
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
                      priority
                      sizes="50vh"
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

      <div className="grid md:grid-cols-6 grid-cols-3 w-full space-x-3 mt-5">
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

      <div className="grid md:grid-cols-6 grid-cols-3 w-full space-x-3 ">
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
          render={({ field }) => {
            const minDate = calculateMinDate();
            return (
              <FormItem className="col-span-3">
                <FormLabel>Date of Birth</FormLabel>
                <FormControl>
                  <Input
                    type="date"
                    max={calculateMinDate()}
                    {...field}
                    onChange={(e) => {
                      const selectedDate = new Date(e.target.value);
                      const minAllowedDate = new Date(calculateMinDate());
                      if (selectedDate <= minAllowedDate) {
                        field.onChange(e);
                      } else {
                        // If an invalid date is selected, clear the input
                        e.target.value = "";
                        field.onChange(e);
                      }
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />
      </div>

      <div className="grid md:grid-cols-6 grid-cols-3 w-full space-x-3 ">
        <FormField
          control={control}
          name="gender"
          render={({ field }) => (
            <FormItem className="col-span-3">
              <FormLabel>Gender</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="address"
          render={({ field }) => (
            <FormItem className="col-span-3">
              <FormLabel>Address</FormLabel>
              <FormControl>
                <Input type="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <div className="grid md:grid-cols-10 grid-cols-3 w-full space-x-3 ">
        <FormField
          control={control}
          name="country"
          render={({ field }) => (
            <FormItem className="col-span-5">
              <FormLabel>Country</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your country" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {Supported_Countries.sort((a, b) =>
                    a.name.localeCompare(b.name)
                  ).map((country) => (
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
            <FormItem className="col-span-5">
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <div className="flex">
                  <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 w-[3.5rem] sm:text-sm">
                    {countryCode}
                  </span>
                  <Input
                    type="tel"
                    placeholder="123456789"
                    className="rounded-l-none"
                    {...field}
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  );
}
