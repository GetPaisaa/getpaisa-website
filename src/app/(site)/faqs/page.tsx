import { Metadata } from "next";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Faq from "@/components/Faq";

export const metadata: Metadata = {
  title:
    "FAQs | GetPaisa.com",
  description: "FAQs | GetPaisa.com",
};
const page = () => {
  return (
    <div>
        <Breadcrumb pageName={"FAQs"}/>
        <Faq/>
    </div>
  )
}

export default page