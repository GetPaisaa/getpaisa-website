"use client";
import { React, useRef } from 'react'
import { motion, useScroll } from "framer-motion"
import Youtube from '../commons/Youtube';
import DownloadNow from '../commons/DownloadNow';
const Banner = () => {

    return (
        <div>
            <section className='relative'>
                <div
                    className="bg-gradient-to-l from-gradient-1 to-gradient-2 py-16"
                >
                    <div className="container relative z-20">
                        <div className="flex flex-wrap items-center -mx-4">
                            <div className="w-full lg:w-1/2 px-4"
                            >
                                <motion.div
                                    className="mb-14 lg:mb-0 max-w-4xl"
                                    initial={{ y: 10, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ ease: "easeInOut", duration: 0.75 }}

                                >
                                    <div
                                        className="flex font-semibold text-[#3C0050] text-4xl md:text-[45px] leading-tight md:leading-tight mb-4"
                                    >
                                        <h1>Empowering Your Financials.
                                            <div className="rotating-words mt-2 text-4xl">
                                                <span>Personal Loans</span>
                                                <span>Health Loans</span>
                                                <span>Business Loans</span>
                                                <span>Nari Shakti Loans</span>
                                            </div>
                                        </h1>
                                    </div>

                                    <div className='mt-8 features hidden md:flex items-center gap-3 text-lg mb-6'>
                                        <span>Fast Processing</span>
                                        <span className='h-4 w-[2px] bg-[#1e1e1e]'></span>
                                        <span>Zero Paperwork</span>
                                        <span className='h-4 w-[2px] bg-[#1e1e1e]'></span>
                                        <span>Minimum Interest</span>
                                    </div>

                                    <p className="text-[#3C0050] mb-4 text-sm">
                                        Discover a new way to manage your finances with ease and confidence. At GetPaisa, we believe that everyone deserves brighter financial future.
                                        Whether you're looking for a personal loan, managing your budget, we're here to help you every step of the way.
                                    </p>

                                    <div className="flex items-center mt-10">
                                        <DownloadNow color={`bg-primary`}/>
                                        {/* <a
                                            href="#about"
                                            className="bg-primary font-normal text-white rounded-xl py-5 px-6 md:px-10 transition-all hover:text-white hover:shadow-primary-hover mr-9"
                                        >
                                            Download App
                                        </a> */}

                                        <Youtube/>
 
                                    </div>
                                </motion.div>
                            </div>
                            <div
                                className="w-full lg:w-1/2 px-4"
                            >
                                <motion.div
                                    className="text-center relative z-10 h-[532px] flex items-center justify-center"
                                    initial={{ y: 10, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ ease: "easeInOut", duration: 0.75 }}

                                >
                                    <div className='w-60'>
                                        <img
                                            src="images/hero/screen1.jpg"
                                            alt="hero"
                                            className="max-w-full mx-auto rounded-2xl shadow-sm"
                                        />
                                    </div>
                                    <span
                                        className="absolute -z-1 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[350px] w-full h-[350px] animate-pulse bg-white dark:bg-dark bg-opacity-25 dark:bg-opacity-25 shadow-shape-1 rounded-full"
                                    >
                                    </span>
                                    <span
                                        className="absolute -z-1 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[450px] w-full h-[450px] animate-pulse bg-white dark:bg-dark bg-opacity-25 dark:bg-opacity-25 shadow-shape-1 rounded-full"
                                    >
                                    </span>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                    <div className='absolute opacity-[0.2] z-10 rotate-45 left-0 top-4 overflow-hidden'>
                        <img className='w-[800px]' src="images/cta/board.svg" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Banner