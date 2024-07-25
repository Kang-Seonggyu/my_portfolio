import st from './page.module.css';
import dynamic from 'next/dynamic';
import LidButton from '@/components/common/lid-button';

export default function Home() {
  const LazyLoading = dynamic(
    () => import('@/components/common/animated-render'),
    {
      loading: () => <p>Loading...</p>,
    }
  );

  return (
    <main className={st.main}>
      <div className={st.visual}>
        <div id={st.stars}></div>
        <div id={st.stars2}></div>
        <div id={st.stars3}></div>

        <div className={st.name}>
          <p>kang seong gyu</p>
          <p>frontend</p>
        </div>
      </div>

      <div className={st.contents}>
        <div className="spacer" style={{ width: '100%', height: '30vh' }}>
          <LidButton
            closeText="Close Me"
            openText="Open Up"
            color="red"
          ></LidButton>
          <LidButton closeText="Green" openText="" color="green"></LidButton>
          <LidButton
            closeText="Blue One"
            openText="This is"
            color="blue"
          ></LidButton>
        </div>
        <LazyLoading>
          <div style={{ width: '300px', height: '200px', background: 'green' }}>
            애니메이션 렌더러
          </div>
        </LazyLoading>
        <LazyLoading>
          <div style={{ width: '200px', height: '400px', background: 'red' }}>
            애니메이션 렌더러
          </div>
        </LazyLoading>
        <div className="spacer" style={{ width: '100%', height: '90vh' }}></div>
      </div>
    </main>
  );
}
