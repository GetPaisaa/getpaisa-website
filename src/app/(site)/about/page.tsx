 
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "About Us | GetPaisa.com",
  description: "About Us | GetPaisa.com",
};

const AboutPage = () => {
  return (
    <main>
      <Breadcrumb pageName="About Us" />
      <section id="blog" className="py-10 2xl:py-[100px]">
                <div className="container">
                    <div className="flex flex-wrap justify-center -mx-4">
                        <div className="w-full lg:w-8/12 px-4">
                            <div className='text-center py-10'>
                                <p className='text-4xl'>Welcome to Propkar Securities Pvt Ltd: Your Partner in Retail
                                    Finance</p>
                            </div>
                            <div>
                                <p className="font-normal text-base leading-relaxed text-body-color mb-8">
                                    At Propkar, we're dedicated to simplify your financial journey. As a
                                    trusted retail finance company, we specialize in providing tailored
                                    solutions   to   meet   your   unique   needs.   Our   team   of   experts   is
                                    committed to make your financial goals a reality. Discover the ease of
                                    achieving financial well-being with Propkar.
                                </p>
                                <h3 className="font-normal text-2xl text-black dark:text-white mb-5">
                                    Mission
                                </h3>
                                <p className="font-normal text-base leading-relaxed text-body-color mb-8">
                                    At Propkar, our mission is to empower individuals and families with
                                    accessible, transparent, and personalized financial solutions. We are
                                    committed to being your trusted partner on the path to financial well-
                                    being,   providing   expert   guidance,   innovative   products,   and
                                    exceptional customer service. With Propkar, your financial dreams
                                    become achievable realities.
                                </p>

                                <h3 className="font-normal text-2xl text-black dark:text-white mb-5">
                                    Vision
                                </h3>
                                <p className="font-normal text-base leading-relaxed text-body-color mb-8">
                                    Our vision at Propkar is to create a future where financial prosperity
                                    knows no bounds. We strive to be at the forefront of innovation in
                                    retail   finance,   making   financial   security   and   growth   accessible   to
                                    every   individual.   Through   cutting-edge   technology,   unwavering
                                    integrity, and a commitment to our customers, we envision a world
                                    where everyone can confidently pursue their financial aspirations, no
                                    matter how big or small.
                                </p>

                                <h3 className="font-normal text-2xl text-black dark:text-white mb-5">
                                    Team
                                </h3>
                                <p className="font-normal text-base leading-relaxed text-body-color mb-8">
                                    Directors – Having 25 years experience in business finance
                                    CEO – Having more than 20 years experience in retail financing
                                    Team of Experts specialising in various fields.
                                </p>

                                <h3 className="font-normal text-2xl text-black dark:text-white mb-5">
                                    Products
                                </h3>

                                <ul
                                    className="list-inside list-disc space-y-3 mb-8"
                                >
                                    <li className="font-normal text-base text-body-color">
                                        Auto Finance
                                    </li>
                                    <li className="font-normal text-base text-body-color">
                                        Consumer Finance
                                    </li>
                                    <li className="font-normal text-base text-body-color">
                                        Personal Loans
                                    </li>
                                    <li className="font-normal text-base text-body-color">
                                        Loan against Shares
                                    </li>

                                    <li className="font-normal text-base text-body-color">
                                        Small Business Finance
                                    </li>

                                    <li className="font-normal text-base text-body-color">
                                        Housing Loans
                                    </li>

                                    <li className="font-normal text-base text-body-color">
                                        Loan Against Property
                                    </li>
                                </ul>

                                <h3 className="font-normal text-2xl text-black dark:text-white mb-5">
                                    Contact Us
                                </h3>

                                <p className="font-normal flex flex-col gap-2 text-base leading-relaxed text-body-color mb-8">
                                    <span>Email: <a href='emailto:info@propkar.com'>info@propkar.com</a></span>
                                    <span>Career: <a href='emailto:info@propkar.com'>career@propkar.com</a></span>
                                </p>


                            </div>
                        </div>
                    </div>
                </div>
            </section>
    </main>
  );
};

export default AboutPage;
