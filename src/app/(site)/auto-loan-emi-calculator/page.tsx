import { Metadata } from "next";
import Breadcrumb from "@/components/Common/Breadcrumb"; 
import AutoLoanEmi from "@/components/Calculators/AutoLoanEmi";

export const metadata: Metadata = {
  title:
    "Auto Loan EMI Calculator | GetPaisa.com",
  description: "Auto Loan EMI Calculator | GetPaisa.com",
};
const page = () => {
  return (
    <div>
        <Breadcrumb pageName={"Auto Loan EMI Calculator"}/>
        <AutoLoanEmi/>
    </div>
  )
}

export default page