'use client';

import React, { useEffect, useRef, useState } from 'react';
import st from './animated-render.module.css';

interface AnimatedRenderProps {
  style?: Object;
  children: React.ReactNode;
  threshold?: number
}

export default function AnimatedRender({
  style,
  children,
  threshold
}: AnimatedRenderProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: threshold || 0.3 }
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
      style={style}
    >
      {children}
    </div>
  );
}
