import Breadcrumbs from '@/components/commons/Breadcrumbs'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Contact from '@/components/Home/Contact'
import React from 'react'


export const metadata = {
  title: "GetPaisa - Contact Us",
  description: "GetPaisa - Contact Us",
};

const page = () => {
  return (
    <div>
      <Header />


      <Breadcrumbs title="Contact Us" />

      <Contact />


      <div className="container">
        <div className="flex flex-wrap justify-center flex-col items-center -mx-4">

          <div className='text-center mb-4'>
            <h3 className="font-normal text-2xl text-black dark:text-white mb-5">
              Address
            </h3>

            <p className="font-normal flex flex-col gap-2 text-base leading-relaxed text-body-color mb-8">
              <span>113, 3rd floor, Priya enclave ,Karkardooma, delhi, 110092</span>

            </p>
          </div>
          <hr/>

          <div className='text-center mb-4'>
            <h3 className="font-normal text-2xl text-black dark:text-white mb-5">
              Email Us
            </h3>

            <p className="font-normal flex flex-col gap-2 text-base leading-relaxed text-body-color mb-8">
              <span><a href='emailto:info@propkar.com'>info@propkar.com</a></span>
              <span><a href='emailto:info@propkar.com'>career@propkar.com</a></span>
            </p>
          </div>
        </div>
      </div>


      <Footer />
    </div>
  )
}

export default page