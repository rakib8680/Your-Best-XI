import logo from "../assets/logo.png";

const Navbar = ({ budget }) => {
  return (
    <div className="navbar mt-5 md:mt-10 px-2">
      <div className="flex justify-between items-center w-full">
        <div>
          <a href="/">
            <img src={logo} alt="" />
          </a>
        </div>
        <div className="flex gap-10 items-center">
          <ul className="menu menu-horizontal px-1 text-base text-gray-600 gap-10 hidden lg:flex">
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
          <div className="border border-gray-200 rounded-xl px-3 md:px-4 py-2 md:py-3">
            <p className="font-semibold text-sm md:text-lg whitespace-nowrap">
              {budget.toLocaleString()} Coin 🪙
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
