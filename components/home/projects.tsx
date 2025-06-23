import Carousel from '../common/carousel';
import st from './projects.module.css';

export function Projects() {
  // prettier-ignore
  const projects = {
    'dgdp':{
      skills: ['React', 'React-Query', 'Zustand', 'Ant-design', 'Typescript'],
      images: [
        {src:'/images/projects/dgdp/dgdp_0.png',detail:''},
        {src:'/images/projects/dgdp/dgdp_1.png',detail:''},
        {src:'/images/projects/dgdp/dgdp_2.png',detail:''},
        {src:'/images/projects/dgdp/dgdp_3.png',detail:''},          
        {src:'/images/projects/dgdp/dgdp_4.png',detail:''},          
        {src:'/images/projects/dgdp/dgdp_5.png',detail:''},          
        {src:'/images/projects/dgdp/dgdp_6.png',detail:''},          
        {src:'/images/projects/dgdp/dgdp_7.png',detail:''},          
        {src:'/images/projects/dgdp/dgdp_8.png',detail:''},          
        {src:'/images/projects/dgdp/dgdp_9.png',detail:''},          
      ]
    },
    
    'nodetalks':{
      skills:['JQuery'],
      images: [
        {src:'/images/projects/nodetalks/nodetalks1.png',detail:''},
        {src:'/images/projects/nodetalks/nodetalks2.png',detail:''},
        {src:'/images/projects/nodetalks/nodetalks3.png',detail:''},
        {src:'/images/projects/nodetalks/nodetalks4.png',detail:''},          
      ]
    },
    
    'temp_jobportal':{
      skills:['React','Redux','Redux-saga'],
      images: [{src:'/images/projects/jobportal/jobportal1.png',detail:''},
        {src:'/images/projects/jobportal/jobportal2.png',detail:''},
        {src:'/images/projects/jobportal/jobportal3.png',detail:''},
        {src:'/images/projects/jobportal/jobportal4.png',detail:''},
        {src:'/images/projects/jobportal/jobportal5.png',detail:''},
        {src:'/images/projects/jobportal/jobportal6.png',detail:''}]
    },
    
    'jobportal':{
      skills:['JQuery','JQueryUI'],
      images: [{src:'/images/projects/jobportal2/경주정보고1.png',detail:''},
        {src:'/images/projects/jobportal2/경주정보고2.png',detail:''},
        {src:'/images/projects/jobportal2/경주정보고3.png',detail:''},
        {src:'/images/projects/jobportal2/경주정보고4.png',detail:''},
        {src:'/images/projects/jobportal2/경주정보고5.png',detail:''},
        {src:'/images/projects/jobportal2/경주정보고6.png',detail:''}]
    },
    
    'ph_yesan': {
      skills:['React','Redux','React-Query',],
      images: [{src:'/images/projects/phyesan/예산재정1.png',detail:''},
        {src:'/images/projects/phyesan/예산재정2.png',detail:''},
        {src:'/images/projects/phyesan/예산재정3.png',detail:''},
        {src:'/images/projects/phyesan/예산재정4.png',detail:''}]
    },
    
    'P.Front': {
      skills:['React','TailwindCSS','Redux','Redux-saga','NodeJs'],
      images: [{src:'/images/projects/pfront/pfront1.png',detail:''},
        {src:'/images/projects/pfront/pfront2.png',detail:''},
        {src:'/images/projects/pfront/pfront3.png',detail:''},
        {src:'/images/projects/pfront/pfront4.png',detail:''},
        {src:'/images/projects/pfront/pfront5.png',detail:''},
        {src:'/images/projects/pfront/pfront6.png',detail:''},
        {src:'/images/projects/pfront/pfront7.png',detail:''}]
    },
    
  }

  return (
    <section>
      <h2>Projects</h2>

      <div className={st.container}>
        <h3>디자인진흥원 전주기</h3>
        <div className={st.content}>
          <Carousel data={projects['dgdp'].images}></Carousel>
          <desc>
            <div>
              <label>Skills</label>
              <span className={st.flexwrap}>
                {projects['dgdp'].skills.map((skill, i) => (
                  <em key={`dgdp_${skill}_${i}`}>{skill}</em>
                ))}
              </span>
            </div>
            <div>
              <label>Period</label>
              <span>2024.05 ~ 2024.11</span>
            </div>
            <div>
              <label>Desc</label>
              <span>
                <b>디자인 진흥원 전주기 프로젝트</b>입니다.
              </span>
            </div>
            <div>
              <label>Detail</label>
              <div>
                <p>전주기 프로젝트 관리</p>
                <p>Zustand를 이용한 상태관리</p>
                <p>React-Query를 이용한 API 연동</p>
                <p>통계 이력에 대한 데이터 시각화</p>
                <p>프로젝트 관리(참여인원 및 권한, 프로젝트 단계 등)</p>
                <p>프로젝트 단계별 메시지/참고자료/이슈관리 기능</p>
                <p>상세화 단계의 계산 기능</p>
                <p>간트차트를 이용한 일정관리</p>
                <p>3D 제품 시각화</p>
              </div>
            </div>
          </desc>
        </div>
      </div>

      <div className={st.container}>
        <h3>Nodetalks</h3>
        <div className={st.content}>
          <Carousel data={projects['nodetalks'].images}></Carousel>
          <desc>
            <div>
              <label>Skills</label>
              <span className={st.flexwrap}>
                {projects['nodetalks'].skills.map((skill, i) => (
                  <em key={`nodetalks_${skill}_${i}`}>{skill}</em>
                ))}
              </span>
            </div>
            <div>
              <label>Period</label>
              <span>2024.07 ~ 2024.08</span>
            </div>
            <div>
              <label>Site</label>
              <a href="https://www.nodetalks.co.kr/" target="_blank">
                nodetalks.co.kr
              </a>
            </div>
            <div>
              <label>Desc</label>
              <span>
                <b>㈜노트톡스 홈페이지</b>입니다.
              </span>
            </div>
          </desc>
        </div>
      </div>

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
              <span>2023.02 ~ 2023.08</span>
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

      <div className={st.container}>
        <h3>포항시 예산재정</h3>
        <div className={st.content}>
          <Carousel data={projects['ph_yesan'].images}></Carousel>
          <desc>
            <div>
              <label>Skills</label>
              <span className={st.flexwrap}>
                {projects['ph_yesan'].skills.map((skill, i) => (
                  <em key={`ph_yesan_${skill}_${i}`}>{skill}</em>
                ))}
              </span>
            </div>
            <div>
              <label>Period</label>
              <span>2022.11 ~ 2023.05</span>
            </div>
            <div>
              <label>Desc</label>
              <span>
                <b>포항시의 예산 및 재정을 관리하는 웹사이트</b>입니다.
              </span>
            </div>
            <div>
              <label>Site</label>
              <a href="https://www.pohang.go.kr/phyesan" target="_blank">
                pohang.go.kr/phyesan
              </a>
            </div>
            <div>
              <label>Detail</label>
              <div>
                <p>매장/메뉴 운영 관리</p>
                <p>Redux를 이용한 전역상태관리</p>
                <p>React-Query를 이용한 API 연동</p>
                <p>반응형 웹 디자인</p>
                <p>Drag&Drop을 이용한 순서변경</p>
              </div>
            </div>
          </desc>
        </div>
      </div>

      <div className={st.container}>
        <h3>경주정보고 취업포털(1차)</h3>
        <div className={st.content}>
          <Carousel data={projects['temp_jobportal'].images}></Carousel>
          <desc>
            <div>
              <label>Skills</label>
              <span className={st.flexwrap}>
                {projects['temp_jobportal'].skills.map((skill, i) => (
                  <em key={`temp_jobportal_${skill}_${i}`}>{skill}</em>
                ))}
              </span>
            </div>
            <div>
              <label>Period</label>
              <span>2022.11 ~ 2023.05</span>
            </div>
            <div>
              <label>Desc</label>
              <span>
                <b>경주정보고 학생들의 취업을 돕기 위한 웹사이트</b>입니다.
              </span>
            </div>
            <div>
              <label>Detail</label>
              <div>
                <p>사람인/잡코리아 취업정보 API 연동</p>
                <p>필터링 조건 추가 및 삭제 기능 구현</p>
                <p>Redux를 이용한 상태관리</p>
                <p>Redux-saga를 이용한 API 연동</p>
                <p>관리자 페이지(회원관리)</p>
                <p>교직원 페이지(관할학생정보관리)</p>
                <p>취업 통계 데이터 시각화</p>
              </div>
            </div>
          </desc>
        </div>
      </div>

      <div className={st.container}>
        <h3>경주정보고 취업포털(2차)</h3>
        <div className={st.content}>
          <Carousel data={projects['jobportal'].images}></Carousel>
          <desc>
            <div>
              <label>Skills</label>
              <span className={st.flexwrap}>
                {projects['jobportal'].skills.map((skill, i) => (
                  <em key={`jobportal_${skill}_${i}`}>{skill}</em>
                ))}
              </span>
            </div>
            <div>
              <label>Period</label>
              <span>2023.11 ~ 2024.02</span>
            </div>
            <div>
              <label>Desc</label>
              <span>
                <b>경주정보고 학생들의 취업을 돕기 위한 웹사이트</b>입니다.
              </span>
            </div>
            <div>
              <label>Site</label>
              <a href="https://internet-job.kr/" target="_blank">
                internet-job.kr
              </a>
            </div>
            <div>
              <label>Detail</label>
              <div>
                <p>사람인/잡코리아 취업정보 API 연동</p>
                <p>필터링 조건 추가 및 삭제 기능 구현</p>
                <p>사이드바 및 최근페이지 기록</p>
                <p>기업의 교내공고 생성 및 학생 지원 관리</p>
                <p>취업지원 프로그램 수강 신청 및 관리</p>
                <p>로그인 방식별 페이지 구성 상이</p>
              </div>
            </div>
          </desc>
        </div>
      </div>
    </section>
  );
}
