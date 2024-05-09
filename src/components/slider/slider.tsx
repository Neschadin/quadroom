'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';

import slide1 from '@/src/assets/slides/slide1.png';
import slide2 from '@/src/assets/slides/slide2.png';
import slide3 from '@/src/assets/slides/slide3.png';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './styles.css';

export const Slider = ({ initSlide }: { initSlide: number }) => {
  return (
    <Swiper
      initialSlide={initSlide}
      modules={[Pagination, Navigation, Mousewheel]}
      navigation
      pagination={{ clickable: true }}
      mousewheel={true}
      loop
    >
      {[slide1, slide2, slide3, slide1, slide2, slide3].map((slide, i) => (
        <SwiperSlide key={i}>
          <Image src={slide} alt={'slide_' + i} placeholder='blur' />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
