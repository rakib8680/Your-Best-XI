const SelectedPlayers = ({ selectedPlayers, setToggleButton }) => {
  return (
    <>
      {selectedPlayers.length === 0 ? (
        <div className="text-center text-gray-500 mt-10 min-h-[50vh] flex items-center justify-center">
          <div className="border p-1 border-[#E6FB29] rounded-2xl w-fit">
            <button
              className="btn w-fit px-4 py-6 bg-[#E6FB29] hover:bg-[#d4e826] border-none text-black text-base font-bold rounded-xl"
              onClick={() => setToggleButton("available")}
            >
              Select Players
            </button>
          </div>
        </div>
      ) : (
        <div className="my-10 flex flex-col gap-5">
          {/* Player Rows */}
          {selectedPlayers.map((player) => (
            <div
              key={player.id}
              className="flex items-center justify-between border border-gray-200 rounded-xl px-6 py-5 shadow-xs"
            >
              {/* Left: Image + Info */}
              <div className="flex items-center gap-5">
                <img
                  src={player.image}
                  alt={player.name}
                  className="w-20 h-20 rounded-lg object-cover bg-gray-200 p-1"
                />
                <div>
                  <h3 className="text-lg font-bold text-gray-800">
                    {player.name}
                  </h3>
                  <p className="text-sm text-gray-500">{player.battingStyle}</p>
                </div>
              </div>

              {/* Right: Delete Icon */}
              <button className="cursor-pointer text-red-400 hover:text-red-500 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                  />
                </svg>
              </button>
            </div>
          ))}

          {/* Add More Player Button */}
          <div className="border p-1 border-[#E6FB29] rounded-2xl  w-fit">
            <button
              onClick={() => setToggleButton("available")}
              className="btn w-fit px-4 py-6 bg-[#E6FB29] hover:bg-[#d4e826] border-none text-black text-base font-bold rounded-xl"
            >
              Add More
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default SelectedPlayers;
