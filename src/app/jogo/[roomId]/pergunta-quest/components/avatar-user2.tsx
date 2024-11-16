import Image from "next/image";

export function Avatar2() {
  return (
    <div className="flex flex-col items-center gap-4">
      <Image
        src="/images/Avatar1.png"
        width={60}
        height={60}
        alt="Player1"
        className="w-16 h-16 p-1 rounded-full ring-2 ring-red-300 dark:ring-red-500"
      />
      <div className="font-medium text-sm dar:text-white">
        <div>Jogador 2</div>
      </div>
    </div>
  );
}
