// receive all props from button element

export function Button({ children, ...props }: Props) {
  return (
    <button
      {...props}
      className={`bg-background-link rounded-[10px] flex items-center 
      text-center justify-center 
      shadow-md border-1.5 w-full text-xl py-3 shadow-gray-950 border-none cursor-pointer ${
        props.disabled ? "opacity-30" : ""
      }`}
    >
      {children}
    </button>
  );
}

type Props = React.PropsWithChildren<
  React.ButtonHTMLAttributes<HTMLButtonElement>
>;
