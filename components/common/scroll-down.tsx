import st from './scroll-down.module.css';
import Image from 'next/image';

interface scrollDownProps {
  posit: string;
}

export default function scrollDown({ posit }: scrollDownProps) {
  let fixFlag = true;
  if (posit === 'fixed') {
    fixFlag = true;
  } else {
    fixFlag = false;
  }

  return (
    <div className={`${st.arrow_container} ${fixFlag ? st.fix : st.absol}`}>
      <div className={st.arrow}>
        <Image width={80} height={50} src="/icon/arrow-down.png" alt="" />
      </div>

      <div className={st.arrow}>
        <Image width={80} height={50} src="/icon/arrow-down.png" alt="" />
      </div>
    </div>
  );
}
