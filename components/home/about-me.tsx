import Image from 'next/image';
import st from './about-me.module.css';

export default function AboutMe() {
  // prettier-ignore
  const myInfo = [
    { type:'span',key: '이름', value: '강성규', img: 'icons/profile.svg' },
    { type:'span',key: '생년월일', value: '1994.12.11', img: 'icons/calendar.svg' },
    { type:'span',key: '주소지', value: '경북 포항시', img: 'icons/location.svg' },
    { type:'anchor', func: 'tel:', key: '연락처', value: '010-6558-5370', img: 'icons/call.svg' },
    { type:'anchor', func: 'mailto:', key: '이메일', value: 'sg5370@naver.com', img: 'icons/email.svg' },
    { type:'anchor', func: '', key: '깃허브', value: 'jokekim609@gmail.com', img: 'icons/github.svg' },
  ];
  return (
    <section>
      <h2 style={{ flex: '1' }}>About Me</h2>
      <div className={st.container}>
        {myInfo.map((info) => {
          const { key, value, img, type, func } = info;
          return (
            <div className={st.info} key={key}>
              <Image src={img} alt="" width={30} height={30} />
              <p>
                <span className={st.key}>
                  {key.split('').map((e, i) => (
                    <b key={i}>{e}</b>
                  ))}
                </span>
                {type === 'anchor' ? (
                  <a href={`${func}${value}`} target="_blank">
                    {value}
                  </a>
                ) : (
                  <span>{value}</span>
                )}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
