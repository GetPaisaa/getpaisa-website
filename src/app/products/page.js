import Breadcrumbs from '@/components/commons/Breadcrumbs'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Products from '@/components/Home/Products'
import React from 'react'

const page = () => {
  return (
    <div>
        <Header/>
            <Products/>
        <Footer/>
    </div>
  )
}

export default page