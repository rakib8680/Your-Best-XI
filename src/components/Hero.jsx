import HeroImage from "../assets/banner-main.png";
import BgShadow from "../assets/bg-shadow.png";

const Hero = () => {
  return (
    <div
      className="mt-5 py-20 flex flex-col items-center text-center gap-10 bg-black/90 rounded-4xl text-white bg-cover bg-no-repeat bg-center w-full"
      style={{ backgroundImage: `url(${BgShadow})` }}
    >
      <div>
        <img src={HeroImage} alt="Cricket" />
      </div>
      <div className="flex flex-col gap-10 items-center">
        <h1 className="text-5xl font-semibold">
          Assemble Your Ultimate Dream 11 Cricket Team
        </h1>
        <p className="text-2xl text-neutral-400">
          Beyond Boundaries Beyond Limits
        </p>
        <div className="border-2 border-[#E6FB29] p-2 rounded-2xl ">
          <button className="btn w-fit px-5 py-6 bg-[#E6FB29] hover:bg-[#d4e826] border-none text-black text-lg font-bold rounded-xl">
            Claim Free Credit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
