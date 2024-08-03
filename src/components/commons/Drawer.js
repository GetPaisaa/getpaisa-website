
'use client'
import { useState } from 'react';
import Link from 'next/link';
import { Panel, PanelGroup } from 'rsuite';

const Drawer = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDrawer = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='relative'>
            <button
                onClick={toggleDrawer}
                className="block absolute right-0 top-1/2 -translate-y-1/2 lg:hidden px-3 py-[6px] rounded-lg"
            >
                <span
                    className="relative w-[30px] h-[2px] my-[6px] block bg-black dark:bg-white"
                ></span>
                <span
                    className="relative w-[20px] h-[2px] my-[6px] block bg-black dark:bg-white"
                ></span>
                <span
                    className="relative w-[30px] h-[2px] my-[6px] block bg-black dark:bg-white"
                ></span>
            </button>

            <div
                className={`fixed top-0 right-0 h-screen w-64 bg-white text-black transform ${isOpen ? 'translate-x-0' : 'translate-x-full'
                    } transition-transform duration-300 ease-in-out`}
            >
                <button
                    onClick={toggleDrawer}
                    className="absolute top-4 left-4 p-2 bg-red-600 text-black rounded-md"
                >
                    <img className='w-6' src='images/cta/close.svg' />
                </button>

                <nav className="mt-16">
                    <ul className='border-b-1'>
                        <li className="p-3"><Link className='text-base hover:text-primary text-body-color' href="/about">About</Link></li>
                        <li className="p-3"><Link className='text-base hover:text-primary text-body-color' href="/products">Products</Link></li>
                        <li className="p-3"><Link className='text-base hover:text-primary text-body-color' href="/faqs">FAQs</Link></li>
                        <li className="p-3"><Link className='text-base hover:text-primary text-body-color' href="/reviews">Reviews</Link></li>
                        <li className="p-3"><Link className='text-base hover:text-primary text-body-color' href="/contact-us">Contact</Link></li>
                        <li>
                            <PanelGroup accordion defaultActiveKey={1}>
                                <Panel header="Calculators" eventKey={1} id="panel1">
                                    <div className='flex flex-col gap-3'>
                                        <Link className='text-base hover:text-primary text-body-color' href="/auto-loan-emi-calculator"><span className='p-3'>Auto Loan Calculator</span></Link>
                                        <Link className='text-base hover:text-primary text-body-color' href="/personal-loan-emi-calculator"><span className='p-3'>Personal Loan Calculator</span></Link>
                                        <Link className='text-base hover:text-primary text-body-color' href="/mutual-fund-calculator"><span className='p-3'>Mutual Find Calculator</span></Link>
                                        <Link className='text-base hover:text-primary text-body-color' href="/sip-calculator"><span className='p-3'>SIP Calculator</span></Link>
                                    </div>
                                </Panel>
                            </PanelGroup>
                        </li>
                        <li className="p-3">
                            <div className='flex flex-col gap-3'>
                                <button className="px-3 py-1.5 flex gap-2 items-center rounded-xl outline outline-2">
                                    <div className="w-8">
                                        <img className="h-full w-full" src="https://www.svgrepo.com/show/394180/google-play.svg" />
                                    </div>
                                    <div>
                                        <div className="text-sm font-extrabold hidden md:block">Download on the</div>
                                        <div className="md:text-xl text-md">Google Play</div>
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
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Drawer;





