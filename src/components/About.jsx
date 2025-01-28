import React from "react";
import AboutTeam from "./AboutTeam";
import DigitalSolutions from "./DigitalSolutions";

// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";

// Importing icons


const About = () => {
  return (
    <div>
      {/* about text */}
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8" id="about">
        <AboutTeam/>
      </div>

      {/* company stats */}

      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16"
      >
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="md:w-1/2">
            <h2 className="text-4xl text-neutralDGrey font-semibold mb-2 md:w-2/3">
              Reinventing local businesses <br />{" "}
              <span className="text-brandPrimary">
                with cutting edge digital solutions.
              </span>
            </h2>
          </div>

          {/* stats */}

          <DigitalSolutions/>
          
        </div>
      </motion.div>
    </div>
  );
};

export default About;
