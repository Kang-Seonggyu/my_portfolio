import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import st from './carousel.module.css';
import { useRef } from 'react';

type images = {
  src: string;
  detail: string;
};

interface CarouselProps {
  data: images[];
}

export default function Carousel({ data }: CarouselProps) {
  const sliderRef = useRef<Slider>(null);
  const settings = {
    customPaging: (i: number) => <button>{i + 1}</button>,
    appendDots: (dots: any) => {
      return (
        <ul>
          <a
            className={st.slideButton}
            onClick={() => {
              sliderRef.current?.slickPrev();
            }}
          >
            ←
          </a>
          {dots}
          <a
            className={st.slideButton}
            onClick={() => sliderRef.current?.slickNext()}
          >
            →
          </a>
        </ul>
      );
    },
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
  };

  return (
    <div className={st.container}>
      <Slider ref={sliderRef} {...settings}>
        {data?.map((e, i) => (
          <div key={e.src} className={st.slide}>
            <Image
              src={e.src}
              alt=""
              width={660}
              height={400}
              quality={100}
              className={st.image}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
