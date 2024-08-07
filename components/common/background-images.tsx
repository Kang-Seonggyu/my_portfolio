import st from './background-images.module.css';

export function Spaceship() {
  return <div className={`${st.bg} ${st.spaceship}`}></div>;
}

export function Saturn() {
  return <div className={`${st.bg} ${st.saturn}`}></div>;
}

export function Venus() {
  return <div className={`${st.bg} ${st.venus}`}></div>;
}

export function Neptune() {
  return <div className={`${st.bg} ${st.neptune}`}></div>;
}

export function Earth() {
  return <div className={`${st.bg} ${st.earth}`}></div>;
}

export function Astronaut() {
  return (
    <div className={st.an}>
      <div className={st.tank}></div>
      <div className={st.astro}>
        <div className={st.helmet}>
          <div className={st.glass}>
            <div className={st.shine}></div>
          </div>
        </div>
        <div className={st.dress}>
          <div className={st.c}>
            <div className={st.btn1}></div>
            <div className={st.btn2}></div>
            <div className={st.btn3}></div>
            <div className={st.btn4}></div>
          </div>
        </div>
        <div className={st.handl}>
          <div className={st.handl1}>
            <div className={st.glovel}>
              <div className={st.thumbl}></div>
              <div className={st.b2}></div>
            </div>
          </div>
        </div>
        <div className={st.handr}>
          <div className={st.handr1}>
            <div className={st.glover}>
              <div className={st.thumbr}></div>
              <div className={st.b1}></div>
            </div>
          </div>
        </div>
        <div className={st.legl}>
          <div className={st.bootl1}>
            <div className={st.bootl2}></div>
          </div>
        </div>
        <div className={st.legr}>
          <div className={st.bootr1}>
            <div className={st.bootr2}></div>
          </div>
        </div>
        <div className={st.pipe}>
          <div className={st.pipe2}>
            <div className={st.pipe3}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
