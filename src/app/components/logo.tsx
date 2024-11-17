import Image from "next/image";

export function LogoQueston(){
    return (
    <Image
        src="/images/LogoAtual.png"
        width={250}
        height={250}
        alt="Logotipo Principal do Aplicativo"
      />
    )
}