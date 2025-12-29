"use client";

import { Field, Input, Label, Textarea } from "@headlessui/react";
import { cn } from "@/lib/utils";

export function HeadlessInput({
    label,
    name,
    type = "text",
    placeholder,
    value,
    onChange,
    required = false,
    className,
    textarea = false,
    rows = 3,
    ...props
}) {
    return (
        <Field className={cn("w-full", className)}>
            {label && (
                <Label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    {label}
                </Label>
            )}
            {textarea ? (
                <Textarea
                    name={name}
                    required={required}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    rows={rows}
                    className={cn(
                        "w-full p-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all",
                        "data-[hover]:shadow-sm data-[focus]:bg-white dark:data-[focus]:bg-slate-950"
                    )}
                    {...props}
                />
            ) : (
                <Input
                    type={type}
                    name={name}
                    required={required}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    className={cn(
                        "w-full p-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all",
                        "data-[hover]:shadow-sm data-[focus]:bg-white dark:data-[focus]:bg-slate-950"
                    )}
                    {...props}
                />
            )}
        </Field>
    );
}
