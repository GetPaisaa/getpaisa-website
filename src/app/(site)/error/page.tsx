import Breadcrumb from "@/components/Common/Breadcrumb";
import NotFound from "@/components/NotFound";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 | GetPaisa.com",
};

const ErrorPage = () => {
  return (
    <>
      <Breadcrumb pageName="404 - Not Found" />

      <NotFound />
    </>
  );
};

export default ErrorPage;
