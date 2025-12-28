import React from "react";

const SectionHeading = ({
  badge,
  title,
  description,
  align = "center",
  className,
}) => {
  const alignmentClass = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end ml-auto",
  };

  return (
    <div
      className={`flex flex-col gap-4 max-w-3xl ${alignmentClass[align]} ${className}`}
    >
      {/* Badge */}
      {badge && (
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
          <span className="text-xs font-bold text-primary tracking-wider uppercase">
            {badge}
          </span>
        </div>
      )}

      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
        {title}
      </h2>

      {/* Description */}
      {description && (
        <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
