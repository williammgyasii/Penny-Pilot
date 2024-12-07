import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import Spinner from "../Spinner";

const buttonVariants = cva(
  `inline-flex items-center justify-center relative gap-2 whitespace-nowrap rounded-md 
  text-sm font-medium ring-offset-background transition-colors overflow-hidden
  group px-7 py-2.5`,
  {
    variants: {
      variant: {
        default:
          "bg-primary bg-blue-600 text-primary-foreground hover:bg-ui-ui_blue_700/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-blue-900 text-blue-800 shadow-sm shadow-blue-900/20 bg-transparent hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: " hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  icon?: LucideIcon;
  iconSize?: number;
  href?: string;
  isLink?: boolean;
  isLoading?: boolean;
  isAninmated?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,

      icon: Icon,
      iconSize = 24,
      children,

      isAninmated = true,

      isLoading = false,
      ...props
    },
    ref
  ) => {
    const Comp = "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        // href={href}
        ref={ref}
        {...props}
      >
        {isAninmated && (
          <div
            className="absolute  inset-0 h-[200%] w-[200%] 
        rotate-45 translate-x-[-70%] transition-all 
        group-hover:scale-100 bg-white/50 group-hover:translate-x-[50%] z-20 duration-1000"
          />
        )}
        {children}
        {isLoading && <Spinner />}
        {Icon && (
          <span
            className={cn(
              "inline-block transition-transform duration-300 ease-in-out ",
              {
                "group-hover:animate-bounce": isAninmated === true,
              }
            )}
          >
            <Icon size={iconSize} />
          </span>
        )}
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
