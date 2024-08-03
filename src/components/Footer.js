import Link from 'next/link'
import React from 'react'
import Newsletter from './commons/Newsletter'

const Footer = () => {
    return (
        <div>
            <footer className='bottom-0'>
                <div
                    className="bg-gradient-1 relative dark:bg-black z-10 pt-[100px] pb-[52px] wow fadeInUp"
                    data-wow-delay=".2s"
                >
                    <div className="container">
                        <div className="flex flex-wrap -mx-4">
                            <div
                                className="w-full md:w-1/2 lg:w-4/12 xl:w-4/12 px-4"
                            >
                                <div className="mb-20 sm:max-w-[300px]">
                                    <div className="py- w-[160px] max-w-full">
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
                                    {/* <p
                                        className="font-normal text-[12px] text-body-color mb-8"
                                    >
                                        At Propkar, we're dedicated to simplify your financial journey. As a
                                        trusted retail finance company.
                                    </p> */}


                                    <div className="flex items-center ">
                                        {/* <a
                                            href="https://x.com/GetpaisaNBFC"
                                            target='_blank'
                                            className="text-body-color flex items-center justify-center hover:text-primary mr-4"
                                            name="social-link"
                                            aria-label="social-link"
                                        >
                                            <svg
                                                width="20"
                                                height="20"
                                                viewBox="0 0 20 20"
                                                className="fill-current"
                                            >
                                                <path
                                                    d="M18.7167 5.00016C18.075 5.29183 17.3833 5.4835 16.6667 5.57516C17.4 5.1335 17.9667 4.4335 18.2333 3.59183C17.5417 4.0085 16.775 4.30016 15.9667 4.46683C15.3083 3.75016 14.3833 3.3335 13.3333 3.3335C11.375 3.3335 9.77499 4.9335 9.77499 6.9085C9.77499 7.19183 9.80832 7.46683 9.86666 7.72516C6.89999 7.57516 4.25832 6.15016 2.49999 3.99183C2.19166 4.51683 2.01666 5.1335 2.01666 5.7835C2.01666 7.02516 2.64166 8.12516 3.60833 8.75016C3.01666 8.75016 2.46666 8.5835 1.98333 8.3335C1.98333 8.3335 1.98333 8.3335 1.98333 8.3585C1.98333 10.0918 3.21666 11.5418 4.84999 11.8668C4.54999 11.9502 4.23333 11.9918 3.90832 11.9918C3.68333 11.9918 3.45833 11.9668 3.24166 11.9252C3.69166 13.3335 4.99999 14.3835 6.57499 14.4085C5.35832 15.3752 3.81666 15.9418 2.13333 15.9418C1.84999 15.9418 1.56666 15.9252 1.28333 15.8918C2.86666 16.9085 4.74999 17.5002 6.76666 17.5002C13.3333 17.5002 16.9417 12.0502 16.9417 7.32516C16.9417 7.16683 16.9417 7.01683 16.9333 6.8585C17.6333 6.3585 18.2333 5.72516 18.7167 5.00016Z"
                                                />
                                            </svg>
                                        </a>
                                        <a
                                            href="https://instagram.com/getpaisanbfc"
                                            target='_blank'
                                            className="text-body-color flex items-center justify-center hover:text-primary mr-4"
                                            name="social-link"
                                            aria-label="social-link"
                                        >
                                            <svg
                                                width="20"
                                                height="20"
                                                viewBox="0 0 20 20"
                                                className="fill-current"
                                            >
                                                <path
                                                    d="M6.50002 1.6665H13.5C16.1667 1.6665 18.3334 3.83317 18.3334 6.49984V13.4998C18.3334 14.7817 17.8241 16.0111 16.9177 16.9175C16.0113 17.8239 14.7819 18.3332 13.5 18.3332H6.50002C3.83335 18.3332 1.66669 16.1665 1.66669 13.4998V6.49984C1.66669 5.21796 2.17591 3.98858 3.08234 3.08215C3.98876 2.17573 5.21814 1.6665 6.50002 1.6665ZM6.33335 3.33317C5.5377 3.33317 4.77464 3.64924 4.21203 4.21185C3.64942 4.77446 3.33335 5.53752 3.33335 6.33317V13.6665C3.33335 15.3248 4.67502 16.6665 6.33335 16.6665H13.6667C14.4623 16.6665 15.2254 16.3504 15.788 15.7878C16.3506 15.2252 16.6667 14.4622 16.6667 13.6665V6.33317C16.6667 4.67484 15.325 3.33317 13.6667 3.33317H6.33335ZM14.375 4.58317C14.6513 4.58317 14.9162 4.69292 15.1116 4.88827C15.3069 5.08362 15.4167 5.34857 15.4167 5.62484C15.4167 5.9011 15.3069 6.16606 15.1116 6.36141C14.9162 6.55676 14.6513 6.6665 14.375 6.6665C14.0988 6.6665 13.8338 6.55676 13.6385 6.36141C13.4431 6.16606 13.3334 5.9011 13.3334 5.62484C13.3334 5.34857 13.4431 5.08362 13.6385 4.88827C13.8338 4.69292 14.0988 4.58317 14.375 4.58317ZM10 5.83317C11.1051 5.83317 12.1649 6.27216 12.9463 7.05356C13.7277 7.83496 14.1667 8.89477 14.1667 9.99984C14.1667 11.1049 13.7277 12.1647 12.9463 12.9461C12.1649 13.7275 11.1051 14.1665 10 14.1665C8.89495 14.1665 7.83514 13.7275 7.05374 12.9461C6.27234 12.1647 5.83335 11.1049 5.83335 9.99984C5.83335 8.89477 6.27234 7.83496 7.05374 7.05356C7.83514 6.27216 8.89495 5.83317 10 5.83317ZM10 7.49984C9.33698 7.49984 8.70109 7.76323 8.23225 8.23207C7.76341 8.70091 7.50002 9.3368 7.50002 9.99984C7.50002 10.6629 7.76341 11.2988 8.23225 11.7676C8.70109 12.2364 9.33698 12.4998 10 12.4998C10.6631 12.4998 11.2989 12.2364 11.7678 11.7676C12.2366 11.2988 12.5 10.6629 12.5 9.99984C12.5 9.3368 12.2366 8.70091 11.7678 8.23207C11.2989 7.76323 10.6631 7.49984 10 7.49984Z"
                                                />
                                            </svg>
                                        </a> */}
                                        <a
                                            href="https://www.youtube.com/channel/UCWZGoZfGLzL6cLD_sgR0NDg"
                                            className="text-body-color flex items-center justify-center hover:text-primary mr-3"
                                            name="social-link"
                                            aria-label="social-link"
                                        >
                                            <img className='w-10' src='images/social/youtube.svg'/>
                                        </a>

                                        <a
                                            href="https://x.com/GetpaisaNBFC"
                                            className="text-body-color flex items-center justify-center hover:text-primary mr-3"
                                            name="social-link"
                                            aria-label="social-link"
                                        >
                                            <img className='w-7' src='images/social/twitterx.svg'/>
                                        </a>

                                        <a
                                            href="https://instagram.com/getpaisanbfc"
                                            className="text-body-color flex items-center justify-center hover:text-primary mr-3"
                                            name="social-link"
                                            aria-label="social-link"
                                        >
                                            <img className='w-8' src='images/social/instagram.svg'/>
                                        </a>
 
                                    </div>

                                    <div className='flex flex-col gap-2'>
                                        <h3 className='font-normal text-[20px] text-primary'>Propkar securities pvt Ltd</h3>
                                        <span className='font-normal'>113, 3rd floor Priya enclave ,Karkardooma, delhi, 110092</span>
                                        <span className='font-normal'>Phone :<a href='tel:9999494925'>+919999494925</a></span>
                                        <span className='font-normal'>GST :07AADCP3732A1ZX</span>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="w-full sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12 px-4"
                            >
                                <div className="mb-12">
                                    <h3
                                        className="font-normal text-xl text-black dark:text-white mb-9"
                                    >
                                        Quick Links
                                    </h3>
                                    <ul className="space-y-[18px]">
                                        <li>
                                            <Link
                                                href="/about"
                                                className="font-normal text-base text-body-color hover:text-primary inline-block"
                                            >
                                                About Us
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="/products"
                                                className="font-normal text-base text-body-color hover:text-primary inline-block"
                                            >
                                                Products
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="faqs"
                                                className="font-normal text-base text-body-color hover:text-primary inline-block"
                                            >
                                                Faqs
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="contact-us"
                                                className="font-normal text-base text-body-color hover:text-primary inline-block"
                                            >
                                                Contact Us
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div
                                className="w-full sm:w-1/2 md:w-1/2 lg:w-3/12 xl:w-3/12 px-4"
                            >
                                <div className="mb-12">
                                    <h3
                                        className="font-normal text-xl text-black dark:text-white mb-9"
                                    >
                                        Company
                                    </h3>
                                    <ul className="space-y-[18px]">
                                        <li>
                                            <Link
                                                href="/privacy-policy"
                                                className="font-normal text-base text-body-color hover:text-primary inline-block"
                                            >
                                                Privacy Policy
                                            </Link>
                                        </li>

                                        <li>
                                            <Link
                                                href="/grievance-redressal-policy"
                                                className="font-normal text-base text-body-color hover:text-primary inline-block"
                                            >
                                                Grievance Redressal Policy
                                            </Link>
                                        </li>



                                        <li>
                                            <Link
                                                href="/terms-conditions"
                                                className="font-normal text-base text-body-color hover:text-primary inline-block"
                                            >
                                                Terms & Conditions
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="/personal-loan-emi-calculator"
                                                className="font-normal text-base text-body-color hover:text-primary inline-block"
                                            >
                                                Loan EMI Calculator
                                            </Link>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                            <div
                                className="w-full md:w-1/2 lg:w-3/12 xl:w-3/12 px-4"
                            >
                                <div className="mb-12">
                                    <h3
                                        className="font-normal text-xl text-black dark:text-white mb-9"
                                    >
                                        Join Our Newsletter
                                    </h3>
                                    <p
                                        className="font-normal text-[13px] text-base text-body-color mb-8"
                                    >
                                        Join Our Newsletter and Get the Latest News about GetPaisa Straight to Your Inbox!
                                    </p>
                                    <Newsletter />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <span className="absolute left-0 bottom-0 -z-1">
                            <svg
                                width="142"
                                height="73"
                                viewBox="0 0 142 73"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M97.5778 80C97.5778 35.8054 61.7615 -5.42825e-06 17.5778 -3.49691e-06C-26.606 -1.56558e-06 -62.4222 35.8054 -62.4222 80C-62.4222 124.173 -26.606 160 17.5778 160C61.7615 160 97.5778 124.173 97.5778 80Z"
                                    fill="url(#paint0_radial_106_149)"
                                />
                                <circle
                                    cx="103.496"
                                    cy="55.2326"
                                    r="1.84993"
                                    transform="rotate(-150.952 103.496 55.2326)"
                                    fill="#8B5CF6"
                                />
                                <circle
                                    cx="95.5911"
                                    cy="69.464"
                                    r="1.84993"
                                    transform="rotate(-150.952 95.5911 69.464)"
                                    fill="#8B5CF6"
                                />
                                <circle
                                    cx="111.22"
                                    cy="41.3244"
                                    r="1.84993"
                                    transform="rotate(-150.952 111.22 41.3244)"
                                    fill="#8B5CF6"
                                />
                                <circle
                                    cx="73.6349"
                                    cy="75.4679"
                                    r="1.84993"
                                    transform="rotate(-150.952 73.6349 75.4679)"
                                    fill="#8B5CF6"
                                />
                                <circle
                                    cx="131.636"
                                    cy="70.862"
                                    r="1.84993"
                                    transform="rotate(-150.952 131.636 70.862)"
                                    fill="#8B5CF6"
                                />
                                <circle
                                    cx="89.2642"
                                    cy="47.3283"
                                    r="1.84993"
                                    transform="rotate(-150.952 89.2642 47.3283)"
                                    fill="#8B5CF6"
                                />
                                <circle
                                    cx="81.3598"
                                    cy="61.5597"
                                    r="1.84993"
                                    transform="rotate(-150.952 81.3598 61.5597)"
                                    fill="#8B5CF6"
                                />
                                <circle
                                    cx="139.36"
                                    cy="56.9538"
                                    r="1.84993"
                                    transform="rotate(-150.952 139.36 56.9538)"
                                    fill="#8B5CF6"
                                />
                                <circle
                                    cx="96.9888"
                                    cy="33.4196"
                                    r="1.84993"
                                    transform="rotate(-150.952 96.9888 33.4196)"
                                    fill="#8B5CF6"
                                />
                                <circle
                                    cx="59.4034"
                                    cy="67.5636"
                                    r="1.84993"
                                    transform="rotate(-150.952 59.4034 67.5636)"
                                    fill="#8B5CF6"
                                />
                                <circle
                                    cx="117.404"
                                    cy="62.9572"
                                    r="1.84993"
                                    transform="rotate(-150.952 117.404 62.9572)"
                                    fill="#8B5CF6"
                                />
                                <circle
                                    cx="75.0325"
                                    cy="39.4235"
                                    r="1.84993"
                                    transform="rotate(-150.952 75.0325 39.4235)"
                                    fill="#8B5CF6"
                                />
                                <circle
                                    cx="67.1284"
                                    cy="53.6554"
                                    r="1.84993"
                                    transform="rotate(-150.952 67.1284 53.6554)"
                                    fill="#8B5CF6"
                                />
                                <circle
                                    cx="125.129"
                                    cy="49.049"
                                    r="1.84993"
                                    transform="rotate(-150.952 125.129 49.049)"
                                    fill="#8B5CF6"
                                />
                                <circle
                                    cx="82.7576"
                                    cy="25.5158"
                                    r="1.84993"
                                    transform="rotate(-150.952 82.7576 25.5158)"
                                    fill="#8B5CF6"
                                />
                                <defs>
                                    <radialGradient
                                        id="paint0_radial_106_149"
                                        cx="0"
                                        cy="0"
                                        r="1"
                                        gradientUnits="userSpaceOnUse"
                                        gradientTransform="translate(-62.4222 80) scale(160)"
                                    >
                                        <stop stopColor="#FFEEFE" />
                                        <stop offset="0.569" stopColor="#FFEEFE" />
                                        <stop offset="0.993" stopColor="#F1C6EF" />
                                    </radialGradient>
                                </defs>
                            </svg>
                        </span>
                        <span className="absolute right-0 top-0 -z-1">
                            <svg
                                width="120"
                                height="75"
                                viewBox="0 0 120 75"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M103 75C137.804 75 166 46.7947 166 12C166 -22.7947 137.804 -51 103 -51C68.2141 -51 40.0003 -22.7947 40.0003 12C40.0003 46.7947 68.2141 75 103 75Z"
                                    fill="url(#paint0_radial_106_293)"
                                />
                                <circle
                                    cx="32.5072"
                                    cy="32.5491"
                                    r="1.84993"
                                    transform="rotate(-157.548 32.5072 32.5491)"
                                    fill="#8B5CF6"
                                />
                                <circle
                                    cx="38.7245"
                                    cy="17.5037"
                                    r="1.84993"
                                    transform="rotate(-157.548 38.7245 17.5037)"
                                    fill="#8B5CF6"
                                />
                                <circle
                                    cx="44.9415"
                                    cy="2.4583"
                                    r="1.84993"
                                    transform="rotate(-157.548 44.9415 2.4583)"
                                    fill="#8B5CF6"
                                />
                                <circle
                                    cx="62.2536"
                                    cy="44.8406"
                                    r="1.84993"
                                    transform="rotate(-157.548 62.2536 44.8406)"
                                    fill="#8B5CF6"
                                />
                                <circle
                                    cx="17.4619"
                                    cy="26.3323"
                                    r="1.84993"
                                    transform="rotate(-157.548 17.4619 26.3323)"
                                    fill="#8B5CF6"
                                />
                                <circle
                                    cx="68.4737"
                                    cy="29.7972"
                                    r="1.84993"
                                    transform="rotate(-157.548 68.4737 29.7972)"
                                    fill="#8B5CF6"
                                />
                                <circle
                                    cx="23.6791"
                                    cy="11.2869"
                                    r="1.84993"
                                    transform="rotate(-157.548 23.6791 11.2869)"
                                    fill="#8B5CF6"
                                />
                                <circle
                                    cx="74.6905"
                                    cy="14.7513"
                                    r="1.84993"
                                    transform="rotate(-157.548 74.6905 14.7513)"
                                    fill="#8B5CF6"
                                />
                                <circle
                                    cx="80.908"
                                    cy="-0.293648"
                                    r="1.84993"
                                    transform="rotate(-157.548 80.908 -0.293648)"
                                    fill="#8B5CF6"
                                />
                                <circle
                                    cx="47.2109"
                                    cy="38.6253"
                                    r="1.84993"
                                    transform="rotate(-157.548 47.2109 38.6253)"
                                    fill="#8B5CF6"
                                />
                                <circle
                                    cx="2.41638"
                                    cy="20.115"
                                    r="1.84993"
                                    transform="rotate(-157.548 2.41638 20.115)"
                                    fill="#8B5CF6"
                                />
                                <circle
                                    cx="53.4277"
                                    cy="23.5794"
                                    r="1.84993"
                                    transform="rotate(-157.548 53.4277 23.5794)"
                                    fill="#8B5CF6"
                                />
                                <circle
                                    cx="8.63378"
                                    cy="5.06963"
                                    r="1.84993"
                                    transform="rotate(-157.548 8.63378 5.06963)"
                                    fill="#8B5CF6"
                                />
                                <circle
                                    cx="59.6451"
                                    cy="8.53448"
                                    r="1.84993"
                                    transform="rotate(-157.548 59.6451 8.53448)"
                                    fill="#8B5CF6"
                                />
                                <defs>
                                    <radialGradient
                                        id="paint0_radial_106_293"
                                        cx="0"
                                        cy="0"
                                        r="1"
                                        gradientUnits="userSpaceOnUse"
                                        gradientTransform="translate(103 -51) rotate(90) scale(126)"
                                    >
                                        <stop stopColor="white" />
                                        <stop offset="0.569" stopColor="#E4F2FE" />
                                        <stop offset="0.993" stopColor="#D2E2EF" />
                                    </radialGradient>
                                </defs>
                            </svg>
                        </span>
                    </div>
                </div>

                <div
                    className="bg-white dark:bg-dark p-7"

                >
                    <p
                        className="font-normal text-base text-body-color text-center"
                    >
                        Copyright by getPaisa.com 2024, All rights reserved.
                    </p>
                </div>
            </footer>


            <a
                className="ud-flex ud-items-center ud-justify-center ud-bg-primary ud-text-white ud-w-10 ud-h-10 ud-rounded-lg ud-fixed ud-bottom-8 ud-right-8 ud-left-auto ud-z-[999] hover:ud-shadow-signUp ud-transition back-to-top ud-shadow-md"
            >
                <span
                    className="ud-w-3 ud-h-3 ud-border-t ud-border-l ud-border-white ud-rotate-45 ud-mt-[6px]"
                ></span>
            </a>
        </div>
    )
}

export default Footer