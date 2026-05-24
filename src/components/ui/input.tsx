import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", ...props }, ref) => {
    return (
      <input
        ref={ref}
        type={type}
        className={cn(
          "flex h-11 w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-2 text-sm text-mist-50 transition-colors placeholder:text-mist-500 hover:border-white/[0.14] focus:border-mint-300/60 focus:bg-white/[0.05] focus:outline-none focus:ring-2 focus:ring-mint-300/20 disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={cn(
          "flex min-h-[96px] w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-sm text-mist-50 transition-colors placeholder:text-mist-500 hover:border-white/[0.14] focus:border-mint-300/60 focus:bg-white/[0.05] focus:outline-none focus:ring-2 focus:ring-mint-300/20 disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
        {...props}
      />
    );
  },
);
Textarea.displayName = "Textarea";

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <select
        ref={ref}
        className={cn(
          "flex h-11 w-full appearance-none rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-2 text-sm text-mist-50 transition-colors hover:border-white/[0.14] focus:border-mint-300/60 focus:bg-white/[0.05] focus:outline-none focus:ring-2 focus:ring-mint-300/20",
          "bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 20 20%22 fill=%22%2375808F%22><path fill-rule=%22evenodd%22 d=%22M5.23 7.21a.75.75 0 011.06.02L10 11.06l3.71-3.83a.75.75 0 111.08 1.04l-4.25 4.39a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z%22 clip-rule=%22evenodd%22/></svg>')]",
          "bg-[length:18px_18px] bg-[right_12px_center] bg-no-repeat pr-10",
          className,
        )}
        {...props}
      >
        {children}
      </select>
    );
  },
);
Select.displayName = "Select";

export function Label({ className, ...props }: React.LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label
      className={cn(
        "mb-1.5 block text-[11px] font-medium uppercase tracking-wider text-mist-400",
        className,
      )}
      {...props}
    />
  );
}
