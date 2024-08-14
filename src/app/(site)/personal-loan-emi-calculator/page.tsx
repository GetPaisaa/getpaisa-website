import { Metadata } from "next";
import Breadcrumb from "@/components/Common/Breadcrumb";
import LoanCalculator from "@/components/Calculators/LoanEmi";

export const metadata: Metadata = {
  title:
    "Personal Loan EMI Calculator | GetPaisa.com",
  description: "Personal Loan EMI Calculator | GetPaisa.com",
};
const page = () => {
  return (
    <div>
        <Breadcrumb pageName={"Personal Loan EMI Calculator"}/>
        <LoanCalculator/>
    </div>
  )
}

export default page