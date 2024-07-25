'use client';

import st from './lid-button.module.css';

type Color = 'red' | 'green' | 'blue' | 'yellow';
interface LidButtonProps {
  closeText: string;
  openText?: string;
  color: Color;
  onClick?: () => void;
}

export default function LidButton({
  closeText,
  openText,
  color,
  onClick,
}: LidButtonProps) {
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      console.log('Default Click Action');
    }
  };

  return (
    <div className={st.lidWrap}>
      <a onClick={handleClick} className={st[color]}>
        {closeText}
        <span>{openText}</span>
      </a>
    </div>
  );
}
