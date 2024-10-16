import { AnchorHTMLAttributes } from "react";

type Props = React.PropsWithChildren<
  AnchorHTMLAttributes<HTMLAnchorElement>
>;

export function LinkButton({ children, ...props }: Props) {
  return (
    <a
      className="bg-background-link rounded-[10px] flex items-center text-center justify-center 
      shadow-md border-1.5 border-solid border-black h-12 
      sm:h-10 w-60"
      {...props}
    >
      {children}
    </a>
  );
}
