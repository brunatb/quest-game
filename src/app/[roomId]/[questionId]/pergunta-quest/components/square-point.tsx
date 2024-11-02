export function SquarePoint({ points }: Props) {
  return (
    <div className="text-sm">
      Pontos
      <div className=" flex items-center justify-center h-8  bg-white space-y-2 border-2 border-gray-500 p-2 rounded-xl text-3xl text-black">
        {points}
      </div>
    </div>
  );
}

type Props = {
  points: number;
};
