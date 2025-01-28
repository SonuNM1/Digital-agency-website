import React from "react";
import { Carousel } from "flowbite-react";

const Home = () => {
  return (
    <div className="bg-neutralSilver" id="home">
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen flex justify-center items-center">
        <Carousel className="w-full mx-auto">
          <div className="my-28 md:my-8 py-12 flex flex-col w-full mx-auto md:flex-row-reverse items-center justify-between gap-12">
            <div>
              <img src="/assets/banner.png" alt="Banner 1" />
            </div>
            {/* hero text */}
            <div className="md:w-1/2">
              <h1 className="text-5xl mb-4 font-semibold text-neutralDGrey md:w-3/4 leading-snug">
                Your trusted partner in{" "}
                <span className="text-brandPrimary leading-snug">
                  digital transformation.
                </span>
              </h1>
              <p className="text-neutralGrey text-base mb-8">
                From websites to marketing, we help local businesses thrive in
                the online world.
              </p>

              <button className="px-7 py-2 bg-brandPrimary text-white rounded hover:bg-neutralDGrey">
                Register
              </button>
            </div>
          </div>
          <div className="my-28 md:my-8 py-12 flex flex-col w-full mx-auto md:flex-row-reverse items-center justify-between gap-12">
            <div>
              <img src="/assets/banner2.png" alt="Banner 2" />
            </div>
            {/* hero text */}
            <div className="md:w-1/2">
              <h1 className="text-5xl mb-4 font-semibold text-neutralDGrey md:w-3/4 leading-snug">
                Your business, our priority.{" "}
                <span className="text-brandPrimary leading-snug">
                  Let us build your digital identity.
                </span>
              </h1>

              <p className="text-neutralGrey text-base mb-8">
                Helping you connect with the world, one click at a time.
              </p>
              <button className="px-7 py-2 bg-brandPrimary text-white rounded hover:bg-neutralDGrey">
                Register
              </button>
            </div>
          </div>
          <div className="my-28 md:my-8 py-12 flex flex-col w-full mx-auto md:flex-row-reverse items-center justify-between gap-12">
            <div>
              <img src="/assets/banner3.png" alt="Banner 3" />
            </div>
            {/* hero text */}
            <div className="md:w-1/2">
              <h1 className="text-5xl mb-4 font-semibold text-neutralDGrey md:w-3/4 leading-snug">
                Your journey from local{" "}
                <span className="text-brandPrimary leading-snug">
                  to global starts here.
                </span>
              </h1>
              <p className="text-neutralGrey text-base mb-8">
                Websites, marketing, and software solutions tailored to your
                success.
              </p>
              <button className="px-7 py-2 bg-brandPrimary text-white rounded hover:bg-neutralDGrey">
                Register
              </button>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Home;
