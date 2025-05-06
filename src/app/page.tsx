import About from "@/components/About"; 
import LoanCalculator from "@/components/Calculators/LoanEmi";
import CallToAction from "@/components/CallToAction";
import Clients from "@/components/Clients";
import Partners from "@/components/Clients/partners";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Faq from "@/components/Faq";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import SecuritySection from "@/components/Iso";
import Upcoming from "@/components/Upcoming";
import Testimonials from "@/components/Testimonials"; 
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Unleashing the Power of Your Financial Future - GetPaisa.com",
  description: "Unleashing the Power of Your Financial Future - GetPaisa.com",
};

export default function Home() {
  
  return (
    <main>
      <ScrollUp />
      <Hero />
      <About />
      <CallToAction />
      <Pricing />
      <Upcoming/>
      <LoanCalculator/>
      <Testimonials />
      <Clients />
      <Partners/>
      <Faq/>
      <SecuritySection/>
      <Contact />
    </main>
  );
}
