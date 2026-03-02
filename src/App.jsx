import { Suspense, useState } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import AvailablePlayers from "./components/Players/AvailablePlayers";

const App = () => {
  const PlayersPromise = fetch("/players.json").then((res) => res.json());
  const [toggleButton, setToggleButton] = useState("available");
  return (
    <div className="container mx-auto">
      <Navbar />
      <Hero />

      {/* Players Section */}
      <div className="mt-24 flex justify-between items-center">
        <h1 className="text-3xl font-bold">Available Players</h1>
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
            Selected (0)
          </button>
        </div>
      </div>
      <Suspense fallback={<div className="min-h-screen">Loading...</div>}>
        <AvailablePlayers PlayersPromise={PlayersPromise} />
      </Suspense>
    </div>
  );
};

export default App;
