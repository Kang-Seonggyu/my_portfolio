import st from './scroll-down.module.css';
import Image from 'next/image';

interface scrollDownProps {
  posit: string;
}

interface Style {
  position: 'fixed' | 'absolute';
  top: string;
}

export default function scrollDown({ posit }: scrollDownProps) {
  const style: Style = { position: 'fixed', top: '86vh' };

  if (posit === 'fixed') {
    style.position = 'fixed';
    style.top = '86vh';
  } else {
    style.position = 'absolute';
    style.top = 'calc(86vh + 400px)';
  }

  return (
    <div className={st.arrow_container} style={style}>
      <div className={st.arrow}>
        <Image width={80} height={50} src="/icon/arrow-down.png" alt="" />
      </div>

      <div className={st.arrow}>
        <Image width={80} height={50} src="/icon/arrow-down.png" alt="" />
      </div>
    </div>
  );
}
