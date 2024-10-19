import { User as UserProtocol } from "@/shared/protocols";
import { FaUser } from "react-icons/fa";
import { PiCoinsFill } from "react-icons/pi";

export function User({ user }: Props) {
  return (
    <div className="w-full flex justify-end items-center gap-4 pt-6">
      <div className="flex items-center gap-2">
        <FaUser className="text-[##6200e1] font-bold" size={20} />
        <span className="text-[##6200e1] font-bold">{user.username}</span>
      </div>
      <div className="flex items-center gap-2">
        <PiCoinsFill className="text-[##6200e1] font-bold" size={20} />
        <span className="text-[##6200e1] font-bold">0</span>
      </div>
    </div>
  );
}

type Props = {
  user: UserProtocol;
};
