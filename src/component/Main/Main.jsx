import Feedback from '../Feedback';
import style from './Main.module.css';
const Main = () => {
  return (
    <>
      <section className={style.sectionFitback}>
        <div className={style.container}>
          <Feedback />
        </div>
      </section>
    </>
  );
};

export default Main;
