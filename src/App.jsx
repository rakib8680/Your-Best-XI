import { Suspense, useState } from "react";
import { toast } from "sonner";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import AvailablePlayers from "./components/Players/AvailablePlayers";
import PlayerCardsSkeleton from "./components/Players/PlayerCardsSkeleton";
import SelectedPlayers from "./components/Players/SelectedPlayers";
import Footer from "./components/Footer/Footer";
import NewsletterCard from "./components/Footer/NewsletterCard";

const PlayersPromise = fetch("/players.json").then((res) => res.json());

const App = () => {
  const [toggleButton, setToggleButton] = useState("available");
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [budget, setBudget] = useState(9000000);

  // Handle Select Player
  const handleSelectPlayer = (player) => {
    if (selectedPlayers.find((p) => p.id === player.id)) {
      return toast.warning(`${player.name} is already in your squad!`);
    }
    if (selectedPlayers.length === 6) {
      return toast.error("Squad is full! Remove a player first.");
    }
    if (budget < player.price) {
      return toast.error(
        `Not enough budget to select ${player.name}. Need $${player.price.toLocaleString()}`,
      );
    }
    setSelectedPlayers([...selectedPlayers, player]);
    setBudget(budget - player.price);
    toast.success(`🏏 ${player.name} added to your squad!`);
  };

  const handleRemovePlayer = (player) => {
    const remainingPlayers = selectedPlayers.filter((p) => p.id !== player.id);
    setSelectedPlayers(remainingPlayers);
    setBudget(budget + player.price);
    toast.success(`${player.name} removed from squad`);
    toast.info(`💰 Budget refunded: $${player.price.toLocaleString()}`);
  };

  return (
    <>
      <div className="container mx-auto">
        <Navbar budget={budget} />
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
            <SelectedPlayers
              selectedPlayers={selectedPlayers}
              setToggleButton={setToggleButton}
              handleRemovePlayer={handleRemovePlayer}
            />
          )}
        </Suspense>
      </div>
      <NewsletterCard />
      <Footer />
    </>
  );
};

export default App;
