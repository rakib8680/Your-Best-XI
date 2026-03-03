import { Suspense, useState } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import AvailablePlayers from "./components/Players/AvailablePlayers";
import PlayerCardsSkeleton from "./components/Players/PlayerCardsSkeleton";
import SelectedPlayers from "./components/Players/SelectedPlayers";

const App = () => {
  const PlayersPromise = fetch("/players.json").then((res) => res.json());
  const [toggleButton, setToggleButton] = useState("available");
  const [selectedPlayers, setSelectedPlayers] = useState([]);

  // Handle Select Player
  const handleSelectPlayer = (player) => {
    if (selectedPlayers.find((p) => p.id === player.id)) {
      return;
    }
    if (selectedPlayers.length === 11) {
      return;
    }
    setSelectedPlayers([...selectedPlayers, player]);
  };

  // console.log(selectedPlayers);
  return (
    <div className="container mx-auto">
      <Navbar />
      <Hero />

      {/* Players Section */}
      <div className="mt-24 flex justify-between items-center">
        <h1 className="text-3xl font-bold">
          {toggleButton === "available"
            ? `Available Players`
            : `Selected Players (${selectedPlayers.length}/6)`}
        </h1>
        <div>
          <button
            className={`btn w-fit p-6 px-7 border border-gray-200 text-black text-base font-bold rounded-s-xl ${toggleButton === "available" ? "bg-[#E6FB29] hover:bg-[#d4e826]" : "btn-ghost font-normal"}`}
            onClick={() => setToggleButton("available")}
          >
            Available
          </button>
          <button
            className={`btn w-fit p-6 px-7 border border-gray-200 text-black text-base font-bold rounded-e-xl ${toggleButton === "selected" ? "bg-[#E6FB29] hover:bg-[#d4e826]" : "btn-ghost font-normal"}`}
            onClick={() => setToggleButton("selected")}
          >
            Selected ({selectedPlayers.length})
          </button>
        </div>
      </div>
      <Suspense fallback={<PlayerCardsSkeleton />}>
        {toggleButton === "available" ? (
          <AvailablePlayers
            PlayersPromise={PlayersPromise}
            handleSelectPlayer={handleSelectPlayer}
            selectedPlayers={selectedPlayers}
          />
        ) : (
          <SelectedPlayers selectedPlayers={selectedPlayers} setToggleButton={setToggleButton} />
        )}
      </Suspense>
    </div>
  );
};

export default App;
