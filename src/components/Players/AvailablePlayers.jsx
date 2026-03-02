import { use } from "react";
import SinglePlayer from "./SinglePlayer";

const AvailablePlayers = ({ PlayersPromise }) => {
  const AvailablePlayers = use(PlayersPromise);
  //   console.log(AvailablePlayers);

  return (
    <div className="">
     
      <div className=" mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5">
        {AvailablePlayers.map((Player) => (
          <SinglePlayer key={Player.id} Player={Player} />
        ))}
      </div>
    </div>
  );
};

export default AvailablePlayers;
