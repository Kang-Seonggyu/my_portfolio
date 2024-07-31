import Image from 'next/image';
import st from './skills.module.css';

export function Skills() {
  return (
    <section className={st.section}>
      <h2>Skills</h2>
      <div className={st.container}>
        {/* Frontend Skills */}
        <div className={st.skill_box}>
          <h3>Frontend</h3>
          <p>
            <span>
              <small>html</small>
              <Image
                src={'./images/skills/html.svg'}
                alt=""
                width={45}
                height={45}
              />
            </span>
            <span>
              <small>css</small>
              <Image
                src={'./images/skills/css.svg'}
                alt=""
                width={45}
                height={45}
              />
            </span>
            <span>
              <small>js</small>
              <Image
                src={'./images/skills/js.svg'}
                alt=""
                width={45}
                height={45}
              />
            </span>
            <span>
              <small>ts</small>
              <Image
                src={'./images/skills/ts.svg'}
                alt=""
                width={45}
                height={45}
              />
            </span>
          </p>
          <p>
            <Image
              src={'/images/skills/jquery.png'}
              alt=""
              width={176}
              height={45}
            />
          </p>
          <p>
            <Image
              src={'/images/skills/react.png'}
              alt=""
              width={50}
              height={50}
            />
            <label style={{ color: '#54C0DE' }}>React</label>
          </p>
          <p>
            <Image
              src={'/images/skills/vue.svg'}
              alt=""
              width={50}
              height={50}
            />
            <label style={{ color: '#81C784' }}>VueJS</label>
          </p>
          <p>
            <Image
              src={'/images/skills/redux.png'}
              alt=""
              width={40}
              height={40}
            />
            <label style={{ color: '#694DAF' }}>Redux</label>
          </p>
          <p>
            <Image
              src={'/images/skills/redux-saga.png'}
              alt=""
              width={180}
              height={45}
            />
          </p>
          <p>
            <Image
              src={'/images/skills/recoil.svg'}
              alt=""
              width={50}
              height={50}
            />
            <label>Recoil</label>
          </p>
          <p>
            <Image
              src={'/images/skills/styled-component.svg'}
              alt=""
              width={50}
              height={50}
            />
            <label style={{ fontSize: '16px' }}>
              Styled{'\n'}
              Component
            </label>
          </p>
          <p>
            <Image
              src={'/images/skills/tailwind.svg'}
              alt=""
              width={45}
              height={45}
            />
            <label style={{ fontSize: '16px', fontWeight: 'bold' }}>
              Tailwind CSS
            </label>
          </p>

          <p>
            <Image
              src={'/images/skills/antd.png'}
              alt=""
              width={150}
              height={40}
            />
          </p>
          <p>
            <Image
              src={'/images/skills/flutter.png'}
              alt=""
              width={150}
              height={40}
            />
          </p>
          <p>
            <Image
              src={'/images/skills/zustand.png'}
              alt=""
              width={120}
              height={70}
            />
          </p>
        </div>

        {/* Backend Skills */}
        <div className={st.skill_box}>
          <h3>Backend</h3>
          <p>
            <Image
              src={'/images/skills/mongodb.png'}
              alt=""
              width={25}
              height={50}
            />
            <label style={{ color: '#679F36', fontSize: '24px' }}>
              Mongo DB
            </label>
          </p>
          <p>
            <Image
              src={'/images/skills/mysql.png'}
              alt=""
              width={50}
              height={50}
            />
            <label style={{ color: '#2CA3C3' }}>MySQL</label>
          </p>
          <p>
            <Image
              src={'/images/skills/nodejs.png'}
              alt=""
              width={50}
              height={50}
            />
            <label>NodeJS</label>
          </p>
        </div>

        {/* Version Control */}
        <div className={st.skill_box}>
          <h3>Version Control</h3>
          <p>
            <Image
              src={'/images/skills/git.svg'}
              alt=""
              width={50}
              height={50}
            />
            <label>git</label>
          </p>
          <p>
            <Image
              src={'/images/skills/github.svg'}
              alt=""
              width={50}
              height={50}
            />
            <label>Github</label>
          </p>
          <p>
            <Image
              src={'/images/skills/gitlab.svg'}
              alt=""
              width={50}
              height={50}
            />
            <label>Gitlab</label>
          </p>
        </div>

        {/* Deployment */}
        <div className={st.skill_box}>
          <h3>Deployment</h3>
          <p>
            <Image
              src={'/images/skills/nginx.png'}
              alt=""
              width={200}
              height={50}
            />
          </p>
          <p>
            <Image
              src={'/images/skills/vercel.png'}
              alt=""
              width={160}
              height={42}
            />
          </p>
        </div>
      </div>
    </section>
  );
}
