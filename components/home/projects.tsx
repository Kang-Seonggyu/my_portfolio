import Carousel from '../common/carousel';
import st from './projects.module.css';

export function Projects() {
  // prettier-ignore
  const projects = {
    'P.Front': {
      skills:[''],
      images: [{src:'/images/projects/pfront/pfront1.png',detail:''},{src:'/images/projects/pfront/pfront2.png',detail:''},{src:'/images/projects/pfront/pfront3.png',detail:''},{src:'/images/projects/pfront/pfront4.png',detail:''},{src:'/images/projects/pfront/pfront5.png',detail:''},{src:'/images/projects/pfront/pfront6.png',detail:''},{src:'/images/projects/pfront/pfront7.png',detail:''}]
    },
    '':{
      skills:[],
      images: []
    }
  }

  return (
    <section>
      <h2>Projects</h2>

      <div className={st.project}>
        <h3>P.Front</h3>
        <Carousel data={projects['P.Front'].images}></Carousel>
      </div>
    </section>
  );
}
