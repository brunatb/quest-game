import { Looser } from "../components";

export default function Page({ searchParams }: Props) {
  console.log(searchParams);
  return <Looser />;
}

type Props = {
  searchParams: {
    roomId: string;
  };
};
