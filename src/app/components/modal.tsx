export function Modal({ children }: Props) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center">
      <div className="p-2 rounded-lg md:w-1/3">{children}</div>
    </div>
  );
}

type Props = {
  children: React.ReactNode;
};
