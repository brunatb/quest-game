import Image from "next/image";

export function Avatar(){
    return (
      <div className="flex flex-col  justify-center items-center gap-4">
        <Image
            src="/images/Avatar5.png"
            width={60}
            height={60}
            alt="Player1"
            className="w-16 h-16 p-1 rounded-full ring-2 ring-blue-300 dark:ring-blue-500"
          />
          <div className="font-medium text-sm dar:text-white">
                <div>Jogador 1</div>
          </div>
      
      </div>
    );
}