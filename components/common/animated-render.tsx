'use client';

import React, { useEffect, useRef, useState } from 'react';
import st from './animated-render.module.css';

interface AnimatedRenderProps {
  children: React.ReactNode;
}

export default function AnimatedRender({ children }: AnimatedRenderProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.55 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`${st.container} ${isVisible ? st.visible : st.hidden}`}
    >
      {children}
    </div>
  );
}
