import React from "react";
import { Sun, Moon } from "lucide-react";

const Switch = ({ checked, onChange, label }) => {
  return (
    <label className="inline-flex items-center gap-3 cursor-pointer select-none">
      {label && <span className="text-sm text-foreground/80">{label}</span>}

      <span className="relative inline-block w-12 h-7">
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className="peer sr-only"
          aria-label={label || "Toggle"}
        />

        {/* Track */}
        <span className="absolute inset-0 rounded-full bg-background/50 border border-muted-foreground dark:border-border/30 transition-colors duration-300" />

        <span
          className="
            absolute left-1 top-1 grid h-5 w-5 place-items-center rounded-full
            bg-primary text-primary-foreground shadow-md
            transition-transform duration-300 ease-out
            peer-checked:translate-x-5

            [&_.sun]:transition-all [&_.sun]:duration-300
            [&_.moon]:transition-all [&_.moon]:duration-300

            [&_.moon]:scale-0 [&_.moon]:-rotate-90 [&_.moon]:opacity-0
            peer-checked:[&_.sun]:scale-0 peer-checked:[&_.sun]:rotate-90 peer-checked:[&_.sun]:opacity-0
            peer-checked:[&_.moon]:scale-100 peer-checked:[&_.moon]:rotate-0 peer-checked:[&_.moon]:opacity-100
          "
        >
          <Sun className="sun h-3.5 w-3.5" />
          <Moon className="moon absolute h-3.5 w-3.5" />
        </span>

        {/* Soft glow */}
        <span className="pointer-events-none absolute -inset-1 rounded-full bg-primary/20 blur-md opacity-0 transition-opacity duration-300 peer-checked:opacity-60" />
      </span>
    </label>
  );
};

export default Switch;
