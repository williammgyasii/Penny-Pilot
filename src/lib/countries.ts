type CountryType = {
  name: string;
  code: string;
  dialCode: string;
};

export const Supported_Countries: CountryType[] = [
  { name: "United States", code: "US", dialCode: "+1" },
  { name: "United Kingdom", code: "GB", dialCode: "+44" },
  { name: "Canada", code: "CA", dialCode: "+1" },
  { name: "Australia", code: "AU", dialCode: "+61" },
  { name: "Germany", code: "DE", dialCode: "+49" },
  { name: "France", code: "FR", dialCode: "+33" },
  { name: "Japan", code: "JP", dialCode: "+81" },
  { name: "China", code: "CN", dialCode: "+86" },
  { name: "India", code: "IN", dialCode: "+91" },
  { name: "Brazil", code: "BR", dialCode: "+55" },
  // Add more countries as needed
];
