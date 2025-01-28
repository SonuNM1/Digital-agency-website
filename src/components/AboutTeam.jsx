import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { FaGithub, FaInstagram } from "react-icons/fa";

const AboutTeam = () => {
  return (
    <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-8"> {/* Reduced gap here */}
      
      {/* Member 1 */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.6 }}
        className="text-center"
      >
        <img
          src="/assets/icons/sonu_nm.jpeg"
          alt="Member 1"
          className="w-60 h-60 object-cover mx-auto mb-4"  // Larger image size
        />
        <h3 className="text-lg font-semibold text-neutralDGrey mb-2">
          Sonu N. Mahto
        </h3>
        <p className="text-sm text-neutralGrey mb-4">Full-Stack Developer + Digital Marketer</p>
        <div className="flex justify-center gap-4">
          <a
            href="https://github.com/SonuNM1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="w-6 h-6" />
          </a>
          <a
            href="https://www.instagram.com/the_sonu.nm/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="w-6 h-6" />
          </a>
        </div>
      </motion.div>

      {/* Member 2 */}
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.6 }}
        className="text-center"
      >
        <img
          src="/assets/icons/garima2.jpg"
          alt="Member 2"
          className="w-60 h-60 object-cover mx-auto mb-4"  // Larger image size
        />
        <h3 className="text-lg font-semibold text-neutralDGrey mb-2">
          Garima Joshi
        </h3>
        <p className="text-sm text-neutralGrey mb-4">Frontend Developer</p>
        <div className="flex justify-center gap-4">
          <a
            href="https://www.instagram.com/garima_gsj/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="w-6 h-6" />
          </a>
        </div>
      </motion.div>

      {/* Member 3 */}
      <motion.div
        variants={fadeIn("left", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.6 }}
        className="text-center"
      >
        <img
          src="/assets/icons/badal.jpg"
          alt="Member 3"
          className="w-60 h-60 object-cover mx-auto mb-4"  // Larger image size
        />
        <h3 className="text-lg font-semibold text-neutralDGrey mb-2">
          Badal Kumar
        </h3>
        <p className="text-sm text-neutralGrey mb-4">Backend Dev + UI/UX Designer</p>
        <div className="flex justify-center gap-4">
          <a
            href="https://www.instagram.com/badalkumar_/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="w-6 h-6" />
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutTeam;
