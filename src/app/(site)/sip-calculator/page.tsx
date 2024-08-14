import { Metadata } from "next";
import Breadcrumb from "@/components/Common/Breadcrumb"; 
import SIPCalculator from "@/components/Calculators/SIPCalculator";

export const metadata: Metadata = {
  title:
    "SIP Calculator | GetPaisa.com",
  description: "SIP Calculator | GetPaisa.com",
};
const page = () => {
  return (
    <div>
        <Breadcrumb pageName={"SIP Calculator"}/>
        <SIPCalculator/>
    </div>
  )
}

export default page