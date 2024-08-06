'use client';

import { useEffect, useRef, useState } from 'react';
import st from './page.module.css';
import AnimatedRender from '@/components/common/animated-render';
import ScrollDown from '@/components/common/scroll-down';
import { Audiowide } from 'next/font/google';
import { Orbitron } from 'next/font/google';
import Hatch from '@/components/home/hatch';
import { Skills } from '@/components/home/skills';
import AboutMe from '@/components/home/about-me';
import { Projects } from '@/components/home/projects';

const audiowide = Audiowide({
  subsets: ['latin'],
  weight: '400',
});

const orbit = Orbitron({
  subsets: ['latin'],
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
  const moveX = Math.round(scrollY / 8);

  const scrollDownPosit = scrollY >= 400 ? 'absolute' : 'fixed';

  return (
    <main ref={ref} className={`${st.main} ${orbit.className}`}>
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
        <div className={st.contents_box}>
          <AnimatedRender threshold={0.05}>
            <AboutMe></AboutMe>
          </AnimatedRender>

          <AnimatedRender threshold={0.05}>
            <Skills></Skills>
          </AnimatedRender>

          <AnimatedRender threshold={0.05}>
            <Projects></Projects>
          </AnimatedRender>
        </div>
        <div className="spacer" style={{ width: '100%', height: '90vh' }}></div>
      </div>
    </main>
  );
}
