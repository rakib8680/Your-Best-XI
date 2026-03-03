import logo from "../assets/logo.png";

const Navbar = ({ budget }) => {
  return (
    <div className="navbar mt-10">
      <div className="flex justify-between w-full">
        <div className="">
          <a href="/">
            <img src={logo} alt="" />
          </a>
        </div>
        <div className="flex gap-10 items-center">
          <ul className="menu menu-horizontal px-1 text-base text-gray-600 gap-10">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Fixture</a>
            </li>
            <li>
              <a>Teams</a>
            </li>
            <li>
              <a>Schedules</a>
            </li>
          </ul>
          <div className="border border-gray-200 rounded-xl px-4 py-3">
            <p className="font-semibold text-lg">{budget} Coin 🪙</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
