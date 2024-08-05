import React from 'react'

const AppDownload = () => {
  return (
    <div>
      <section id="cta" className="pt-14">
        <div className="container">
          <div
            // className="bg-gradient-to-l from-gradient-1 to-gradient-2 rounded-[20px] px-7 sm:px-10 md:px-16 lg:px-14 xl:px-16 overflow-hidden"
            className="bg-[#4535C1] shadow-md rounded-tl-[70px] rounded-br-[70px] rounded-2xl px-7 sm:px-10 md:px-16 lg:px-14 xl:px-16 overflow-hidden"

          >
            <div className="flex flex-wrap items-end -mx-4">
              <div className="w-full lg:w-1/2 px-4">
                <div className="max-w-[400px] py-16">
                  <span
                    className="font-normal text-base text-[#FF8225] block mb-2"
                  >
                    Download Now!
                  </span>
                  <h2
                    className="font-normal text-3xl sm:text-4xl leading-tight text-white mb-7"
                  >
                    Download GetPaisa
                    application.
                  </h2>
                  <p
                    className="font-normal text-base leading-relaxed text-white mb-10"
                  >
                    Download GetPaisa app for IOS &
                    Android to manage your finacial needs.
                  </p>

                  <div className='flex flex-row gap-4 text-white items-center'>
                    <img className='w-36 rounded-md' src='https://www.fibe.in/_next/image/?url=%2Fappsflyer.png&w=256&q=75' />

                    <div className='flex flex-col gap-3'>
                      <button className="px-3 py-1.5 flex gap-2 items-center group rounded-xl outline outline-2">
                        <div className="w-10">
                        <img className="h-full w-full transition-all" src="images/brands/play-store.svg" />
                        </div>
                        <div>
                          <div className="text-sm font-normal hidden md:block">Download on the</div>
                          <div className="md:text-xl text-md text-right group-hover:text-[#F9B160]">Google Play</div>
                        </div>
                      </button>

                      <button className="px-3 py-1.5 flex gap-2 items-center group rounded-xl outline outline-2">
                        <div className="w-10">
                          <img className="h-full w-full group-hover:" src="images/brands/apple-white.svg" />
                        </div>
                        <div>
                          <div className="text-sm font-normal hidden md:block">Download on the</div>
                          <div className="md:text-xl text-md text-right group-hover:text-[#F9B160]">App Store</div>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative w-full lg:w-1/2 px-4">
                <div
                  className="w-full flex justify-end items-end gap-3"
                >
                  <div className=" w-[250px]">
                    <img
                      src="images/cta/cta-image-3.png"
                      alt="image"
                      className="rounded-t-2xl relative z-10 drop-shadow-image"
                    />
                    
                  </div>
                  <div className="w-[250px]">
                    <img
                      src="images/cta/cta-image-4.png"
                      alt="image"
                      className="rounded-t-2xl relative z-0 drop-shadow-image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AppDownload