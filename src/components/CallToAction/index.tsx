import Link from "next/link";

const CallToAction = () => {
  return (
    <section className="relative z-10 overflow-hidden bg-primary py-20 lg:py-[1 5px]">
      <div className="container mx-auto">
        <div className="relative overflow-hidden">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full lg:w-1/2 px-4">
              <div className="px-2 w-full sm:px-4 -mt-9 lg:px-2 xl:px-4">
                <div className={`relative mb-4 sm:mb-8 w-full lg:h-[350px] xl:h-[350px] `}>
                  <img src="/images1/misc/instant.gif"/>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 px-4">
              <div className="mx-auto max-w-[570px] text-center">
                <h2 className="mb-2.5 text-xl text-center font-bold text-white md:text-[32px] md:leading-[1.44]">
                  <span>We make Instant Payment Transfer</span>
                   
                </h2>
                <p className="mx-auto mb-6 max-w-[515px] text-base leading-[1.5] text-white">
                      Our platform ensures that your payments are processed instantly. No more waiting for days to see your money where it needs to be. We leverage cutting-edge technology to provide lightning-fast transactions.
                </p>
                <Link
                  href="/"
                  className="inline-block rounded-md border border-transparent bg-pbutton px-7 py-3 text-base font-medium focus:text-white hover:text-white text-white transition hover:bg-pbutton/80"
                >
                  Download App
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <span className="absolute left-0 top-0">
          <svg
            width="495"
            height="470"
            viewBox="0 0 495 470"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="55"
              cy="442"
              r="138"
              stroke="white"
              strokeOpacity="0.04"
              strokeWidth="50"
            />
            <circle
              cx="446"
              r="39"
              stroke="white"
              strokeOpacity="0.04"
              strokeWidth="20"
            />
            <path
              d="M245.406 137.609L233.985 94.9852L276.609 106.406L245.406 137.609Z"
              stroke="white"
              strokeOpacity="0.08"
              strokeWidth="12"
            />
          </svg>
        </span>
        <span className="absolute bottom-0 right-0">
          <svg
            width="493"
            height="470"
            viewBox="0 0 493 470"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="462"
              cy="5"
              r="138"
              stroke="white"
              strokeOpacity="0.04"
              strokeWidth="50"
            />
            <circle
              cx="49"
              cy="470"
              r="39"
              stroke="white"
              strokeOpacity="0.04"
              strokeWidth="20"
            />
            <path
              d="M222.393 226.701L272.808 213.192L259.299 263.607L222.393 226.701Z"
              stroke="white"
              strokeOpacity="0.06"
              strokeWidth="13"
            />
          </svg>
        </span>
      </div>
    </section>
  );
};

export default CallToAction;
