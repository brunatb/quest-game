import { Winner } from "../components";

export default function Page({ searchParams }: Props) {
  return <Winner />;
}

type Props = {
  searchParams: {
    roomId: string;
  };
};
