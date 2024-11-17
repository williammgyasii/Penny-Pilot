"use client";
import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
}

interface PasswordStrengthIndicatorProps {
  strength: number;
}

const PasswordStrengthIndicator: React.FC<PasswordStrengthIndicatorProps> = ({
  strength,
}) => {
  return (
    <div className="flex gap-2 mt-2">
      {[1, 2, 3].map((level) => (
        <div
          key={level}
          className={`h-2 flex-1 rounded-full transition-all duration-500 ${
            strength >= level
              ? strength === 1
                ? "bg-red-500"
                : strength === 2
                ? "bg-yellow-500"
                : "bg-green-500"
              : "bg-gray-200"
          }`}
        />
      ))}
    </div>
  );
};

const RegistrationForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [passwordStrength, setPasswordStrength] = useState<number>(0);

  const validatePassword = (password: string): number => {
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password) && /[a-z]/.test(password)) strength++;
    if (/[0-9]/.test(password) && /[^A-Za-z0-9]/.test(password)) strength++;
    return strength;
  };

  const validateEmail = (email: string): boolean => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  useEffect(() => {
    const strength = validatePassword(formData.password);
    setPasswordStrength(strength);
  }, [formData.password]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newErrors: FormErrors = {};

    if (!formData.firstName.trim())
      newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (passwordStrength < 2) {
      newErrors.password = "Password is too weak";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted:", formData);
      // Handle form submission
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="w-full bg-red-900">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Input
              placeholder="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className={errors.firstName ? "border-red-500" : ""}
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm">{errors.firstName}</p>
            )}
          </div>
          <div className="space-y-2">
            <Input
              placeholder="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className={errors.lastName ? "border-red-500" : ""}
            />
            {errors.lastName && (
              <p className="text-red-500 text-sm">{errors.lastName}</p>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <Input
            placeholder="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full ${errors.email ? "border-red-500" : ""}`}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}
        </div>

        <div className="space-y-2">
          <Input
            placeholder="Password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className={`w-full ${errors.password ? "border-red-500" : ""}`}
          />
          <PasswordStrengthIndicator strength={passwordStrength} />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password}</p>
          )}
        </div>

        <Button type="submit" className="w-full">
          Register
        </Button>
      </form>
    </div>
  );
};

export default RegistrationForm;
