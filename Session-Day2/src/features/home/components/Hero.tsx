import { FC } from "react";

import heroImage from "../../../../public/original-7e2f041e2f984ebbab3cd90ac96d37e9.webp";

const Hero: FC = () => {
  return (
    <section className="bg-gray-100 py-20">
      <div className="max-w-[1144px] w-full mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        {/* Left Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Elevate Your Business with Innovation
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Unlock new opportunities and drive growth with cutting-edge
            solutions tailored to your needs.
          </p>
          <button className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
            Get Started
          </button>
        </div>

        {/* Right Content - Image */}
        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
          <img
            src={heroImage}
            alt="Hero Image"
            className="w-full max-w-md rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
