import bgShadow from "../../assets/bg-shadow.png";

const NewsletterCard = () => {
  return (
    <div className="container mx-auto px-4  relative z-10  top-44">
      {/* Outer border wrapper */}
      <div className="border border-gray-200 rounded-3xl p-5 bg-white/20">
        {/* Inner card with gradient bg */}
        <div
          className="rounded-3xl py-20 px-6 text-center bg-white"
          style={{
            backgroundImage: `url(${bgShadow})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Subscribe to our Newsletter
          </h2>
          <p className="text-gray-500 mb-8">
            Get the latest updates and news right in your inbox!
          </p>

          {/* Input + Button */}
          <div className="flex justify-center items-center gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-5 py-3 rounded-xl border border-gray-200 outline-none bg-white text-gray-700 placeholder-gray-400"
            />
            <button
              className="px-6 py-3 rounded-xl text-black font-bold whitespace-nowrap"
              style={{
                background: "linear-gradient(90deg, #f7d294 0%, #f19fbb 100%)",
              }}
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterCard;
