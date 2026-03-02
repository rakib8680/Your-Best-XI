import { Suspense } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import AvailablePlayers from "./components/Players/AvailablePlayers";

const App = () => {
  const PlayersPromise = fetch("/players.json").then((res) => res.json());
  return (
    <div className="container mx-auto">
      <Navbar />
      <Hero />
      <Suspense fallback={<div>Loading...</div>}>
        <AvailablePlayers PlayersPromise={PlayersPromise} />
      </Suspense>
    </div>
  );
};

export default App;
