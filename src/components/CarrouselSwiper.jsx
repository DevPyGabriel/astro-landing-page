// Swiper integration for Astro
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const cakeImages = [
  'Capy.webp',
  'Siren.webp',
  'Stitch.webp',
  'Cherry.webp',
  'Funny.webp',
];

export default function CarrouselSwiper() {
  return (
    <section id="pasteles">
      <h2 className="pt-4 pb-3 pl-2 text-2xl font-bold">Pasteles Personalizados</h2>
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {cakeImages.map((image, idx) => (
          <SwiperSlide key={idx}>
            <img
              src={image}
              alt="Cake Image"
              className="rounded-4xl h-[328px] w-[328px] shadow-xl select-none"
              draggable="false"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
