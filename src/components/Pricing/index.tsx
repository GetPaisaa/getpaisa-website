"use client";
import Link from "next/link";
import SectionTitle from "../Common/SectionTitle";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Pricing = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section
      id="pricing"
      className="relative z-20 overflow-hidden pb-12 pt-10 dark:bg-dark lg:pb-[40px] lg:pt-[40px]"
    >
      <div className="container">
        <div className="mb-[60px]">
          <SectionTitle
            subtitle="GetPaisa.com"
            title="Our Products"
            paragraph="Explore various types of financial products, their benefits, and how they can be used to achieve financial goals."
            center
          />
        </div>

        <Slider {...settings}>
          <div className="w-full px-4 md:w-1/3 lg:w-1/4">
            <div
              className="relative group z-10 mb-10 overflow-hidden border-2 border-primary rounded-bl-3xl rounded-br-3xl rounded-tl-3xl bg-white px-8 py-10 dark:bg-dark-2 sm:p-12 lg:px-6 lg:py-10"
              data-wow-delay=".1s"
            >
              <p className="absolute right-[5px] shadow-md top-[6px] inline-block rotate-0 rounded-bl-md rounded-tl-md bg-primary px-5 py-2 text-base font-medium text-white">
                Personal Loans
              </p>
              <div className="flex flex-col mt-10 text-gray-700 dark:text-white">
                <div className="inline-flex items-center text-sm">
                  <span>
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 28 28"
                      className="fill-current"
                    >
                      <path d="M16.3333 19.7633V15.0967H5.92666L5.89166 12.7517H16.3333V8.09668L22.1667 13.93L16.3333 19.7633Z"></path>
                    </svg>
                  </span>
                  <span>No paper work</span>
                </div>
                <div className="inline-flex items-center text-sm">
                  <span>
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 28 28"
                      className="fill-current"
                    >
                      <path d="M16.3333 19.7633V15.0967H5.92666L5.89166 12.7517H16.3333V8.09668L22.1667 13.93L16.3333 19.7633Z"></path>
                    </svg>
                  </span>
                  <span>Competitive interest rates</span>
                </div>

                <div className="inline-flex items-center text-sm">
                  <span>
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 28 28"
                      className="fill-current"
                    >
                      <path d="M16.3333 19.7633V15.0967H5.92666L5.89166 12.7517H16.3333V8.09668L22.1667 13.93L16.3333 19.7633Z"></path>
                    </svg>
                  </span>
                  <span>Upto ₹20K - 300k</span>
                </div>
                <div className="inline-flex items-center text-sm">
                  <span>
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 28 28"
                      className="fill-current"
                    >
                      <path d="M16.3333 19.7633V15.0967H5.92666L5.89166 12.7517H16.3333V8.09668L22.1667 13.93L16.3333 19.7633Z"></path>
                    </svg>
                  </span>
                  <span>Easy EMI</span>
                </div>
              </div>

              <p className="ml-2 py-5 text-[13px] dark:text-[#eee] text-body-color">
                Find the best loan options with flexible terms and competitive
                rates.
              </p>
              <Link
                href="/products/personal-loans"
                className="inline-flex items-center font-normal text-sm pl-1 hover:text-primary/90 text-primary"
              >
                Learn More
                <span className="pl-1">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    className="fill-current mt-[3px]"
                  >
                    <path d="M16.3333 19.7633V15.0967H5.92666L5.89166 12.7517H16.3333V8.09668L22.1667 13.93L16.3333 19.7633Z"></path>
                  </svg>
                </span>
              </Link>
              <div className="absolute -right-24 -bottom-24">
                <span className="h-40 w-40 rounded-full bg-primary flex opacity-80 group-hover:h-44 group-hover:w-44 transition-all"></span>
              </div>
            </div>
          </div>
          <div className="w-full px-4 md:w-1/3 lg:w-1/4">
            <div
              className="relative group z-10 mb-10 overflow-hidden border-2 border-primary rounded-bl-3xl rounded-br-3xl rounded-tl-3xl bg-white px-8 py-10  dark:bg-dark-2 sm:p-12 lg:px-6 lg:py-10"
              data-wow-delay=".1s"
            >
              <p className="absolute right-[5px] shadow-md top-[6px] inline-block rotate-0 rounded-bl-md rounded-tl-md bg-primary px-5 py-2 text-base font-medium text-white">
                Business Loans
              </p>
              <div className="flex flex-col mt-10 text-gray-700 dark:text-white">
                <div className="inline-flex items-center text-sm">
                  <span>
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 28 28"
                      className="fill-current"
                    >
                      <path d="M16.3333 19.7633V15.0967H5.92666L5.89166 12.7517H16.3333V8.09668L22.1667 13.93L16.3333 19.7633Z"></path>
                    </svg>
                  </span>
                  <span>Zero paper work</span>
                </div>
                <div className="inline-flex items-center text-sm">
                  <span>
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 28 28"
                      className="fill-current"
                    >
                      <path d="M16.3333 19.7633V15.0967H5.92666L5.89166 12.7517H16.3333V8.09668L22.1667 13.93L16.3333 19.7633Z"></path>
                    </svg>
                  </span>
                  <span>Easy line of credit</span>
                </div>

                <div className="inline-flex items-center text-sm">
                  <span>
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 28 28"
                      className="fill-current"
                    >
                      <path d="M16.3333 19.7633V15.0967H5.92666L5.89166 12.7517H16.3333V8.09668L22.1667 13.93L16.3333 19.7633Z"></path>
                    </svg>
                  </span>
                  <span>Upto ₹50K - 500k</span>
                </div>
                <div className="inline-flex items-center text-sm">
                  <span>
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 28 28"
                      className="fill-current"
                    >
                      <path d="M16.3333 19.7633V15.0967H5.92666L5.89166 12.7517H16.3333V8.09668L22.1667 13.93L16.3333 19.7633Z"></path>
                    </svg>
                  </span>
                  <span>Friendly EMI</span>
                </div>
              </div>

              <p className="ml-2 py-5 text-[13px] dark:text-[#eee] text-body-color">
                Find the best loan options with flexible terms and competitive
                rates.
              </p>
              <Link
                href="/products/business-loans"
                className="inline-flex items-center font-normal text-sm pl-1 hover:text-primary/90 text-primary"
              >
                Learn More
                <span className="pl-1">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    className="fill-current mt-[3px]"
                  >
                    <path d="M16.3333 19.7633V15.0967H5.92666L5.89166 12.7517H16.3333V8.09668L22.1667 13.93L16.3333 19.7633Z"></path>
                  </svg>
                </span>
              </Link>
              <div className="absolute -right-24 -bottom-24">
                <span className="h-40 w-40 rounded-full bg-primary flex opacity-80 group-hover:h-44 group-hover:w-44 transition-all"></span>
              </div>
            </div>
          </div>

          <div className="w-full px-4 md:w-1/3 lg:w-1/4">
            <div
              className="relative group z-10 mb-10 overflow-hidden border-2 border-primary rounded-bl-3xl rounded-br-3xl rounded-tl-3xl bg-white px-8 py-10 dark:bg-dark-2 sm:p-12 lg:px-6 lg:py-10"
              data-wow-delay=".1s"
            >
              <p className="absolute right-[5px] shadow-md top-[6px] inline-block rotate-0 rounded-bl-md rounded-tl-md bg-primary px-5 py-2 text-base font-medium text-white">
                Auto Loans
              </p>
              <div className="flex flex-col mt-10 text-gray-700 dark:text-white">
                <div className="inline-flex items-center text-sm">
                  <span>
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 28 28"
                      className="fill-current"
                    >
                      <path d="M16.3333 19.7633V15.0967H5.92666L5.89166 12.7517H16.3333V8.09668L22.1667 13.93L16.3333 19.7633Z"></path>
                    </svg>
                  </span>
                  <span>Wide Dealership Network</span>
                </div>
                <div className="inline-flex items-center text-sm">
                  <span>
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 28 28"
                      className="fill-current"
                    >
                      <path d="M16.3333 19.7633V15.0967H5.92666L5.89166 12.7517H16.3333V8.09668L22.1667 13.93L16.3333 19.7633Z"></path>
                    </svg>
                  </span>
                  <span>Easy Interest & Installment</span>
                </div>

                <div className="inline-flex items-center text-sm">
                  <span>
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 28 28"
                      className="fill-current"
                    >
                      <path d="M16.3333 19.7633V15.0967H5.92666L5.89166 12.7517H16.3333V8.09668L22.1667 13.93L16.3333 19.7633Z"></path>
                    </svg>
                  </span>
                  <span>Upto ₹50K - 200k</span>
                </div>
                <div className="inline-flex items-center text-sm">
                  <span>
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 28 28"
                      className="fill-current"
                    >
                      <path d="M16.3333 19.7633V15.0967H5.92666L5.89166 12.7517H16.3333V8.09668L22.1667 13.93L16.3333 19.7633Z"></path>
                    </svg>
                  </span>
                  <span>Upto 3 year options</span>
                </div>
              </div>

              <p className="ml-2 py-5 text-[13px] dark:text-[#eee] text-body-color">
                Find the best loan options with flexible terms and competitive
                rates.
              </p>
              <Link
                href="/products/auto-loans"
                className="inline-flex items-center font-normal text-sm pl-1 hover:text-primary/90 text-primary"
              >
                Learn More
                <span className="pl-1">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    className="fill-current mt-[3px]"
                  >
                    <path d="M16.3333 19.7633V15.0967H5.92666L5.89166 12.7517H16.3333V8.09668L22.1667 13.93L16.3333 19.7633Z"></path>
                  </svg>
                </span>
              </Link>
              <div className="absolute -right-24 -bottom-24">
                <span className="h-40 w-40 rounded-full bg-primary flex opacity-80 group-hover:h-44 group-hover:w-44 transition-all"></span>
              </div>
            </div>
          </div>

          <div className="w-full px-4 md:w-1/3 lg:w-1/4">
            <div
              className="relative group z-10 mb-10 overflow-hidden border-2 border-primary rounded-bl-3xl rounded-br-3xl rounded-tl-3xl bg-white px-8 py-10 dark:bg-dark-2 sm:p-12 lg:px-6 lg:py-10"
              data-wow-delay=".1s"
            >
              <p className="absolute right-[5px] shadow-md top-[6px] inline-block rotate-0 rounded-bl-md rounded-tl-md bg-primary px-5 py-2 text-base font-medium text-white">
                Health Loans
              </p>
              <div className="flex flex-col mt-10 text-gray-700 dark:text-white">
                <div className="inline-flex items-center text-sm">
                  <span>
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 28 28"
                      className="fill-current"
                    >
                      <path d="M16.3333 19.7633V15.0967H5.92666L5.89166 12.7517H16.3333V8.09668L22.1667 13.93L16.3333 19.7633Z"></path>
                    </svg>
                  </span>
                  <span>Basic fee structure</span>
                </div>
                <div className="inline-flex items-center text-sm">
                  <span>
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 28 28"
                      className="fill-current"
                    >
                      <path d="M16.3333 19.7633V15.0967H5.92666L5.89166 12.7517H16.3333V8.09668L22.1667 13.93L16.3333 19.7633Z"></path>
                    </svg>
                  </span>
                  <span>No prepayment needed</span>
                </div>

                <div className="inline-flex items-center text-sm">
                  <span>
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 28 28"
                      className="fill-current"
                    >
                      <path d="M16.3333 19.7633V15.0967H5.92666L5.89166 12.7517H16.3333V8.09668L22.1667 13.93L16.3333 19.7633Z"></path>
                    </svg>
                  </span>
                  <span>Upto ₹5 Lacs</span>
                </div>

                <div className="inline-flex items-center text-sm">
                  <span>
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 28 28"
                      className="fill-current"
                    >
                      <path d="M16.3333 19.7633V15.0967H5.92666L5.89166 12.7517H16.3333V8.09668L22.1667 13.93L16.3333 19.7633Z"></path>
                    </svg>
                  </span>
                  <span>Your virtual partner</span>
                </div>
              </div>
              <p className="ml-2 py-5 text-[13px] dark:text-[#eee] text-body-color">
                Find the best loan options with flexible terms and competitive
                rates.
              </p>
              <Link
                href="/products/health-loans"
                className="inline-flex items-center font-normal text-sm pl-1 hover:text-primary/90 text-primary"
              >
                Learn More
                <span className="pl-1">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    className="fill-current mt-[3px]"
                  >
                    <path d="M16.3333 19.7633V15.0967H5.92666L5.89166 12.7517H16.3333V8.09668L22.1667 13.93L16.3333 19.7633Z"></path>
                  </svg>
                </span>
              </Link>
              <div className="absolute -right-24 -bottom-24">
                <span className="h-40 w-40 rounded-full bg-primary flex opacity-80 group-hover:h-44 group-hover:w-44 transition-all"></span>
              </div>
            </div>
          </div>

          <div className="w-full px-4 md:w-1/3 lg:w-1/4">
            <div
              className="relative group z-10 mb-10 overflow-hidden border-2 border-primary rounded-bl-3xl rounded-br-3xl rounded-tl-3xl bg-white px-8 py-10 dark:bg-dark-2 sm:p-12 lg:px-6 lg:py-10"
              data-wow-delay=".1s"
            >
              <p className="absolute right-[5px] shadow-md top-[6px] inline-block rotate-0 rounded-bl-md rounded-tl-md bg-primary px-5 py-2 text-base font-medium text-white">
                Nari Shakti Loans
              </p>
              <div className="flex flex-col mt-10 text-gray-700 dark:text-white">
                <div className="inline-flex items-center text-sm">
                  <span>
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 28 28"
                      className="fill-current"
                    >
                      <path d="M16.3333 19.7633V15.0967H5.92666L5.89166 12.7517H16.3333V8.09668L22.1667 13.93L16.3333 19.7633Z"></path>
                    </svg>
                  </span>
                  <span>No credit score required</span>
                </div>
                <div className="inline-flex items-center text-sm">
                  <span>
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 28 28"
                      className="fill-current"
                    >
                      <path d="M16.3333 19.7633V15.0967H5.92666L5.89166 12.7517H16.3333V8.09668L22.1667 13.93L16.3333 19.7633Z"></path>
                    </svg>
                  </span>
                  <span>Soft and Easy EMIs</span>
                </div>

                <div className="inline-flex items-center text-sm">
                  <span>
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 28 28"
                      className="fill-current"
                    >
                      <path d="M16.3333 19.7633V15.0967H5.92666L5.89166 12.7517H16.3333V8.09668L22.1667 13.93L16.3333 19.7633Z"></path>
                    </svg>
                  </span>
                  <span>Upto ₹50K</span>
                </div>

                <div className="inline-flex items-center text-sm">
                  <span>
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 28 28"
                      className="fill-current"
                    >
                      <path d="M16.3333 19.7633V15.0967H5.92666L5.89166 12.7517H16.3333V8.09668L22.1667 13.93L16.3333 19.7633Z"></path>
                    </svg>
                  </span>
                  <span>Minimum paper work</span>
                </div>
              </div>

              <p className="ml-2 py-5 text-[13px] dark:text-[#eee] text-body-color">
                Find the best loan options with flexible terms and competitive
                rates.
              </p>
              <Link
                href="/products/nari-shakti-loans"
                className="inline-flex items-center font-normal text-sm pl-1 hover:text-primary/90 text-primary"
              >
                Learn More
                <span className="pl-1">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    className="fill-current mt-[3px]"
                  >
                    <path d="M16.3333 19.7633V15.0967H5.92666L5.89166 12.7517H16.3333V8.09668L22.1667 13.93L16.3333 19.7633Z"></path>
                  </svg>
                </span>
              </Link>
              <div className="absolute -right-24 -bottom-24">
                <span className="h-40 w-40 rounded-full bg-primary flex opacity-80 group-hover:h-44 group-hover:w-44 transition-all"></span>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Pricing;
