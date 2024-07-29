'use client';

import { useEffect, useRef, useState } from 'react';
import st from './page.module.css';
import AnimatedRender from '@/components/common/animated-render';
import LidButton from '@/components/common/lid-button';
import ScrollDown from '@/components/common/scroll-down';
import { Audiowide } from 'next/font/google';
import Hatch from '@/components/home/hatch';

const audiowide = Audiowide({
  subsets: ['latin'],
  weight: '400',
});

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    handleScroll();

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // 스크롤 700px 움직이면 visual text 사라지도록
  const moveX = Math.round(scrollY / 7);

  const scrollDownPosit = scrollY >= 400 ? 'absolute' : 'fixed';

  return (
    <main ref={ref} className={st.main}>
      <div className={st.visual}>
        <div id={st.stars}></div>
        <div id={st.stars2}></div>
        <div id={st.stars3}></div>

        <div className={`${st.visual_text} ${audiowide.className}`}>
          <p style={{ transform: `translateX(${moveX}vw)` }}>kang seong gyu</p>
          <p
            style={{ transform: `translateX(-${moveX}vw)`, textAlign: 'right' }}
          >
            frontend
          </p>
        </div>
      </div>
      <ScrollDown posit={scrollDownPosit}></ScrollDown>

      <div className={st.contents_spacer}></div>
      <div className={st.contents}>
        <Hatch></Hatch>

        <div className="spacer" style={{ width: '100%', height: '30vh' }}>
          <LidButton
            closeText="Close Me"
            openText="Open Up"
            color="red"
          ></LidButton>
          <LidButton closeText="Green" openText="" color="green"></LidButton>
          <LidButton
            closeText="Blue One"
            openText="This is"
            color="blue"
          ></LidButton>
        </div>
        <AnimatedRender>
          <div style={{ width: '300px', height: '200px', background: 'green' }}>
            애니메이션 렌더러
          </div>
        </AnimatedRender>
        <AnimatedRender>
          <div style={{ width: '300px', height: '200px', background: 'red' }}>
            애니메이션 렌더러
          </div>
        </AnimatedRender>
        <div className="spacer" style={{ width: '100%', height: '90vh' }}></div>
      </div>
    </main>
  );
}
