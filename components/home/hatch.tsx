'use client';

import React, { useEffect, useRef, useState } from 'react';
import st from './hatch.module.css';

export default function Hatch() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const currentRef = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div ref={ref} className={`${st.hatch}`}>
      <p
        className={`${st.door} ${st.door_left} ${
          isVisible ? st.left_open : st.close
        }`}
      ></p>
      <p
        className={`${st.door} ${st.door_right} ${
          isVisible ? st.right_open : st.close
        }`}
      ></p>

      <div
        className={`${st.light} ${isVisible ? st.light_on : st.light_off}`}
      ></div>

      <div className={st.frame}></div>
    </div>
  );
}
