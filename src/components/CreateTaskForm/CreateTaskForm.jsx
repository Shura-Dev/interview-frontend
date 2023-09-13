import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from '../../context/Context';
import style from './CreateTaskForm.module.css';

const CreateTaskForm = () => {
  const { createTask, handlerFormTask } = useContext(Context);
  const navigate = useNavigate();

  const onSubmit = () => {
    createTask();
    navigate('/');
  };

  return (
    <div className={style.formContainer}>
    <h2>Crear Tarea</h2>
    <form>
      <div className={`${style.formField} ${style.inputContainer}`}>
        <label htmlFor="title">Título:</label>
        <input
          type="text"
          name="title"
          onChange={handlerFormTask}
          className={style.inputField}
        />
      </div>
      <div className={`${style.formField} ${style.inputContainer}`}>
        <label htmlFor="description">Descripción:</label>
        <textarea
          name="description"
          onChange={handlerFormTask}
          className={style.textareaField}
        />
      </div>
      <button
        className={`${style.submitButton} ${style.inputContainer}`}
        onClick={onSubmit}
        type="submit"
      >
        Guardar
      </button>
    </form>
  </div>

  );
};

export default CreateTaskForm;
