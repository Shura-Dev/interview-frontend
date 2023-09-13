import { useContext, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Context } from '../../context/Context';
import style from './EditTaskForm.module.css';

const EditTaskForm = () => {
  const { getTaskById, taskById, updateTask, handlerUpdateFormTask } =
    useContext(Context);
  const navigate = useNavigate();
  const { id } = useParams();

  const onSubmit = () => {
    updateTask();
    navigate('/');
  };

  useEffect(() => {
    getTaskById(id);
  }, []);

  return (
    <div className={style.formContainer}>
      <h2>Editar Tarea</h2>
      <form>
        <div className={`${style.formField} ${style.inputContainer}`}>
          <label htmlFor="title">Título:</label>
          <input
            type="text"
            name="title"
            onChange={handlerUpdateFormTask}
            defaultValue={taskById?.title}
            className={style.inputField}
          />
        </div>
        <div className={`${style.formField} ${style.inputContainer}`}>
          <label htmlFor="description">Descripción:</label>
          <textarea
            name="description"
            onChange={handlerUpdateFormTask}
            defaultValue={taskById?.description}
            className={style.textareaField}
          />
        </div>
        <button
          className={`${style.submitButton} ${style.inputContainer}`}
          onClick={onSubmit}
        >
          Editar
        </button>
      </form>
    </div>
  );
};

export default EditTaskForm;
