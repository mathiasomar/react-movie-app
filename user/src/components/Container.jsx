import { twMerge } from "tailwind-merge";

const Container = ({ children, className }) => {
  return (
    <div className={twMerge("mx-auto mx-w-[980px] px-6", className)}>
      {children}
    </div>
  );
};

export default Container;
