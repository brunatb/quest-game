import { InputHTMLAttributes } from "react";

export function Input({ icon, label, ...props }: Props) {
  return (
    <>
      {label && (
        <label className="text-foreground mb-2 inline-block font-semibold">
          {label}
        </label>
      )}
      <div className="flex text-foreground">
        {icon && (
          <span className="inline-flex items-center px-3 text-sm border rounded-e-0 border-foreground border-e-0 rounded-s-md bg-transparent">
            {icon}
          </span>
        )}
        <input
          className={`bg-transparent border block flex-1 min-w-0 w-full text-sm border-foreground p-2.5 outline-none ${
            icon ? "rounded-none rounded-e-lg" : "rounded-lg"
          }`}
          {...props}
        />
      </div>
    </>
  );
}

type Props = React.PropsWithChildren<InputHTMLAttributes<HTMLInputElement>> & {
  icon?: React.ReactNode;
  label?: string;
};
