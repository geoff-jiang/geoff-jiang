import React, { useState } from 'react';

import { motion } from "framer-motion";
import { Chakra_Petch } from 'next/font/google';
const chakra = Chakra_Petch({
    weight: ['400'],
    subsets: ['latin'],
    display: 'swap', // Improve font loading performance
})
const About = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const containerVariants = {
        initial: {
            width: '64rem', // w-72
            background: "linear-gradient(to right, #620057,  #021B56)",
            border: "2px solid #34eb71",

            transition: {
                duration: 0.2,
            },

        },
        expanded: {
            width: '64rem', // Expanded width
            border: "2px solid red",
            transition: {
                duration: 0.8,
                ease: "easeInOut"
            },

        }
    };

    const mobilecontainerVariants = {
        initial: {
            width: '24rem', // w-72
            background: "linear-gradient(to right, #620057,  #021B56)",
            border: "2px solid #34eb71",

            transition: {
                duration: 0.2,
            },

        },
        expanded: {
            width: '24rem', // Expanded width
            border: "2px solid red",
            transition: {
                duration: 0.8,
                ease: "easeInOut"
            },

        }
    };

    const textVariants = {
        initial: {
            opacity: 1,
            x: 0,
            transition: {
                delay: 0.5,
                duration: 0.8,
                ease: "easeIn",
            }
        },
        expanded: {
            opacity: 0,

            transition: {

                duration: 0.4,
                ease: "easeIn",
            }
        }
    };

    const textVariants2 = {
        initial: {
            opacity: 0,
            transition: {

                duration: 0.5,
                ease: "easeIn",
            }

        },
        expanded: {
            opacity: 1,

            transition: {
                delay: 0.5,
                duration: 0.8,
                ease: "easeIn",
            }
        }
    };
    return (
        <div>

            <div className='hidden md:block'>
                <motion.div
                    className="relative h-96 rounded-full mt-24 mb-10 flex items-center cursor-pointer"
                    variants={containerVariants}
                    initial="initial"
                    animate={isExpanded ? "expanded" : "initial"}
                    onClick={() => setIsExpanded(!isExpanded)}


                >
                    <motion.div
                        className="absolute p-16 max-w-xl"
                        variants={textVariants2}
                    >
                        <h2 className={`${chakra.className} text-2xl font-bold mb-4 text-white tracking-widest`}>Still Curious?</h2>
                        <p className={`${chakra.className} text-white tracking-wide`}>
                            Outside of school, I enjoy going to the gym, playing video games, reading manga, or listening to music.
                        </p>
                    </motion.div>

                    <motion.div
                        className="w-96 h-96 rounded-full flex-shrink-0 transform hover:scale-110 hover:shadow-2xl"
                        initial={{ opacity: 1 }}
                        animate={{
                            opacity: isExpanded ? 0 : 1,
                            x: isExpanded ? '40rem' : -2
                        }}
                        transition={{
                            duration: 0.8,
                            ease: "easeInOut",
                            opacity: { duration: 0.4 }
                        }}
                        style={{
                            backgroundImage: `url('./images/me.jpg')`,
                            backgroundPosition: 'bottom',
                            backgroundSize: 'cover',
                            filter: 'brightness(1.15) contrast(1.2) saturate(1.1)',
                        }}
                        whileHover={{ scale: 1.02 }}
                    />
                    <motion.div
                        className="absolute w-96 h-96 rounded-full flex-shrink-0 transform hover:scale-110 hover:shadow-2xl"
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: isExpanded ? 1 : 0,
                            x: isExpanded ? '40rem' : -2
                        }}
                        transition={{
                            duration: 0.8,
                            ease: "easeInOut",
                            opacity: { duration: 0.4 }
                        }}
                        style={{
                            backgroundImage: `url('./images/me3.jpg')`,
                            backgroundPosition: 'top',
                            backgroundSize: 'cover',
                            filter: 'brightness(1.15) contrast(1.2) saturate(1.1)',
                            left: 0  // Add this to ensure proper positioning
                        }}
                        whileHover={{ scale: 1.02 }}
                    />

                    <motion.div
                        className="px-16"
                        variants={textVariants}
                    >
                        <h2 className={`${chakra.className} text-2xl font-bold mb-4 text-white tracking-widest`}>About Me</h2>
                        <p className={`${chakra.className} text-white tracking-wide`}>
                            Hi! My name is Geoff Jiang, I`m currently a second year computer science student studying @ UBC. Why Computer Science you ask? I don`t know. I have a strong interest in fullstack and web dev, but also dabble in fields such as game design and cybersecurity. I have a solid foundation in Java, Python, and C, with my arsenal expanding into JavaScript, C++, HTML/CSS and many more to come. If you have any questions or just want to chat, feel free to reach out via Instagram.

                        </p>
                    </motion.div>


                </motion.div>
            </div>


            {/* MOBILE SECTION */}
            <div className='flex md:hidden'>
                <motion.div className="relative h-[800px] rounded-full mt-24 mb-10 grid items-center "
                    variants={mobilecontainerVariants}
                    initial="initial"
                    animate={isExpanded ? "expanded" : "initial"}
                    onClick={() => setIsExpanded(!isExpanded)}>
                    <motion.div className='w-full text-center p-10'
                        variants={textVariants}>
                        <h2 className={`${chakra.className} text-2xl font-bold mb-3 text-white tracking-wide`}>About Me</h2>
                        <p className={`${chakra.className} text-white text-sm tracking-wide`}>
                            Hi! My name is Geoff Jiang, I`m currently a second year computer science student studying @ UBC. Why Computer Science you ask? I don`t know. I have a strong interest in fullstack and web dev, but also dabble in fields such as game design and cybersecurity. I have a solid foundation in Java, Python, and C, with my arsenal expanding into JavaScript, C++, HTML/CSS and many more to come. If you have any questions or just want to chat, feel free to reach out via Instagram.

                        </p>
                    </motion.div>

                    <motion.div
                        className="w-[23rem] h-[23rem] mx-auto rounded-full transform hover:scale-110 hover:shadow-2xl"
                        initial={{ opacity: 1 }}
                        animate={{
                            opacity: isExpanded ? 0 : 1,
                            y: isExpanded ? '-26.4rem' : 10
                        }}
                        transition={{
                            duration: 0.8,
                            ease: "easeInOut",
                            opacity: { duration: 0.4 }
                        }}
                        style={{
                            backgroundImage: `url('./images/me.jpg')`,
                            backgroundPosition: 'bottom',
                            backgroundSize: 'cover',
                            filter: 'brightness(1.15) contrast(1.2) saturate(1.1)',
                        }}
                        whileHover={{ scale: 1.02 }}
                    />
                    <motion.div
                        className="absolute w-[23rem] h-[23rem] left-1.5 rounded-full transform hover:scale-110 hover:shadow-2xl"
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: isExpanded ? 1 : 0,
                            y: isExpanded ? '-13.2rem' : '13.2rem'
                        }}
                        transition={{
                            duration: 0.8,
                            ease: "easeInOut",
                            opacity: { duration: 0.4 }
                        }}
                        style={{
                            backgroundImage: `url('./images/me3.jpg')`,
                            backgroundPosition: 'top',
                            backgroundSize: 'cover',
                            filter: 'brightness(1.15) contrast(1.2) saturate(1.1)',
                        }}
                        whileHover={{ scale: 1.02 }}
                    />

                    <motion.div className='mt-80 absolute w-full text-center p-10'
                        variants={textVariants2}>
                        <h2 className={`${chakra.className} text-2xl font-bold mb-3 text-white tracking-wide`}>Still Curious?</h2>
                        <p className={`${chakra.className} text-white text-sm tracking-wide`}>
                            Outside of school, I enjoy going to the gym, playing video games, reading manga, or listening to music.

                        </p>

                    </motion.div>




                </motion.div>
            </div>
        </div>
    );
};

export default About;
