"use client";

import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const FormInput = ({
  label,
  name,
  type = "text",
  placeholder,
  register,
  rules = {},
  error,
  className = "",
  children,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  // Check input field type
  const isPasswordField = type === "password";
  const inputType = isPasswordField
    ? showPassword
      ? "text"
      : "password"
    : type;

  return (
    <div className={className}>
      {/* Label */}
      <div className="flex item-center justify-between">
        <label htmlFor={name} className="text-sm font-medium text-white">
          {label}
        </label>
        {children}
      </div>
      <div className="relative mt-1">
        {/* Input Field */}
        <input
          id={name}
          type={inputType}
          placeholder={placeholder}
          {...register(name, rules)}
          className={`flex h-11 w-full rounded-lg border border-transparent bg-white/90 dark:bg-white/10 px-3 py-2 text-sm text-gray-900 dark:text-white placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 transition-all shadow-sm ${
            isPasswordField ? "pr-10" : ""
          }`}
        />

        {/* Password Toggle Button (shows only for 'password') */}
        {isPasswordField && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-white transition-colors"
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        )}
      </div>

      {/* Error Message */}
      {error && (
        <p className="text-xs text-red-300 font-medium mt-1">{error.message}</p>
      )}
    </div>
  );
};

export default FormInput;
