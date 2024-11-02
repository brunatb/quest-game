import { Looser } from "../components";

export default function Page({ searchParams }: Props) {
  return <Looser />;
}

type Props = {
  searchParams: {
    roomId: string;
  };
};
