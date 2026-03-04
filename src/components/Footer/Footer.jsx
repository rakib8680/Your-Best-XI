import logoFooter from "../../assets/logo-footer.png";

const Footer = () => {
  return (
    <footer className="bg-[#06091A] text-white pt-48 pb-12 mt-10">
      {/* Logo Section */}
      <div className="flex justify-center mb-16">
        <img src={logoFooter} alt="Logo" className="w-[140px]" />
      </div>

      {/* Main Footer Content */}
      <div className="px-4 lg:px-20">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 lg:gap-8 container  mx-auto">
          {/* About Us */}
          <div className="w-full md:w-1/4">
            <h3 className="text-xl font-bold mb-5">About Us</h3>
            <p className="text-gray-400 text-sm leading-7">
              We are a passionate team
              <br />
              dedicated to providing the best
              <br />
              services to our customers.
            </p>
          </div>

          {/* Quick Links */}
          <div className="w-full md:w-1/4 flex flex-col items-start md:items-center">
            <div>
              <h3 className="text-xl font-bold mb-5">Quick Links</h3>
              <ul className="text-gray-400 text-sm space-y-3 list-disc pl-5">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Subscribe */}
          <div className="w-full md:w-[35%]">
            <h3 className="text-xl font-bold mb-5">Subscribe</h3>
            <p className="text-gray-400 text-sm mb-6 leading-7">
              Subscribe to our newsletter for the
              <br />
              latest updates.
            </p>
            <div className="flex w-full">
              <input
                type="text"
                placeholder="Enter your email"
                className="px-5 py-3 rounded-l-xl w-full text-black outline-none bg-white placeholder-gray-400"
              />
              <button
                className="px-6 py-3 rounded-r-xl text-black font-bold whitespace-nowrap"
                style={{
                  background:
                    "linear-gradient(90deg, #f7d294 0%, #f19fbb 100%)",
                }}
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="mt-16 pt-8 border-t border-gray-800 text-center text-gray-500 text-xs md:text-sm px-4">
        <p>@2024 Your Company All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
