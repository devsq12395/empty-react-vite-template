import { ButtonHTMLAttributes, FC } from "react";
import { cva, VariantProps } from "class-variance-authority";
import clsx from "clsx";

// Tailwind base + variants using class-variance-authority
const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        default: "bg-gray-800 text-white hover:bg-gray-700 focus:ring-gray-500",
        primary: "bg-blue-600 text-white hover:bg-blue-500 focus:ring-blue-400",
        secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200 focus:ring-gray-300",
        danger: "bg-red-600 text-white hover:bg-red-500 focus:ring-red-400",
        ghost: "bg-transparent hover:bg-gray-100 text-gray-800",
        link: "text-blue-600 underline-offset-4 hover:underline",
      },
      size: {
        sm: "px-3 py-1.5 text-sm",
        md: "px-4 py-2 text-base",
        lg: "px-5 py-3 text-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  className?: string;
}

// Industry-standard button component
export const Button: FC<ButtonProps> = ({
  children,
  className,
  variant,
  size,
  ...props
}) => {
  return (
    <button
      className={clsx(buttonVariants({ variant, size }), className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;