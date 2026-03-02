const SinglePlayer = ({ Player }) => {
  const {
    name,
    country,
    role,
    battingStyle,
    bowlingStyle,
    rating,
    price,
    image,
  } = Player || {};

  return (
    <div className="card  border border-gray-200 p-6 rounded-2xl w-full">
      {/* Player Image */}
      <img
        src={image}
        alt={name}
        className="w-full h-56 object-cover rounded-xl mb-6"
      />

      <div className="flex flex-col">
        {/* Name section */}
        <div className="flex items-center gap-3 mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-7 h-7 text-gray-600"
          >
            <path
              fillRule="evenodd"
              d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
              clipRule="evenodd"
            />
          </svg>
          <h2 className="text-xl font-bold text-gray-800">{name}</h2>
        </div>

        {/* Country and Role section */}
        <div className="flex justify-between items-center mb-5">
          <div className="flex items-center gap-2 text-gray-500 font-medium">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5 text-gray-400"
            >
              <path
                fillRule="evenodd"
                d="M3 2.25a.75.75 0 01.75.75v.54l1.838-.46a9.75 9.75 0 016.725.738l.108.054a8.25 8.25 0 005.58.652l3.109-.732a.75.75 0 01.917.81 47.784 47.784 0 00.005 10.337.75.75 0 01-.574.812l-3.114.733a9.75 9.75 0 01-6.594-.77l-.108-.054a8.25 8.25 0 00-5.69-.625l-2.202.55V21a.75.75 0 01-1.5 0V3A.75.75 0 013 2.25z"
                clipRule="evenodd"
              />
            </svg>
            <span>{country}</span>
          </div>
          <span className="px-4 py-2 bg-gray-100 rounded-lg text-sm text-gray-600 font-medium">
            {role}
          </span>
        </div>

        {/* Divider */}
        <hr className="border-gray-200 mb-5" />

        {/* Details section */}
        <div className="flex flex-col gap-3">
          <div className="flex justify-between items-center">
            <h4 className="font-semibold text-gray-800 text-base">Rating</h4>
            <span className="font-semibold text-gray-600">{rating}/10</span>
          </div>

          <div className="flex justify-between items-center text-sm mb-1">
            <span className="font-semibold text-gray-800">{battingStyle}</span>
            <span className="text-gray-500 font-medium">{bowlingStyle}</span>
          </div>

          <div className="flex justify-between items-center mt-1">
            <span className="font-semibold text-gray-800 text-sm">
              Price: ${price}
            </span>
            <button className="cursor-pointer px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
              Choose Player
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePlayer;
