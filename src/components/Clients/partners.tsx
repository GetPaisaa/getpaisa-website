import SectionTitle from "../Common/SectionTitle";

const Partners = () => {
  return (
    <section className="py-8 bg-gray-50 dark:bg-gray-900 md:py-[40px] md:pb-17">
      <div className="container px-4">
        <div className="flex justify-center">
          <SectionTitle
            subtitle="Partners"
            title="Partners & Affiliates"
            paragraph=" "
            width="640px"
            center
          />
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16 mt-8">
          <div className="flex flex-col items-center gap-8 md:gap-14">
            <img 
              src="/images1/logo/airpay_money_Logo.png" 
              alt="Airpay Money Logo" 
              className="w-32 md:w-40 h-auto object-contain"
            />
            <div className="flex gap-4">
              <a 
                href="https://play.google.com/store/apps/details?id=com.finmapp.fininfinity" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <img 
                  src="/images1/logo/playstore.png" 
                  alt="Get Paisa on Play Store" 
                  className="h-10 md:h-11 w-auto"
                />
              </a>
              <a 
                href="https://apps.apple.com/in/app/airpay-money/id1579880311" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <img 
                  src="/images1/logo/appstore.png" 
                  alt="Get Paisa on App Store" 
                  className="h-10 md:h-12 w-auto"
                />
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center gap-8">
            <img 
              src="/images1/logo/mobilepe.png" 
              alt="MobilePe Logo" 
              className="w-32 md:w-40 h-auto object-contain"
            />
            <div className="flex gap-4">
              <a 
                href="https://play.google.com/store/apps/details?id=com.mobilepe.android" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <img 
                  src="/images1/logo/playstore.png" 
                  alt="Get Paisa on Play Store" 
                  className="h-10 md:h-12 w-auto"
                />
              </a>
              <a 
                href="https://apps.apple.com/in/app/mobilepe/id1521706219" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <img 
                  src="/images1/logo/appstore.png" 
                  alt="Get Paisa on App Store" 
                  className="h-10 md:h-12 w-auto"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
