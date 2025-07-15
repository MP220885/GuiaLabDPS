import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import styles from './PlanetSlider.module.css';

const PlanetSlider = ({ planets, onSelect }) => {
  return (
    <div className={styles.sliderContainer}>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
      >
        {planets.map((planet) => (
          <SwiperSlide key={planet.id}>
            <div className={styles.card} onClick={() => onSelect(planet)}>
              <img src={planet.image} alt={planet.name} />
              <h3>{planet.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PlanetSlider;
