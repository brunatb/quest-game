import { AnchorHTMLAttributes } from "react";

type Props = React.PropsWithChildren<AnchorHTMLAttributes<HTMLAnchorElement>>;

export function LinkButton({ children, ...props }: Props) {
  return (
    <a
      className="bg-background-link rounded-[10px] flex items-center 
      text-center justify-center 
      shadow-md border-1.5 w-full text-base py-4 shadow-gray-950 border-none"
      {...props}
    >
      {children}
    </a>
  );
}
