import Image from "next/image";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Banner from "@/components/Home/Banner";
import Products from "@/components/Home/Products";
import Payment from "@/components/Home/Payment";
import Howwork from "@/components/Home/Howwork";
import AppDownload from "@/components/Home/AppDownload";
import Better from "@/components/Home/Better";
import Banking from "@/components/Home/Banking";
import Contact from "@/components/Home/Contact";
import Customer from "@/components/Home/Customer";
import Faqs from "@/components/Home/Faqs";
import LoanCalculator from "@/components/commons/LoanCalculator";

export default function Home() {
  return (
    <>
      <Header/>
       <Banner/>
       <Products/>
       <Payment/>
       <LoanCalculator/>
       <Howwork/>
       <AppDownload/>
       <Better/>
        <Customer/>
        <Faqs/>
       <Banking/>
       <Contact/>
      <Footer/>
    </>
  );
}
