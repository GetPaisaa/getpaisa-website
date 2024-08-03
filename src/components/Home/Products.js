'use client'
import { React, useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion';
const Products = () => {


  const ref = useRef(null);
  const inView = useInView(ref);
  const control = useAnimation();

  const boxVariant = {
    visible: { opacity: 1, scale: 1, transition: { ease: "easeInOut",duration: 1 }},
    hidden: { opacity: 0, scale: 0.8 }
  };

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control,inView]);


  return (
    <motion.section 
    ref={ref}
    className="pt-[60px]"
    variants={boxVariant}
    initial="hidden"
    animate={control}
    >
      <div className="container">
        <div className="flex justify-center -mx-4">
          <div className="w-full px-4">
            <div
              className="max-w-[510px] mx-auto text-center mb-[70px]"
            >
              <h2
                className="text-3xl sm:text-4xl text-black mb-5 font-medium"
              >
                Our Products
              </h2>
              <p className=" text-base text-body-color">
                Explore various types of financial products, their benefits, and how they can be used to achieve financial goals.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/3 xl:w-1/4 px-4">
            <div className="bg-white p-10 sm:p-12 md:p-10 lg:p-12 xl:p-10 2xl:p-12 rounded-[20px] shadow-award mb-8 cursor-pointer hover:scale-105 transition-all">
              <div className="flex items-center mb-6">
                <span className="pr-[10px]">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="16" cy="16" r="16" fill="#8B5CF6" />
                    <path
                      d="M24 14.0968L18.248 13.5747L16 8L13.752 13.5747L8 14.0968L12.36 18.08L11.056 24L16 20.8589L20.944 24L19.632 18.08L24 14.0968Z"
                      fill="white"
                    />
                  </svg>
                </span>
                <span
                  className="font-normal text-xl text-black"
                >
                  Personal Loans
                </span>
              </div>
              <div className='flex flex-col'>
              <div
                className="inline-flex items-center text-sm"
              >
                <span>
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
                <span>Flexible amounts upto 50,000</span>
              </div>

              <div
                className="inline-flex items-center text-sm"
              >
                <span>
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
                <span>Competitive interest rates</span>
              </div>


              <div
                className="inline-flex items-center text-sm"
              >
                <span>
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
                <span>No collateral required</span>
              </div>
              </div>
              <p className="text-xs mt-3 text-body-color mb-9 pl-1">
              Find the best loan options with flexible terms and competitive rates.
              </p>

              <a
                
                className="inline-flex items-center font-normal text-sm pl-1 text-primary"
              >
                Learn More

                <span className="pl-1">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    className="fill-current mt-[3px]"
                  >
                    <path
                      d="M16.3333 19.7633V15.0967H5.92666L5.89166 12.7517H16.3333V8.09668L22.1667 13.93L16.3333 19.7633Z"
                    />
                  </svg>
                </span>
              </a>

            </div>
          </div>







          <div className="w-full md:w-1/3 xl:w-1/4 px-4">
            <div
              className="bg-white dark:bg-black p-10 sm:p-12 md:p-10 lg:p-12 xl:p-10 2xl:p-12 rounded-[20px] shadow-award mb-8 cursor-pointer hover:scale-105 transition-all"
            >
              <div className="flex items-center mb-6">
                <span className="pr-[10px]">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="16" cy="16" r="16" fill="#8B5CF6" />
                    <path
                      d="M24 14.0968L18.248 13.5747L16 8L13.752 13.5747L8 14.0968L12.36 18.08L11.056 24L16 20.8589L20.944 24L19.632 18.08L24 14.0968Z"
                      fill="white"
                    />
                  </svg>
                </span>
                <span
                  className="font-normal text-xl text-black"
                >
                  Business Loans
                </span>
              </div>
              <div className='flex flex-col'>
              <div
                className="inline-flex items-center text-sm"
              >
                <span>
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
                <span>Flexible amounts upto 2,00,000</span>
              </div>

              <div
                className="inline-flex items-center text-sm"
              >
                <span>
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
                <span>Competitive interest rates</span>
              </div>


              <div
                className="inline-flex items-center text-sm"
              >
                <span>
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
                <span>No collateral required</span>
              </div>
              </div>
              <p className="text-xs mt-3 text-body-color mb-9 pl-1">
              Find the best loan options with flexible terms and competitive rates.
              </p>

              <a
                
                className="inline-flex items-center font-normal text-sm pl-1 text-primary"
              >
                Learn More

                <span className="pl-1">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    className="fill-current mt-[3px]"
                  >
                    <path
                      d="M16.3333 19.7633V15.0967H5.92666L5.89166 12.7517H16.3333V8.09668L22.1667 13.93L16.3333 19.7633Z"
                    />
                  </svg>
                </span>
              </a>

            </div>
          </div>





          <div className="w-full md:w-1/3 xl:w-1/4 px-4">
            <div
              className="bg-white dark:bg-black p-10 sm:p-12 md:p-10 lg:p-12 xl:p-10 2xl:p-12 rounded-[20px] shadow-award mb-8 cursor-pointer hover:scale-105 transition-all"
            >
              <div className="flex items-center mb-6">
                <span className="pr-[10px]">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="16" cy="16" r="16" fill="#8B5CF6" />
                    <path
                      d="M24 14.0968L18.248 13.5747L16 8L13.752 13.5747L8 14.0968L12.36 18.08L11.056 24L16 20.8589L20.944 24L19.632 18.08L24 14.0968Z"
                      fill="white"
                    />
                  </svg>
                </span>
                <span
                  className="font-normal text-xl text-black dark:text-white"
                >
                  Health Loans
                </span>
              </div>
              <div className='flex flex-col'>
              <div
                className="inline-flex items-center text-sm"
              >
                <span>
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
                <span>Flexible amounts upto 50,000</span>
              </div>

              <div
                className="inline-flex items-center text-sm"
              >
                <span>
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
                <span>Competitive interest rates</span>
              </div>


              <div
                className="inline-flex items-center text-sm"
              >
                <span>
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
                <span>No collateral required</span>
              </div>
              </div>
              <p className="text-xs mt-3 text-body-color mb-9 pl-1">
              Find the best loan options with flexible terms and competitive rates.
              </p>

              <a
                
                className="inline-flex items-center font-normal text-sm pl-1 text-primary"
              >
                Learn More

                <span className="pl-1">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    className="fill-current mt-[3px]"
                  >
                    <path
                      d="M16.3333 19.7633V15.0967H5.92666L5.89166 12.7517H16.3333V8.09668L22.1667 13.93L16.3333 19.7633Z"
                    />
                  </svg>
                </span>
              </a>

            </div>
          </div>




          <div className="w-full md:w-1/3 xl:w-1/4 px-4">
            <div
              className="bg-white dark:bg-black p-10 sm:p-12 md:p-10 lg:p-12 xl:p-10 2xl:p-12 rounded-[20px] shadow-award mb-8 cursor-pointer hover:scale-105 transition-all"
            >
              <div className="flex items-center mb-6">
                <span className="pr-[10px]">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="16" cy="16" r="16" fill="#8B5CF6" />
                    <path
                      d="M24 14.0968L18.248 13.5747L16 8L13.752 13.5747L8 14.0968L12.36 18.08L11.056 24L16 20.8589L20.944 24L19.632 18.08L24 14.0968Z"
                      fill="white"
                    />
                  </svg>
                </span>
                <span
                  className="font-normal text-xl text-black dark:text-white"
                >
                  Nari Shakti Loans
                </span>
              </div>
              <div className='flex flex-col'>
              <div
                className="inline-flex items-center text-sm"
              >
                <span>
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
                <span>Flexible amounts upto 1,00,000</span>
              </div>

              <div
                className="inline-flex items-center text-sm"
              >
                <span>
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
                <span>Competitive interest rates</span>
              </div>


              <div
                className="inline-flex items-center text-sm"
              >
                <span>
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
                <span>No collateral required</span>
              </div>
              </div>
              <p className="text-xs mt-3 text-body-color mb-9 pl-1">
              Find the best loan options with flexible terms and competitive rates.
              </p>

              <a
                
                className="inline-flex items-center font-normal text-sm pl-1 text-primary"
              >
                Learn More

                <span className="pl-1">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    className="fill-current mt-[3px]"
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
  )
}

export default Products