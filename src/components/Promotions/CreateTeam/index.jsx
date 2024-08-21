import React from 'react';

const  CreateTeam = () => {
    return (
      <section className="h-auto bg-[#222222] md:px-[6rem] px-[1rem] py-[3rem] ">
          <div className="bg-[#FFF400] md:w-1/3 w-auto pl-16 transform skew-x-45">
              <h3 className='text-black capitalize text-[31px] italic font-bold'>umumiy qoidalar</h3>
          </div>

          <div className="xl:flex block items-center justify-center">
              <div className='flex flex-wrap mt-[2rem] justify-center items-center'>
                  <div className="flex flex-col flex-wrap justify-center items-center">

                      <h2 className=' uppercase'>jamoa yig&apos;ing</h2>
                      <p className=''>100 millionlik byudjetdan
                          foydalaning va chempionatning eng yaxshifutbolchilaridan iborat jamoani to&apos;plang</p>
                  </div>

                  <div className="relative sm:w-[430px] sm:h-[430px] w-[230px] h-[230px]">
                      <img className="absolute left-1/2 top-0 sm:w-auto sm:h-auto w-[120px] h-[120px]  transform -translate-x-1/2"
                           src='/images/promotion-3.png' />
                      <img className="absolute left-1/2 bottom-0 sm:w-auto sm:h-auto w-[120px] h-[120px] transform -translate-x-1/2"
                           src='/images/promotion-4.png' />
                      <img className="absolute top-1/2 left-0 sm:w-auto sm:h-auto w-[120px] h-[120px] transform -translate-y-1/2"
                           src='/images/promotion-5.png' />
                      <img className="absolute top-1/2 right-0 sm:w-auto sm:h-auto w-[120px] h-[120px] transform -translate-y-1/2"
                           src='/images/promotion-6.png' />
                  </div>
              </div>

              <div className="flex justify-center items-center">
                  <img className="2xl:max-w-[865px] mx-auto 2xl:max-h-[648px] lg:max-w-[600px] lg:max-h-[448px] max-w-[400px] max-h-[248px] w-auto h-auto"
                       src="/images/promotion-1.png" />
              </div>
          </div>
      </section>
    )
}

export default CreateTeam