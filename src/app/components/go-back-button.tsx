import { ArrowLeft } from "./icons";

export function GoBackButton({ children, href }: Props) {
  return (
    <a href={href} className="text-foreground font-semibold text-sm flex items-center gap-2">
      <ArrowLeft />
      {children}
    </a>
  );
}

type Props = {
  children: React.ReactNode;
  href: string;
};
