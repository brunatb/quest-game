import { InputHTMLAttributes } from "react";
import "@fontsource/poppins/700.css";

export function Input({ icon, label, ...props }: Props) {
  return (
    <>
      {label && (
        <label className="mb-2 inline-block font-semibold">{label}</label>
      )}
      <div className="relative flex items-center">
        {icon && <span className="absolute left-3 text-black">{icon}</span>}
        <input
          className={`text-blue-950 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 outline-none shadow-inner ${
            icon ? "pl-10" : "pl-2.5"
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
