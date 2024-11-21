import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Contact | GetPaisa.com",
  description: "GetPaisa.com",
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb pageName="Contact" />
      <Contact />
    </>
  );
};

export default ContactPage;
