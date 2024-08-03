import Footer from '@/components/Footer'
import Header from '@/components/Header' 
import Faqs from '@/components/Home/Faqs'

import React from 'react'

export const metadata = {
  title: "GetPaisa - FAQs",
  description: "GetPaisa - FAQs",
};

const page = () => {
  return (
    <div>
        <Header/>
          <Faqs/>
        <Footer/>
    </div>
  )
}

export default page