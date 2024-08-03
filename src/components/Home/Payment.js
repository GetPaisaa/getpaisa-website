'use client'
import { React, useEffect, useRef } from 'react'

import { motion, useInView, useAnimation } from 'framer-motion';

const Payment = () => {

  const ref = useRef(null);
  const inView = useInView(ref);
  const control = useAnimation();
  const duration = 0.5;

  const boxVariant = {
    visible: {opacity: 1, scale: 1, transition: { ease: "easeInOut",duration: 1 }},
    hidden: {opacity: 0, scale: 0.8 }
  };

  const boxVariant1 = {
    visible: {opacity: 1, scale: 1, transition: { ease: "easeInOut",delay:duration,duration: 1 }},
    hidden: {opacity: 0, scale: 0.8 }
  };

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control,inView]);

  return (
    <div>

      <motion.section
        ref={ref}
        className="pt-[100px]"
        variants={boxVariant}
        initial="hidden"
        animate={control}
      >
        <div className="container">
          <div className="flex flex-wrap items-center -mx-4">
            <div className="w-full lg:w-1/2 px-4">
              <div
                className="text-center mb-14 lg:mb-0 wow fadeInUp"
                data-wow-delay=".2s"
              >
                <img
                  src="images/about/about-image-1.png"
                  alt="image"
                  className="max-full"
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2 px-4">
              <div
                className="max-w-[485px] lg:ml-auto wow fadeInUp"
                data-wow-delay=".3s"
              >
                <span
                  className="font-normal text-base text-primary block mb-2"
                >
                  About Application
                </span>
                <h2
                  className="font-normal text-2xl sm:text-3xl text-black dark:text-white mb-6"
                >
                  We make Instant Payment Transfer
                </h2>
                <p
                  className="text-lg text-body-color mb-12 lg:mb-16"
                >
                  Our platform ensures that your payments are processed instantly. No more waiting for days to see your money where it needs to be. We leverage cutting-edge technology to provide lightning-fast transactions.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center font-normal text-base text-primary"
                >
                  Know More About App

                  <span className="pl-2">
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 28 28"
                      className="fill-current"
                    >
                      <path
                        d="M16.3333 19.7633V15.0967H5.92666L5.89166 12.7517H16.3333V8.09668L22.1667 13.93L16.3333 19.7633Z"
                      />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section 
      className="pt-14"
      ref={ref}
        variants={boxVariant1}
        initial="hidden"
        animate={control}
      >
        <div className="container">
          <div className="flex flex-wrap items-center -mx-4">
            <div className="w-full lg:w-1/2 px-4">
              <div
                className="text-center mb-14 lg:mb-0 wow fadeInUp"
                data-wow-delay=".2s"
              >
                <img
                  src="images/about/about-image-2.png"
                  alt="image"
                  className="max-full"
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2 lg:order-first px-4">
              <div className="max-w-[485px] wow fadeInUp" data-wow-delay=".3s">
                <span
                  className="font-normal text-base text-primary block mb-2"
                >
                  Banks Supported
                </span>
                <h2
                  className="font-normal text-3xl sm:text-4xl text-black dark:text-white mb-6"
                >
                  More than 10 banks supported
                </h2>
                <p
                  className="text-lg text-body-color mb-12 lg:mb-16"
                >
                  More than 10 banks supported to transfer loan amount without any hassle.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center font-normal text-base text-primary hover:underline"
                >
                  Get the App Now!

                  <span className="pl-2">
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 28 28"
                      className="fill-current"
                    >
                      <path
                        d="M16.3333 19.7633V15.0967H5.92666L5.89166 12.7517H16.3333V8.09668L22.1667 13.93L16.3333 19.7633Z"
                      />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

    </div>
  )
}

export default Payment