import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Customers from '@/components/Home/Customer'
import React from 'react'

const page = () => {
    return (
        <div>
            <Header />
            <div className='py-10'>
            <Customers/>
            </div>
            <Footer />

        </div>
    )
}

export default page