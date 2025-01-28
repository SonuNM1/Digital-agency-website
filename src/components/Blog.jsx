import React, { useState } from 'react';
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";
// Import star icons
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonial = () => {
    const testimonials = [
        {
            id: 1,
            name: "Manish Das",
            role: "Chartered Accountant",
            image: "/assets/icons/manish_das.jpeg",
            rating: 5,
            feedback: "DotConnect's web development service has been a game changer for my accounting firm. The custom software solution they built has automated my client data management and document sharing, making the entire process more efficient and secure. I can now focus on advising my clients rather than dealing with paperwork.",
        },
        {
            id: 2,
            name: "Indra P. Srivastav",
            role: "Business",
            image: "/assets/icons/indra_ps.jpeg",
            rating: 4,
            feedback: "I approached DotConnect to build an eCommerce platform for my business, and they delivered beyond expectations. The website is incredibly user-friendly, and their team integrated all the necessary features to streamline my operations, from inventory management to secure payments. The ongoing support they provide is top-notch.",
        },
        {
            id: 3,
            name: "Saurav Raj",
            role: "Software Engineer",
            image: "/assets/icons/saurav_raj.jpg",
            rating: 4.5,
            feedback: "As a software engineer, I needed a platform that could facilitate seamless collaboration with clients. DotConnect's custom web solutions provided exactly what I was looking for. The intuitive design and robust functionality allow me to share code, project updates, and resources effortlessly, improving client interactions and productivity.",
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
    };

    const currentTestimonial = testimonials[currentIndex];

    return (
        <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-12' id='testimonial'>
            {/* Section Header */}
            <motion.div
                variants={fadeIn("left", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.6 }}
                className='text-center md:w-1/2 mx-auto mb-12'
            >
                <h2 className="text-4xl text-neutralDGrey font-semibold mb-4">
                    What Our Clients Say
                </h2>
                <p className="text-neutralGrey">
                    Hear from some of our amazing clients about their experiences with <span className='text-red'>DotConnect</span>.
                </p>
            </motion.div>

            {/* Testimonial Card with Navigation */}
            <motion.div
                variants={fadeIn("right", 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.6 }}
                className='relative flex items-center justify-center'
            >
                {/* Left Button */}
                <button
                    onClick={handlePrev}
                    className="absolute left-0 p-3 bg-brandPrimary text-white rounded-full shadow-lg hover:bg-brandDark transition duration-300"
                >
                    <ChevronLeft className="w-5 h-5" />
                </button>

                {/* Testimonial Card */}
                <div className='bg-white shadow-lg rounded-xl p-6 flex flex-col items-center text-center w-3/4 md:w-1/2'>
                    <img
                        src={currentTestimonial.image}
                        alt={currentTestimonial.name}
                        className='w-28 h-28 rounded-full mb-4'  
                    />
                    <h3 className='text-lg font-semibold text-neutralBlack'>{currentTestimonial.name}</h3>
                    <p className='text-sm text-brandPrimary mb-3'>{currentTestimonial.role}</p>

                    {/* Star Rating */}
                    <div className="flex justify-center mb-4">
                        {Array.from({ length: Math.floor(currentTestimonial.rating) }, (_, i) => (
                            <Star key={i} className="w-5 h-5 text-yellow-500" />
                        ))}
                        {currentTestimonial.rating % 1 !== 0 && (
                            <Star className="w-5 h-5 text-yellow-500 opacity-50" />
                        )}
                    </div>

                    <p className='text-sm text-neutralGrey'>
                        {currentTestimonial.feedback}
                    </p>
                </div>

                {/* Right Button */}
                <button
                    onClick={handleNext}
                    className="absolute right-0 p-3 bg-brandPrimary text-white rounded-full shadow-lg hover:bg-brandDark transition duration-300"
                >
                    <ChevronRight className="w-5 h-5" />
                </button>
            </motion.div>
        </div>
    );
};

export default Testimonial;
