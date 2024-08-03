import React from 'react'

const Banking = () => {
  return (
    <div>
        <section className="pt-12">
      <div className="md:container">

      <div className="flex justify-center -mx-4">
              <div className="w-full px-4">
                <div
                  className="max-w-[510px] mx-auto text-center mb-[70px] wow fadeInUp"
                  data-wow-delay=".2s"
                >
                  <h2
                    className="font-normal text-3xl sm:text-4xl text-black dark:text-white mb-5"
                  >
                    Banking Partners
                  </h2>
                  <p className="font-normal text-base text-body-color">
                    Showcasing genuine, positive feedback from our customers to build trust and credibility.
                  </p>
                </div>
              </div>
            </div>


        <div
          className="bg-gradient-to-l from-gradient-1 to-gradient-2 md:rounded-[20px] py-8 px-8 sm:px-10 md:py-[40px] md:px-[50px] xl:py-[50px] xl:px-14 2xl:px-[70px] 2xl:py-[70px] relative z-10 wow fadeInUp"
          data-wow-delay=".2s"
        >
          <div className="flex flex-wrap items-center justify-center">
            <a
              href="https://www.hdfcbank.com/"
              target="_blank"
              rel="nofollow noreferrer"
              className="flex items-center justify-center max-w-[160px] lg:max-w-[130px] xl:max-w-[150px] 2xl:max-w-[160px] mx-3 sm:mx-4 xl:mx-6 2xl:mx-8 py-[15px]"
            >
              <img src="images/brands/hdfc.png" alt="hdfc" />
            </a>
            <a
              href="https://www.aubank.in/"
              target="_blank"
              rel="nofollow noreferrer"
              className="flex items-center justify-center max-w-[150px] lg:max-w-[120px] xl:max-w-[140px] 2xl:max-w-[150px] mx-3 sm:mx-4 xl:mx-6 2xl:mx-8 py-[12px]"
            >
              <img src="images/brands/ausmall.jpg" alt="au small" />
            </a>
            <a
              href="https://www.yesbank.in/"
              target="_blank"
              rel="nofollow noreferrer"
              className="flex items-center justify-center max-w-[160px] lg:max-w-[130px] xl:max-w-[150px] 2xl:max-w-[160px] mx-3 sm:mx-4 xl:mx-6 2xl:mx-8 py-[15px]"
            >
              <img src="images/brands/yesbank.png" alt="yes bank" />
            </a>
            <div 
              className="flex items-center justify-center max-w-[160px] lg:max-w-[130px] xl:max-w-[150px] 2xl:max-w-[160px] mx-3 sm:mx-4 xl:mx-6 2xl:mx-8 py-[15px]"
            >
              <span className='text-xl'>Adding more...</span>
            </div>
            
          </div>

          <div>
            <span className="absolute bottom-0 left-14 -z-1">
              <svg
                width="187"
                height="66"
                viewBox="0 0 187 66"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.5"
                  d="M122.036 4.65918C170.944 20.5767 197.688 73.1281 181.771 122.036C165.853 170.944 113.302 197.688 64.3938 181.771C15.4858 165.853 -11.2583 113.302 4.65918 64.3938C20.5767 15.4858 73.1281 -11.2583 122.036 4.65918Z"
                  fill="url(#paint0_linear_94_97)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_94_97"
                    x1="4.65914"
                    y1="64.3937"
                    x2="138.999"
                    y2="108.116"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="white" />
                    <stop offset="1" stopColor="white" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
            <span className="absolute top-0 right-14 -z-1">
              <svg
                width="169"
                height="67"
                viewBox="0 0 169 67"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.5"
                  d="M62.8886 63.1548C18.3442 51.2191 -8.09041 5.433 3.84523 -39.1114C15.7809 -83.6558 61.567 -110.09 106.111 -98.1548C150.656 -86.2192 177.09 -40.4331 165.155 4.11136C153.219 48.6558 107.433 75.0904 62.8886 63.1548Z"
                  fill="url(#paint0_linear_94_98)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_94_98"
                    x1="165.155"
                    y1="4.11136"
                    x2="42.8009"
                    y2="-28.6733"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="white" />
                    <stop offset="1" stopColor="white" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Banking