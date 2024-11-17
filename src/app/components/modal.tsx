export function Modal({ children }: Props) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center w-full">
      <div className="p-2 rounded-lg md:max-w-lg w-full z-10 max-h-dvh overflow-y-auto scroll-py-2 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-300">
        {children}
      </div>
    </div>
  );
}

type Props = {
  children: React.ReactNode;
};
