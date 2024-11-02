import Image from "next/image";

export function Avatar({imgSrc, imgClassName, playerName}: Props) {
    return (
      <div className="flex flex-col  justify-center items-center gap-4">
        <Image
            src={imgSrc}
            width={60}
            height={60}
            alt={playerName}
            className={`w-16 h-16 p-1 rounded-full ring-2 ${imgClassName}`}
          />
          <div className="text-sm dar:text-white font-bold">
            <div>{playerName}</div>
          </div>
      
      </div>
    );
}

type Props = {
  imgSrc: string;
  imgClassName: string;
  playerName: string;
}