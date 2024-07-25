import st from './scroll-down.module.css';
import Image from 'next/image';

interface scrollDownProps {
  style?: Object;
}

export default function scrollDown({ style }: scrollDownProps) {
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
