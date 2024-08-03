import React from 'react'
import Drawer from './commons/Drawer'
import Link from 'next/link'
import DownloadNow from './commons/DownloadNow'

const Header = () => {

  return (
    <header
      className="w-full flex items-center sticky top-0 z-50 py-3 fadeInUp"
    >
      <div className="container">
        <div
          className="flex -mx-4 items-center justify-between relative"
        >
          <div className="px-4 w-[180px] max-w-full">
            <Link
              href="/"

              className="w-full block"
            >
              <img
                src="images/logo/logo.svg"
                alt="logo"
                className="w-full"
              />

            </Link>
          </div>
          <div className="flex px-4 justify-end items-center w-full">
            <div>

              <Drawer />
              <nav
                className="hidden absolute py-4 lg:py-0 px-6 bg-white dark:bg-black shadow rounded-lg max-w-[250px] w-full lg:bg-transparent dark:lg:bg-transparent lg:max-w-full lg:w-full right-4 top-full lg:block lg:static lg:shadow-none"
              >
                <ul className="blcok lg:flex mt-3">
                  <li>
                    <Link
                      href="/about"
                      className="scroll-menu py-2 md:py-0 text-base font-medium text-body-color hover:text-primary lg:inline-flex flex lg:ml-4 xl:ml-6"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/products"
                      className="scroll-menu text-base font-medium text-body-color hover:text-primary lg:inline-flex flex lg:ml-4 xl:ml-6"
                    >
                      Products
                    </Link>
                  </li>
                  <li className='block md:hidden'>
                    <Link
                      href="/faqs"
                      className="scroll-menu text-base font-medium text-body-color hover:text-primary lg:inline-flex flex lg:ml-4 xl:ml-6"
                    >
                      Faqs
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/reviews"
                      className="scroll-menu text-base font-medium text-body-color hover:text-primary lg:inline-flex flex lg:ml-4 xl:ml-6"
                    >
                      Reviews
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact-us"
                      className="scroll-menu text-base font-medium text-body-color hover:text-primary lg:inline-flex flex lg:ml-4 xl:ml-6"
                    >
                      Contact
                    </Link>

                  </li>

                  <li className="relative group submenu-item">
                    <a
                      className="text-base cursor-pointer text-body-color group-hover:text-primary lg:inline-flex lg:pl-0 lg:pr-4 flex lg:ml-4 xl:ml-6 relative after:absolute after:w-2 after:h-2 after:border-b-2 after:border-r-2 after:border-current after:rotate-45 lg:after:right-0 after:right-1 after:top-1/2 after:translate-y-[-50%] after:mt-[-2px]"
                    >
                      Calculators
                    </a>
                    <div

                      className="submenu relative lg:absolute lg:w-[270px] top-full lg:top-[115%] left-0 rounded-lg lg:shadow-lg lg:p-4 lg:opacity-0 lg:invisible group-hover:opacity-100 lg:group-hover:visible lg:group-hover:top-full bg-white dark:bg-black transition-[top] duration-300"
                    >
                      <div className='flex flex-col gap-3'>
                        <Link className='text-base hover:text-primary text-body-color' href="/auto-loan-emi-calculator"><span className='p-3'>Auto Loan Calculator</span></Link>
                        <Link className='text-base hover:text-primary text-body-color' href="/personal-loan-emi-calculator"><span className='p-3'>Personal Loan Calculator</span></Link>
                        <Link className='text-base hover:text-primary text-body-color' href="/mutual-fund-calculator"><span className='p-3'>Mutual Fund Calculator</span></Link>
                        <Link className='text-base hover:text-primary text-body-color' href="/sip-calculator"><span className='p-3'>SIP Calculator</span></Link>
                      </div>
                    </div>
                  </li>

                  <li className="relative group submenu-item">
                    <a
                      className="text-base cursor-pointer text-body-color group-hover:text-primary lg:inline-flex lg:pl-0 lg:pr-4 flex lg:ml-4 xl:ml-6 relative after:absolute after:w-2 after:h-2 after:border-b-2 after:border-r-2 after:border-current after:rotate-45 lg:after:right-0 after:right-1 after:top-1/2 after:translate-y-[-50%] after:mt-[-2px]"
                    >
                      Download Getpaisa
                    </a>
                    <div

                      className="submenu relative lg:absolute lg:w-[250px] top-full lg:top-[115%] left-0 rounded-lg lg:shadow-lg lg:p-4 lg:opacity-0 lg:invisible group-hover:opacity-100 lg:group-hover:visible lg:group-hover:top-full bg-white dark:bg-black transition-[top] duration-300"
                    >
                      <div className='p-2 flex items-center flex-col'>
                        <span className='mt-4 text-center'>Scan QR code to download <br /> <span className='text-primary'>GetPaisa App</span></span>
                        <img className='w-36 rounded-md' src='https://www.fibe.in/_next/image/?url=%2Fappsflyer.png&w=256&q=75' />
                      </div>

                      <div className='flex flex-col gap-3'>
                        <button className="px-3 py-1.5 flex gap-2 items-center rounded-xl outline outline-2">
                          <div className="w-8">
                            <img className="h-full w-full" src="https://www.svgrepo.com/show/394180/google-play.svg" />
                          </div>
                          <div>
                            <div className="text-sm font-extrabold hidden md:block">Download on the</div>
                            <div className="text-xl">Google Play</div>
                          </div>
                        </button>

                        <button className="px-3 py-1.5 flex gap-2 items-center rounded-xl outline outline-2">
                          <div className="w-10">
                            <img className="h-full w-full" src="images/brands/apple.svg" />
                          </div>
                          <div>
                            <div className="text-sm font-extrabold hidden md:block">Download on the</div>
                            <div className="md:text-xl text-md">App Store</div>
                          </div>
                        </button>
                      </div>


                    </div>
                  </li>
                </ul>
              </nav>
            </div>
            <div
              className="xl:pl-10 sm:flex justify-end hidden pr-10 lg:pr-0"
            >
              {/* <a
                href="#cta"
                className="flex items-center justify-center text-base font-medium text-white bg-[#2B9F9F] rounded-lg px-6 transition-all hover:text-white hover:shadow-primary-hover"
              >
                Download App
              </a> */}
              <DownloadNow color={`bg-[#2B9F9F]`}/>
              <div>
                <label
                  htmlFor="darkToggler"
                  className="cursor-pointer w-9 h-9 md:w-14 md:h-14 rounded-full flex items-center justify-center bg-gray-2 dark:bg-dark-bg text-black dark:text-white"
                >
                  <input
                    type="checkbox"
                    name="darkToggler"
                    id="darkToggler"
                    className="sr-only"
                    aria-label="darkToggler"
                  />
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header