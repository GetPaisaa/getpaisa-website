import Link from "next/link";
import SectionTitle from "../Common/SectionTitle";

const Team = () => {
  return (
    <section id="team" className="overflow-hidden bg-gray-1 pb-12 pt-20 dark:bg-dark-2 lg:pb-[90px] lg:pt-[30px]">
      <div className="container mx-auto">
        <div className="mb-[60px]">
          <SectionTitle
            subtitle="Getpaisa.com"
            title="Upcoming products"
            paragraph="Upcoming loan products are poised to reshape the financial landscape, catering to evolving consumer needs and leveraging technological advancements"
            width="640px"
            center
          />
        </div>
        <div className="relative overflow-hidden">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full lg:w-1/2 px-4">
              <div className="w-full px-4 md:w-8/12">
                <div
                  className="relative group z-10 mb-1 overflow-hidden border-2 border-primary rounded-bl-3xl rounded-br-3xl rounded-tl-3xl bg-white px-8 py-10  dark:bg-dark-2 sm:p-12 lg:px-6 lg:py-10"
                  data-wow-delay=".1s"
                >
                  <p className="absolute right-[5px] shadow-md top-[6px] inline-block rotate-0 rounded-bl-md rounded-tl-md bg-primary px-5 py-2 text-base font-medium text-white">
                    Upcoming Products
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
                      <span>Mutual Funds</span>
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
                      <span>SIP</span>
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
                      <span>Stock Trading</span>
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
                      <span>Many more...</span>
                    </div>
                  </div>

                  <p className="ml-2 py-5 text-[13px] dark:text-[#eee] text-body-color">
                    Find the best loan options with flexible terms and
                    competitive rates.
                  </p>
                  <Link
                    href="/products/nari-shakti-loans"
                    className="inline-flex items-center font-normal text-sm pl-1 hover:text-primary/90 text-primary"
                  >
                    Launching Soon
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
            </div>

            <div className="w-full lg:w-1/2 px-4">
              <div className="px-2 w-full sm:px-4 -mt-9 lg:px-2 xl:px-4">
                <div
                  className={`relative mb-4 sm:mb-8 w-full lg:h-[400px] xl:h-[400px] `}
                >
                  <img src="/images1/misc/upcoming.gif" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
