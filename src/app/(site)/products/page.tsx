import { Metadata } from "next";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Pricing from "@/components/Pricing";

export const metadata: Metadata = {
  title:
    "Products | GetPaisa.com",
  description: "Products | GetPaisa.com",
};
const page = () => {
  return (
    <div>
        <Breadcrumb pageName={"Products"}/>
        <Pricing/>
    </div>
  )
}

export default page