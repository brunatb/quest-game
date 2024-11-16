import { DrumRoll } from "./components/drum-roll";
import { PoolingComponent } from "./components/pooling-component";

export default function Page({ params }: Props) {
  return (
    <>
      <PoolingComponent roomId={params.roomId} interval={3000} />
      <DrumRoll />
    </>
  );
}

type Props = {
  params: {
    roomId: string;
  };
};
