import Image from "next/image";

const SecuritySection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between p-6 bg-gray-100">
      <div className="w-full md:w-1/2 space-y-6 text-center md:text-left mb-8 md:mb-0">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          Safety at your fingertips!
        </h1>
        <p className="text-base md:text-lg text-gray-600">
          Stay protected with our 256-bit, safe, iso certified & secure system,
          always!
        </p>
        <p className="text-base md:text-lg text-gray-800">
          We are an ISO certified company
        </p>
        <div className="flex flex-row justify-center md:justify-start items-center space-x-9">
          <div className="flex flex-col items-center">
            <a href="https://getpaisa-website.s3.ap-south-1.amazonaws.com/iso-certificate/PROPKAR+SECURITIES++ISO+9001+(QMS)+FINAL+SOFT+COPY.pdf">
              <Image
                src={"/images1/logo/iso-9001.png"}
                alt="ISO 9001 certification logo"
                width={120}
                height={120}
              />
            </a>
          </div>
          <div className="flex flex-col items-center">
            <a href="https://getpaisa-website.s3.ap-south-1.amazonaws.com/iso-certificate/PROPKAR+SECURITIES++ISO+27001+(ISMS)+FINAL+SOFT+COPY.pdf">
              <Image
                src={"/images1/logo/iso-27001.png"}
                alt="ISO 27001:2024 certification logo"
                width={120}
                height={120}
              />
            </a>
          </div>
          <div className="flex flex-col items-center">
            <a href="https://getpaisa-website.s3.ap-south-1.amazonaws.com/iso-certificate/PROPKAR+SECURITIES+ISO+22301+FINAL+SOFT+COPY.pdf">
              <Image
                src={"/images1/logo/iso-22301.png"}
                alt="ISO 22301 certification logo"
                width={120}
                height={120}
              />
            </a>
          </div>
        </div>

        <a className="inline-block px-6 py-3 bg-[#4AB2BF] text-white rounded-lg hover:bg-[#5CC5D2] transition-colors">
          Download app
        </a>
      </div>
      <div className="w-full md:w-1/3">
        <Image
          src="https://getpaisa-website.s3.ap-south-1.amazonaws.com/iso.png"
          alt="Security Lock Illustration"
          width={400}
          height={400}
          className="w-full h-auto"
        />
      </div>
    </section>
  );
};

export default SecuritySection;
