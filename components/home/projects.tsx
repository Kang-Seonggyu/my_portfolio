import Carousel from '../common/carousel';
import st from './projects.module.css';

export function Projects() {
  // prettier-ignore
  const projects = {
    'P.Front': {
      skills:['React','TailwindCSS','Redux','Redux-saga','NodeJs'],
      images: [{src:'/images/projects/pfront/pfront1.png',detail:''},{src:'/images/projects/pfront/pfront2.png',detail:''},{src:'/images/projects/pfront/pfront3.png',detail:''},{src:'/images/projects/pfront/pfront4.png',detail:''},{src:'/images/projects/pfront/pfront5.png',detail:''},{src:'/images/projects/pfront/pfront6.png',detail:''},{src:'/images/projects/pfront/pfront7.png',detail:''}]
    },
  }

  return (
    <section>
      <h2>Projects</h2>

      <div className={st.container}>
        <h3>P.Front (포항공대복지회)</h3>
        <div className={st.content}>
          <Carousel data={projects['P.Front'].images}></Carousel>
          <desc>
            <div>
              <label>Skills</label>
              <span className={st.flexwrap}>
                {projects['P.Front'].skills.map((skill, i) => (
                  <em key={`PFront_${skill}_${i}`}>{skill}</em>
                ))}
              </span>
            </div>
            <div>
              <label>Period</label>
              <span>2022.11~2023.05</span>
            </div>
            <div>
              <label>Desc</label>
              <span>
                <b>포항공대 내부 매장들을 관리를 하는 웹사이트</b>입니다.
              </span>
            </div>
            <div>
              <label>Detail</label>
              <div>
                <p>매장/메뉴 운영 관리</p>
                <p>예약 관리 및 이력에 대한 데이터 시각화</p>
                <p>Redux를 이용한 상태관리</p>
                <p>Redux-saga를 이용한 API 연동</p>
                <p>행사용 이용권 발급 및 관리</p>
                <p>각 조건별 필터링 기능 구현</p>
                <p>데이터 엑셀 다운로드 기능 구현</p>
                <p>통계 이력에 대한 데이터 시각화</p>
                <p>주문 내역 데이터 시각화 및 환불기능</p>
              </div>
            </div>
          </desc>
        </div>
      </div>
    </section>
  );
}
