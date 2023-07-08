import { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";

function Button({ className, ...props }: ComponentPropsWithoutRef<"button">) {
  const _className = twMerge(
    className,
    "appearance-none rounded-lg bg-primary p-2 text-sm font-medium text-white shadow transition-all hover:bg-primaryDarker"
  );

  return (
    <button className={_className} {...props}>
      {props.children}
    </button>
  );
}

export default Button;