import React from "react";
import { Footer, TextInput } from "flowbite-react";
import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
import { SiMinutemailer } from "react-icons/si";

const MyFooter = () => {
  return (
    <footer className="bg-neutral-900 text-white py-8">
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
          {/* Left Section */}
          <div>
            <a href="#" className="text-3xl font-bold text-green-500">
              DOT.CONNECT
            </a>
            <p className="mt-4 text-sm text-neutral-400">
              Copyright © 2024 DotConnect ltd. All rights reserved.
            </p>
            <div className="mt-4 flex space-x-6 text-neutral-400">
              <a
                href="https://www.facebook.com/sonu36200/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                <BsFacebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/the_sonu.nm"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                <BsInstagram size={20} />
              </a>
              <a
                href="https://github.com/SonuNM1"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                <BsGithub size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                <BsTwitter size={20} />
              </a>
            </div>
          </div>

          {/* Right Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Company Links */}
            <div>
              <h3 className="text-lg font-semibold text-white">Company</h3>
              <div className="mt-4 text-sm text-neutral-400">
                <a href="#about" className="block hover:text-white mb-2">
                  About us
                </a>
                <a href="#" className="block hover:text-white mb-2">
                  Contact us
                </a>
                <a href="#testimonial" className="block hover:text-white">
                  Testimonials
                </a>
              </div>
            </div>

            {/* Stay Updated */}

            <div>
              <h3 className="text-lg font-semibold text-white">
                Reach Out To Us
              </h3>
              <p className="mt-4 text-sm text-neutral-400">
              If you have any questions, feel free to mail us directly.
              </p>
              <div className="mt-4 flex items-center">
                <TextInput
                  id="email"
                  placeholder="Your email address"
                  required
                  type="email"
                  className="bg-neutral-800 text-white border-neutral-600 focus:ring-green-500"
                />
                {/* Separately rendered mailto link icon */}
                <a
                  href="mailto:isonumahto362000@gmail.com?subject=Newsletter Subscription"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-3 text-white"
                >
                  <SiMinutemailer size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MyFooter;
