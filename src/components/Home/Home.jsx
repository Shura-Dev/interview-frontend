import TasksList from '../TasksList/TasksList';
import style from './Home.module.css';

const Home = () => {
  return (
    <>
      <h3 className={style.fontTitle}>Lista de Tareas</h3>
      <TasksList />
    </>
  );
};

export default Home;
