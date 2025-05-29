import { ButtonHTMLAttributes, FC } from "react";
import { cva, VariantProps } from "class-variance-authority";
import clsx from "clsx";
import { colorPalette } from '../../../../styles/colors';

// Tailwind base + variants using class-variance-authority
const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md font-medium transition-colors cursor-pointer disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        default: `bg-[${colorPalette.buttonBg}] text-[${colorPalette.buttonText}] hover:bg-[${colorPalette.buttonHoverBg}]  `,
        primary: `bg-[${colorPalette.primary}] text-white hover:bg-[${colorPalette.secondary}]`,
        secondary: `bg-[${colorPalette.bg1}] text-[${colorPalette.text}] hover:bg-[${colorPalette.bg2}]`,
        danger: `bg-[${colorPalette.accent}] text-white hover:bg-[${colorPalette.tertiary}]`,
        ghost: `bg-transparent hover:bg-[${colorPalette.bg1}] text-[${colorPalette.text}]`,
        link: `text-[${colorPalette.primary}] underline-offset-4 hover:underline`,
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
      type="button"
      className={clsx(buttonVariants({ variant, size }), className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;