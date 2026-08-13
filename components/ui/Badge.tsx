import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "emerald" | "mint" | "deep" | "outline" | "grey";
  className?: string;
  icon?: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "mint",
  className = "",
  icon,
}) => {
  const variantStyles = {
    emerald: "bg-brand-emerald text-brand-deep font-semibold",
    mint: "bg-brand-mint text-brand-deep font-semibold border border-brand-emerald/20",
    deep: "bg-brand-deep text-brand-mint font-medium border border-brand-mint/20",
    outline: "bg-transparent text-brand-deep border border-brand-emerald/40 font-medium",
    grey: "bg-gray-100 text-gray-700 font-medium border border-gray-200",
  };

  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs uppercase tracking-wider rounded-full transition-colors ${variantStyles[variant]} ${className}`}>
      {icon && <span className="w-3.5 h-3.5 flex items-center justify-center">{icon}</span>}
      <span>{children}</span>
    </span>
  );
};
