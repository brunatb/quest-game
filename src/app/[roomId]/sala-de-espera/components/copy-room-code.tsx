"use client";

import { CopyAndPasteIcon } from "@/app/components";

export function CopyRoomCode({ roomId }: Props) {
  const copyRoomCode = () => {
    navigator.clipboard.writeText(roomId);
  };

  return (
    <div className="space-y-4">
      <p className="text-lg text-center">
        Copie o código da sala e compartilhe com mais um jogador para começar!
      </p>
      <div className="flex items-center w-full justify-center">
        <code className="p-2 rounded-md w-fit justify-center text-white flex">
          <span className="py-2 px-4 border-white border-t border-b border-l rounded-l-lg">{roomId}</span>
          <button
            className="text-white px-4 border rounded-r-lg border-white py-2"
            onClick={copyRoomCode}
            type="button"
          >
            <CopyAndPasteIcon />
          </button>
        </code>
      </div>
    </div>
  );
}

type Props = {
  roomId: string;
};
