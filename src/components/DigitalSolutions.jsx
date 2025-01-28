import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const DigitalSolutions = () => {
  const solutions = [
    {
      title: 'Advanced Authentication Systems',
      icon: '/assets/icons/authentication.webp',
    },
    {
      title: 'Online Payment Systems',
      icon: '/assets/icons/payment.png',
    },
    {
      title: 'Databases',
      icon: '/assets/icons/database.webp',
    },
    {
      title: 'Custom Web Apps',
      icon: '/assets/icons/website.png',
    },
    {
      title: 'Cloud Solutions',
      icon: '/assets/icons/cloud.png',
    },
    {
      title: 'E-commerce Solutions',
      icon: '/assets/icons/ecommerce.jpg',
    },
    {
      title: 'Digital Marketing',
      icon: '/assets/icons/digital_marketing.png',
    },
    {
        title: 'Free Consultation',
        icon: '/assets/icons/consultation.png'
    }
  ];

  return (
    <div className="mx-auto md:w-2/3">
      {/* Digital Solutions List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {solutions.map((solution, index) => (
          <motion.div
            key={index}
            variants={fadeIn('up', 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.6 }}
            className="flex items-center gap-4"
          >
            <img
              src={solution.icon}
              alt={solution.title}
              className="w-12 h-12 object-cover"
            />
            <div>
              <h4 className="text-lg text-neutralDGrey font-semibold">
                {solution.title}
              </h4>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default DigitalSolutions;
