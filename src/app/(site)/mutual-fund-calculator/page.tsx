import { Metadata } from "next";
import Breadcrumb from "@/components/Common/Breadcrumb"; 
import MututalFund from "@/components/Calculators/MututalFund";

export const metadata: Metadata = {
  title:
    "Mututal Fund Calculator | GetPaisa.com",
  description: "Mututal Fund Calculator | GetPaisa.com",
};
const page = () => {
  return (
    <div>
        <Breadcrumb pageName={"Mututal Fund Calculator"}/>
        <MututalFund/>
    </div>
  )
}

export default page