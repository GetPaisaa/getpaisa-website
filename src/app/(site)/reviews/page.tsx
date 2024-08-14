import { Metadata } from "next";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Testimonials from "@/components/Testimonials";

export const metadata: Metadata = {
  title:
    "Testimonials | GetPaisa.com",
  description: "Testimonials | GetPaisa.com",
};
const page = () => {
  return (
    <div>
        <Breadcrumb pageName={"Testimonials"}/>
        <Testimonials/>
    </div>
  )
}

export default page