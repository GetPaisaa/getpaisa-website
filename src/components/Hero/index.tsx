"use client";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DownloadNowUni from "../Common/DownloadNowUni";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
};

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative overflow-hidden group bg-primary pt-[120px] md:pt-[130px] lg:pt-[160px] pb-[100px]"
      >
        <div className="container relative z-40">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full lg:w-1/2 px-4">
              <div className="mb-14 lg:mb-0 max-w-4xl">
                <div className="flex font-normal text-white text-xl md:text-[5px] mb-4">
                  <h1 className="leading-[10px] md:leading-[50px]">
                    <span className="text-xl md:text-4xl">
                      Unleashing the Power of Your Financial Future.
                    </span>
                    <div className="rotating-words mt-2 text-2xl md:text-5xl">
                      <span>
                        <Link href="/products/personal-loans">
                          Personal Loans
                        </Link>
                      </span>
                      <span>
                        <Link href="/products/auto-loans">Auto Loans</Link>
                      </span>
                      <span>
                        <Link href="/products/health-loans">Health Loans</Link>
                      </span>
                      <span>
                        <Link href="/products/business-loans">
                          Business Loans
                        </Link>
                      </span>
                      <span>
                        <Link href="/products/nari-shakti-loans">
                          Nari Shakti Loans
                        </Link>
                      </span>
                    </div>
                  </h1>
                </div>

                <div className="mt-6 features hidden md:flex text-white items-center gap-3 text-lg mb-4">
                  <span>Fast Processing</span>
                  <span className="h-4 w-[2px] bg-[#fff]"></span>
                  <span>Zero Paperwork</span>
                  <span className="h-4 w-[2px] bg-[#fff]"></span>
                  <span>Minimum Interest</span>
                </div>

                <p className="text-white mb-4 text-sm">
                  Discover a new way to manage your finances with ease and
                  confidence. At GetPaisa, we believe that everyone deserves
                  brighter financial future. Whether you're looking for a
                  personal loan, managing your budget, we're here to help you
                  every step of the way.
                </p>

                <span className="mb-4 text-white text-xl">
                  Attractive Interest Rates Starting From 18%
                  <sup className="text-red">*</sup>
                </span>

                <hr className="line" />

                <ul className="mb-10 mt-10 flex flex-wrap items-center gap-5">
                  <li>
                    <DownloadNowUni />
                  </li>
                  <li>
                    <Link
                      href="#"
                      target="_blank"
                      className="flex items-center gap-4 rounded-md bg-white/[0.12] px-6 py-[14px] text-base font-medium text-white transition duration-300 ease-in-out hover:bg-white hover:text-primary"
                    >
                      Watch Video
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-full lg:w-1/2 px-4">
              <div className="text-center relative z-1 h-[532px] flex items-center justify-center">
                <div className="iphone">
                  <div className="screen">
                    <Slider {...settings}>
                      <img
                        src="images1/misc/splash.svg"
                        alt="hero"
                        className="w-full h-full -mt-[3px] rounded-2xl shadow-sm"
                      />

                      <img
                        src="images1/hero/screen1.jpg"
                        alt="hero"
                        className="w-full h-full -mt-[3px] rounded-2xl shadow-sm"
                      />

                      <img
                        src="images1/cta/cta-image-3.svg"
                        alt="hero"
                        className="w-full object-cover h-full -mt-[3px] rounded-2xl shadow-sm"
                      />

                      <img
                        src="images1/hero/bank.svg"
                        alt="hero"
                        className="w-full h-full -mt-[3px] rounded-2xl shadow-sm"
                      />
                    </Slider>
                  </div>
                </div>

                <span className="absolute -z-1 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[350px] animate-pulse w-full h-[350px] bg-white dark:bg-dark bg-opacity-25 dark:bg-opacity-25 shadow-shape-1 rounded-full"></span>
                <span className="absolute -z-1 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[450px] animate-pulse w-full h-[450px] bg-white dark:bg-dark bg-opacity-25 dark:bg-opacity-25 shadow-shape-1 rounded-full"></span>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute -z-0 top-0 -right-36 group-hover:-right-40 transition-all">
          <img src="images1/pattern/bannerpattern.svg" className="rotate-" />
        </div>
        <div className="absolute z-10 -bottom-[20px] -left-48">
          <img
            src="images1/pattern/bannerpattern.svg"
            className="rotate-[178deg]"
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
