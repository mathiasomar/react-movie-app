import { twMerge } from "tailwind-merge";

const Button = ({ children, size = "md" }) => {
  const sizeClassNames = {
    small: "text-xs px-2 py-1",
    medium: "text-sm px-5 py-3",
    large: "text-base px-8 py-5",
  };
  return (
    <button
      className={twMerge(
        "bg-white text-textBlack rounded-full",
        sizeClassNames[size]
      )}
    >
      {children}
    </button>
  );
};

export default Button;
