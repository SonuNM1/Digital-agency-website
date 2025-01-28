import React from "react";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";
import projectsData from './projectsData'


const Services = () => {
  const services = [
    {
      id: 1,
      title: "Website Development",
      decription:
        "Building custom ecommerce and portfolio websites for all types of local businesses.",
      image: "/assets/icons/membership.png",
    },
    {
      id: 2,
      title: "Digital Marketing",
      decription:
        "Running paid campaigns and optimizing social media to drive leads and sales.",
      image: "/assets/icons/association.png",
    },
    {
      id: 3,
      title: "Software Solutions",
      decription:
        "Creating custom software solutions to streamline operations and boost efficiency.",
      image: "/assets/icons/group-club.png",
    },
  ];
  return (
    <div className="md:px-14 px-4 py-16 max-w-screen-2xl mx-auto" id="service">
    
      {/* service cards */}
      <motion.div
        variants={fadeIn("left", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="mt-20 text-center md:w-1/2 mx-auto"
      >
        <h2 className="text-4xl text-neutralDGrey font-semibold mb-1">
          Effortlessly Manage Your Entire Business Online
        </h2>
        <p className="text-neutralGrey">
          Helping businesses thrive by bringing them online and optimizing
          operations
        </p>
      </motion.div>

      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12"
      >
        {services.map((service) => (
          <div
            key={service.id}
            className="px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300 flex items-center justify-center h-full"
          >
            <div className="">
              <div className="bg-[#E8F5E9] w-14 h-14 mx-auto mb-4 rounded-tl-3xl rounded-br-3xl">
                <img src={service.image} alt="" className="-ml-5" />
              </div>
              <h4 className="text-2xl font-bold text-neutralDGrey mb-2 px-2">
                {service.title}
              </h4>
              <p className="text-sm text-neutralGrey">{service.decription}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Services;
