import React, { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';
import  {FaStar} from "react-icons/fa6"
import { VscAccount } from "react-icons/vsc";

const Review = ()=>{

    return(
       <div className='my-12 px-14 lg:px-24'>
           <h2 className='text-3xl font-bold leading-snug text-blackflex flex flex-col items-center mt-5'>Our Customers</h2>
           <div>
               <Swiper
                   slidesPerView={1}
                   spaceBetween={30}
                   pagination={{
                       clickable: true,
                   }}
                   breakpoints={{
                       640: {
                           slidesPerView: 1,
                           spaceBetween: 20,
                       },
                       768: {
                           slidesPerView: 2,
                           spaceBetween: 40,
                       },
                       1024: {
                           slidesPerView: 3,
                           spaceBetween: 50,
                       },
                   }}
                   modules={[Pagination]}
                   className="mySwiper"
               >
                   <SwiperSlide  className='sh-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
                       <div className='sp-y-6'>
                           <div className='text-amber-600 flex gap-2'>
                               <FaStar/>
                               <FaStar/>
                               <FaStar/>
                           </div>
                           <div>
                               <p className='mb-7 mt-2'>
                                   Exceptional selection and easy navigation! Found all the titles I was looking for and more. Highly recommend
                               </p>
                               <div className="flex items-center">
                                   <VscAccount rounded className='w-10 mr-4' style={{ fontSize: '60px', marginBottom: '4px' }} />
                                   <div>
                                       <h5 className='text-lg font-medium'>Emily Johnson</h5>
                                       <p className="text-base">Literature Enthusiast</p>
                                   </div>
                               </div>
                           </div>
                       </div>
                   </SwiperSlide>
                   <SwiperSlide  className='sh-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
                       <div className='sp-y-6'>
                           <div className='text-amber-600 flex gap-2'>
                               <FaStar/>
                               <FaStar/>
                               <FaStar/>
                               <FaStar/>
                               <FaStar/>
                           </div>
                           <div>
                               <p className='mb-7 mt-2'>
                                   Sleek design and user-friendly interface make browsing a joy. Plus, lightning-fast delivery. A must for book lovers
                               </p>
                               <div className="flex items-center">
                                   <VscAccount rounded className='w-10 mr-4' style={{ fontSize: '60px', marginBottom: '4px' }} />
                                   <div>
                                       <h5 className='text-lg font-medium'>Michael Smith</h5>
                                       <p className="text-base">Bookworm Extraordinaire</p>
                                   </div>
                               </div>
                           </div>
                       </div>
                   </SwiperSlide>
                   <SwiperSlide  className='sh-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
                       <div className='sp-y-6'>
                           <div className='text-amber-600 flex gap-2'>
                               <FaStar/>
                               <FaStar/>
                               <FaStar/>
                               <FaStar/>
                           </div>
                           <div>
                               <p className='mb-7 mt-2'>
                                   Impressive range of genres and authors. Customer service is top-notch too. My go-to for all book purchases
                               </p>
                               <div className="flex items-center">
                                   <VscAccount rounded className='w-10 mr-4' style={{ fontSize: '60px', marginBottom: '4px' }} />
                                   <div>
                                       <h5 className='text-lg font-medium'>Sophia Martinez</h5>
                                       <p className="text-base">Fiction Fanatic</p>
                                   </div>
                               </div>
                           </div>
                       </div>
                   </SwiperSlide>
                   <SwiperSlide  className='sh-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
                       <div className='sp-y-6'>
                           <div className='text-amber-600 flex gap-2'>
                               <FaStar/>
                               <FaStar/>
                               <FaStar/>
                               <FaStar/>
                               <FaStar/>
                               <FaStar/>
                           </div>
                           <div>
                               <p className='mb-7 mt-2'>
                                   Love the personalized recommendations feature. Discovered some hidden gems I wouldn't have found otherwise. 5 stars!
                               </p>
                               <div className="flex items-center">
                                   <VscAccount rounded className='w-10 mr-4' style={{ fontSize: '60px', marginBottom: '4px' }} />
                                   <div>
                                       <h5 className='text-lg font-medium'>Ethan Brown</h5>
                                       <p className="text-base">Literary Connoisseur</p>
                                   </div>
                               </div>
                           </div>
                       </div>
                   </SwiperSlide>
                   <SwiperSlide  className='sh-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
                       <div className='sp-y-6'>
                           <div className='text-amber-600 flex gap-2'>
                               <FaStar/>
                               <FaStar/>
                               <FaStar/>
                               <FaStar/>
                           </div>
                           <div>
                               <p className='mb-7 mt-2'>
                                   Effortless ordering process and secure payment options. Plus, the app keeps me updated on new releases.
                               </p>
                               <div className="flex items-center">
                                   <VscAccount rounded className='w-10 mr-4' style={{ fontSize: '60px', marginBottom: '4px' }} />
                                   <div>
                                       <h5 className='text-lg font-medium'>Olivia Wilson</h5>
                                       <p className="text-base">Page Turner Pro</p>
                                   </div>
                               </div>
                           </div>
                       </div>
                   </SwiperSlide>
               </Swiper>
           </div>
       </div>
    )
}
export default Review