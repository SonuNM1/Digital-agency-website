import React from 'react';
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";
import projectsData from './projectsData';

const Product = () => {
  return (
    <div className="md:px-14 px-4 py-16 max-w-screen-2xl mx-auto" id="projects">
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
        className="text-center my-8"
      >
        <h2 className="text-4xl text-neutralDGrey font-semibold mb-2">
          Our Projects
        </h2>
        <p className="text-neutralGrey">
          Showcasing the work we've done for clients across various industries.
        </p>
        <div className="my-12 flex flex-wrap justify-between items-center gap-8">
          {/* Add your project data */}
          {projectsData.map((data) => (
            <div
              key={data.id}
              className="img d-flex justify-content-center align-content-center p-3"
            >
              <img
                src={data.imageSrc}
                className="card-img-top"
                alt={data.title}
                style={{
                  width: "250px",
                  height: "200px",
                  border: "2px solid yellow",
                  borderRadius: "10px",
                }}
              />
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Product;
