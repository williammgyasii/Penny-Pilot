const PasswordStrengthIndicator: React.FC<{
  passwordValue: string;
  errorValue?: string | null;
}> = ({ passwordValue }) => {
  let strength: number = 0;
  if (passwordValue.length >= 4) {
    strength++;
  }
  if (/[A-Z]/.test(passwordValue) && /[a-z]/.test(passwordValue)) {
    strength++;
  }
  if (/[0-9]/.test(passwordValue) && /[^A-Za-z0-9]/.test(passwordValue)) {
    strength++;
  }
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

export default PasswordStrengthIndicator;
