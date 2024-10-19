import { Winner } from "./components/winner";
import { Looser } from "./components";

export default function Page({ searchParams }: Props) {
  if (searchParams?.tipo === "perdedor") {
    return <Looser />;
  }

  return <Winner />;
}

type Props = {
  searchParams: {
    tipo: string;
  };
};
