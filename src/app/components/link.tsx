import { AnchorHTMLAttributes } from "react";

export function Link({ children, variant = "dark", ...props }: Props) {
  const classNames =
    variant === "dark"
      ? " border-black/[.08] dark:border-white/[.145] hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent"
      : "bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc]";
  return (
    <a
      className={`w-full rounded-full border border-solid transition-colors flex items-center justify-center text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44 ${classNames}`}
      {...props}
    >
      {children}
    </a>
  );
}

type Props = React.PropsWithChildren<
  AnchorHTMLAttributes<HTMLAnchorElement>
> & {
  variant?: "light" | "dark";
};
