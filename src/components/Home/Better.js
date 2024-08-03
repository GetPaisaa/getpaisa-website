import React from 'react'

const Better = () => {
  return (
    <div>
      <section className="pt-[100px]">
        <div className="container">
          <div className="flex justify-center -mx-4">
            <div className="w-full px-4">
              <div
                className="max-w-[510px] mx-auto text-center mb-[70px]"
              >
                <h2
                  className="font-normal text-3xl sm:text-4xl text-black dark:text-white mb-5"
                >
                  Why we are Better <br /> over Others
                </h2>
                <p className="font-normal text-base text-body-color">
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration in some form.
                </p>
              </div>


              <div className="container">
                <div className="flex flex-wrap items-center -mx-4">
                  <div className="w-full lg:w-1/2 px-4">
                    <div
                      className="text-center mb-14 lg:mb-0 border-e-gray-500"
                    >
                      <img
                        src="images/hero/mobile.png"
                        alt="image"
                        className="max-full"
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-1/2 px-4">
                    <div className='flex flex-col gap-4'>
                      <div className='w-full h-32 shadow-sm bg-[#E4F2FE] rounded-xl p-3 relative overflow-hidden cursor-pointer hover:scale-105 transition-all'>
                        <img className='absolute left-0 opacity-70 -bottom-1 w-24' src='images/hero/dots.png' />
                        <img className='absolute -right-3 opacity-75 rotate-180 -top-1 w-24' src='images/hero/dots.png' />
                        <img className='absolute right-3 opacity-75 -bottom-1 w-24' src='images/hero/dots.png' />
                        <div className='flex  flex-col items-start gap-3'>
                          <div className='flex gap-3 items-center'> 
                            <img className='w-7' src='images/icons/check.svg'/>
                            <h6 className='text-xl font-normal'>Fast Approval</h6>
                          </div>
                          <span className='ml-1'>Streamlined procedures and automation reduce the time needed
                            for loan approval</span>
                        </div>
                      </div>

                      <div className='w-full h-32 shadow-sm bg-[#E4F2FE] rounded-xl p-3 relative overflow-hidden cursor-pointer hover:scale-105 transition-all'>
                        <img className='absolute left-0 opacity-75 -bottom-1 w-24' src='images/hero/dots.png' />
                        <img className='absolute -right-3 opacity-75 rotate-180 -top-1 w-24' src='images/hero/dots.png' />
                        <img className='absolute right-3 opacity-75 -bottom-1 w-24' src='images/hero/dots.png' />
                        <div className='flex  flex-col items-start gap-3'>
                          <div className='flex gap-3 items-center'> 
                            <img className='w-7' src='images/icons/check.svg'/>
                            <h6 className='text-xl font-normal flex gap-1'>Transparent Terms <span className='hidden md:block'>and Conditions</span></h6>
                          </div>
                          <span className='ml-1'>Clear and straightforward loan terms with no hidden fees, 
                          ensuring complete transparency.</span>
                        </div>
                      </div>


                      <div className='w-full h-32 shadow-sm bg-[#E4F2FE] rounded-xl p-3 relative overflow-hidden cursor-pointer hover:scale-105 transition-all'>
                        <img className='absolute left-0 opacity-75 -bottom-1 w-24' src='images/hero/dots.png' />
                        <img className='absolute -right-3 opacity-75 rotate-180 -top-1 w-24' src='images/hero/dots.png' />
                        <img className='absolute right-3 opacity-75 -bottom-1 w-24' src='images/hero/dots.png' />
                        <div className='flex  flex-col items-start gap-3'>
                          <div className='flex gap-3 items-center'> 
                            <img className='w-7' src='images/icons/check.svg'/>
                            <h6 className='text-xl font-normal'>Competitive Interest Rates</h6>
                          </div>
                          <span className='ml-1'>Attractive rates that make borrowing affordable for a wide 
                          range of customers.</span>
                        </div>
                      </div>


                      <div className='w-full h-32 shadow-sm bg-[#E4F2FE] rounded-xl p-3 relative overflow-hidden cursor-pointer hover:scale-105 transition-all'>
                        <img className='absolute left-0 opacity-75 -bottom-1 w-24' src='images/hero/dots.png' />
                        <img className='absolute -right-3 opacity-75 rotate-180 -top-1 w-24' src='images/hero/dots.png' />
                        <img className='absolute right-3 opacity-75 -bottom-1 w-24' src='images/hero/dots.png' />
                        <div className='flex  flex-col items-start gap-3'>
                          <div className='flex gap-3 items-center'> 
                            <img className='w-7' src='images/icons/check.svg'/>
                            <h6 className='text-xl font-normal'>Zero paper work</h6>
                          </div>
                          <span className='ml-1'>At getPaisa there is zero paper work. everything approve digitally.</span>
                        </div>
                      </div>

                    </div>
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

export default Better