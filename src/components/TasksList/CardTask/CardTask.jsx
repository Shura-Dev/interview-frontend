import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from '../../../context/Context';
import style from './CardTask.module.css';

const CardTask = ({ task }) => {
  const navigate = useNavigate();
  const { deleteTask, completedTask } = useContext(Context);
  const { uuid, title, description, completed} = task;
  const [isCompleted, setIsCompleted] = useState(completed);

  const editTask = () => navigate(`/edit-task/${uuid}`);

  const deleteTaskById = () => deleteTask(uuid);

  const onCompleteClick = () => {
    setIsCompleted(!isCompleted);
    let data = { ...task, completed: isCompleted };
    completedTask(uuid, data);
  };

  return (
    <div className={`${style.card} ${isCompleted ? style.completed : ''}`}>
      <div className={style.cardHeader}>
        <span className={style.fontHeader}>{title}</span>
        <span className={style.fontHeaderCompleted}> {isCompleted ? "Terminado" : "Por Hacer"}</span>
      </div>
      <div className={style.cardBody}>
        <p className={style.fontDescription}>Descripcion:</p>
        <span className={style.fontStyle}>{description}</span>
      </div>
      <div className={style.cardFooter}>
        <span
          className="material-icons"
          style={{ color: 'gray', cursor: 'pointer', margin: 'auto 5px' }}
          onClick={onCompleteClick}
        >
          task
        </span>
        <span
          className="material-icons"
          style={{ color: '#27A2BB', cursor: 'pointer', margin: 'auto 5px' }}
          onClick={editTask}
        >
          edit
        </span>
        <span
          className="material-icons"
          style={{ color: 'red', cursor: 'pointer', margin: 'auto 5px' }}
          onClick={deleteTaskById}
        >
          delete
        </span>
      </div>
    </div>
  );
};

export default CardTask;
