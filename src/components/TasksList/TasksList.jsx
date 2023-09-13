import { useContext, useEffect } from 'react';
import { Context } from '../../context/Context';
import CardTask from './CardTask/CardTask';
import style from './TasksList.module.css';

const TasksList = () => {
  const { allTasks, getAllTasks } = useContext(Context);
  
  useEffect(() => {
    getAllTasks();
  }, []);

  return (
    <div className={style.taskListContainer}>
      {allTasks.map((task, index) => (
        <CardTask key={index} task={task} />
      ))}
    </div>
  );
};

export default TasksList;
