import React from "react";

interface ButtonProps {
  title: string;
  size?: "small" | "medium" | "large";
  shape?: "rounded-sm" | "rounded-md" | "rounded-full";
}

const Button: React.FC<ButtonProps> = ({
  title,
  size = "medium",
  shape = "rounded-md",
}) => {
  const classes =
    size === "small"
      ? "px-2 py-1 text-sm"
      : size === "large"
      ? "px-4 py-2 text-lg"
      : "px-3 py-1 text-md";
  return (
    <>
      <button
        className={`${classes} ${shape} bg-blue-500 text-white hover:bg-blue-700`}
      >
        {title}
      </button>
    </>
  );
};

export default Button;
