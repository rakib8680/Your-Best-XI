import { use } from "react";
import SinglePlayer from "./SinglePlayer";

const AvailablePlayers = ({ PlayersPromise }) => {
  const AvailablePlayers = use(PlayersPromise);
  //   console.log(AvailablePlayers);

  return (
    <div className="mt-24">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Available Players</h1>
        <div>
          <button className="btn w-fit p-6 px-7 bg-[#E6FB29] hover:bg-[#d4e826] border border-gray-200 text-black text-base font-bold rounded-s-xl">
            Available
          </button>
          <button className="btn btn-ghost w-fit p-6 px-7   text-gray-600 text-base font-normal  rounded-e-xl border border-gray-200">
            Selected (0)
          </button>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-5">
        {AvailablePlayers.map((Player) => (
          <SinglePlayer key={Player.id} Player={Player} />
        ))}
      </div>
    </div>
  );
};

export default AvailablePlayers;
