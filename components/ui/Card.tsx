"use client";

import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  bordered?: boolean;
  bg?: "white" | "mint" | "light" | "deep";
}

export const Card: React.FC<CardProps> = ({
  children,
  className = "",
  hoverEffect = true,
  bordered = true,
  bg = "white",
}) => {
  const bgStyles = {
    white: "bg-white text-gray-900",
    mint: "bg-brand-mint/40 text-brand-deep",
    light: "bg-brand-light text-gray-900",
    deep: "bg-brand-deep text-white",
  };

  const borderStyle = bordered
    ? bg === "deep"
      ? "border border-white/10"
      : "border border-gray-200/80 shadow-xs"
    : "";

  const hoverStyle = hoverEffect
    ? "transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-emerald/5 hover:border-brand-emerald/40"
    : "";

  return (
    <div className={`rounded-xl p-6 md:p-8 ${bgStyles[bg]} ${borderStyle} ${hoverStyle} ${className}`}>
      {children}
    </div>
  );
};
