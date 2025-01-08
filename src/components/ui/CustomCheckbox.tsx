"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";

interface CustomCheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const CustomCheckbox: React.FC<CustomCheckboxProps> = ({
  label,
  className,
  ...props
}) => {
  const [checked, setChecked] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
    if (props.onChange) {
      props.onChange(e);
    }
  };

  return (
    <label className="inline-flex items-center cursor-pointer">
      <div className="relative">
        <input
          type="checkbox"
          className="sr-only"
          checked={checked}
          onChange={handleChange}
          {...props}
        />
        <div
          className={cn(
            "size-10 border rounded-full transition-all duration-200 ease-in-out disabled:bg-red-500",
            checked
              ? "border-primary bg-primary"
              : "border-gray-600 bg-transparent",
            className
          )}
        >
          <svg
            className={cn(
              "w-full h-full stroke-white stroke-[1] transition-all duration-200 ease-in-out",
              checked ? "opacity-100" : "opacity-0"
            )}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 13l4 4L19 7"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={cn(
                "transition-all duration-200 ease-in-out",
                checked ? "stroke-dashoffset-0" : "stroke-dashoffset-[29]"
              )}
              style={{
                strokeDasharray: "29",
                strokeDashoffset: checked ? "0" : "29",
              }}
            />
          </svg>
        </div>
      </div>
      {label && <span className="ml-3 text-sm">{label}</span>}
    </label>
  );
};
