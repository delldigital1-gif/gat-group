import Link from "next/link";
import { ReactNode, ButtonHTMLAttributes } from "react";

type Variant = "copper" | "outline" | "dark" | "ghost";

const variantClasses: Record<Variant, string> = {
  copper:
    "bg-copper text-white hover:bg-copper-2 border border-copper",
  outline:
    "bg-transparent text-blueprint border border-steel-soft hover:border-blueprint",
  dark: "bg-blueprint text-white hover:bg-blueprint-2 border border-blueprint",
  ghost: "bg-transparent text-blueprint hover:text-copper border border-transparent",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-[2px] px-5 py-2.5 text-sm font-medium font-body transition-colors duration-150";

export function Button({
  href,
  children,
  variant = "copper",
  className = "",
  ...rest
}: {
  href?: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>) {
  const classes = `${base} ${variantClasses[variant]} ${className}`;
  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
