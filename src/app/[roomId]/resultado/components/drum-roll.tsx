import Image from "next/image";

export function DrumRoll() {
  return (
    <div className="w-full flex flex-col justify-center items-center h-screen-minus-200">
      <Image
        src="/images/drumroll.gif"
        width={350}
        height={350}
        alt="Drum Roll"
      />
      <h1 className="font-poppins mt-6 text-lg">Calculando resultados...</h1>
    </div>
  );
}
