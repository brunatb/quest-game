import { Winner } from "../components";

export default function Page({ searchParams }: Props) {
  console.log(searchParams);
  return <Winner />;
}

type Props = {
  searchParams: {
    roomId: string;
  };
};
