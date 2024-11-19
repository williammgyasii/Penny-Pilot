import { Check, Info, X } from "lucide-react";
import { useEffect, useState } from "react";

interface PasswordRule {
  id: string;
  label: string;
  validator: (password: string) => boolean;
  met: boolean;
}

const PasswordRequirements: React.FC<{ password: string }> = ({ password }) => {
  const [rules, setRules] = useState<PasswordRule[]>([
    {
      id: "length",
      label: "At least 8 characters long",
      validator: (pass) => pass?.length >= 8,
      met: false,
    },
    {
      id: "uppercase",
      label: "Contains uppercase letter",
      validator: (pass) => /[A-Z]/.test(pass),
      met: false,
    },
    {
      id: "lowercase",
      label: "Contains lowercase letter",
      validator: (pass) => /[a-z]/.test(pass),
      met: false,
    },
    {
      id: "number",
      label: "Contains number",
      validator: (pass) => /[0-9]/.test(pass),
      met: false,
    },
    {
      id: "special",
      label: "Contains special character",
      validator: (pass) => /[^A-Za-z0-9]/.test(pass),
      met: false,
    },
  ]);

  useEffect(() => {
    setRules((prevRules) =>
      prevRules.map((rule) => ({
        ...rule,
        met: rule.validator(password),
      }))
    );
  }, [password]);

  return (
    <div className="mt-2 space-y-2 bg-gray-800 rounded-lg px-4 py-3 text-white text-xs">
      <div className="flex flex-row items-center w-full justify-center space-x-2">
        <Info size={20} className="inline-block" />
        <p className="font-medium text-white">Password requirements:</p>
      </div>
      <ul className="space-y-1">
        {rules.map((rule) => (
          <li
            key={rule.id}
            className="flex items-center gap-2 transition-colors duration-200"
          >
            <span className="flex-shrink-0">
              {rule.met ? (
                <Check className="w-4 h-4 text-green-500" />
              ) : (
                <X className="w-4 h-4 text-red-500" />
              )}
            </span>
            <span className={rule.met ? "text-green-700" : "text-white-600"}>
              {rule.label}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PasswordRequirements;
