import { use } from "react";
import SinglePlayer from "./SinglePlayer";

const AvailablePlayers = ({
  PlayersPromise,
  handleSelectPlayer,
  selectedPlayers,
}) => {
  const AvailablePlayers = use(PlayersPromise);
  //   console.log(AvailablePlayers);

  return (
    <div className="">
      <div className=" my-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5">
        {AvailablePlayers.map((Player) => (
          <SinglePlayer
            key={Player.id}
            Player={Player}
            handleSelectPlayer={handleSelectPlayer}
            isSelected={selectedPlayers.some((p) => p.id === Player.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default AvailablePlayers;
