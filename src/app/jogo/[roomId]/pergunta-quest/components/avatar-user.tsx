import Image from "next/image";

export function Avatar({imgSrc, imgClassName, playerName}: Props) {
    return (
      <div className="flex flex-col justify-center items-center gap-2">
        <Image
            src={imgSrc}
            width={50}
            height={50}
            alt={playerName}
            className={`p-1 rounded-full bg-white ring-2 ${imgClassName}`}
          />
          <div className="text-sm text-white font-bold">
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