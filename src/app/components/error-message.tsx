export function ErrorMessage({ children }: Props) {
  return <div className="text-red-500 text-sm">{children}</div>;
}

type Props = {
 children: React.ReactNode;
};
