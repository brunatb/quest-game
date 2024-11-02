import Image from "next/image";

export function LogoQueston(){
    return (
    <Image
        src="/images/LogoAtual.png"
        width={300}
        height={300}
        alt="Logotipo Principal do Aplicativo"
      />
    )
}