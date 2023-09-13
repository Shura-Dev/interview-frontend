import { createContext, useState } from 'react';
import { GET, TASKS_URL, POST, PUT, DELETE } from '../helpers/constants';
import { reqAxios } from '../helpers/helpers';

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  
  const initialStateTask = {
    title: '',
    description: '',
    completed: false,
  };

  const [allTasks, setAllTasks] = useState([]);
  const [taskForm, setTaskForm] = useState(initialStateTask);
  const [taskById, setTaskById] = useState(null);

  const handlerFormTask = (e) => {
    e.preventDefault();
    setTaskForm({
      ...taskForm,
      [e.target.name]: e.target.value,
    });
  };

  const handlerUpdateFormTask = (e) => {
    e.preventDefault();
    setTaskById({
      ...taskById,
      [e.target.name]: e.target.value,
    });
  };

  const createTask = async () => {
    await reqAxios(POST, TASKS_URL, taskForm);
    getAllTasks();
  };

  const updateTask = async () => {
    await reqAxios(PUT, TASKS_URL + `/${taskById.uuid}`, taskById);
    getAllTasks();
  };

  const getAllTasks = async () => {
    const tasks = await reqAxios(GET, TASKS_URL);
    setAllTasks(tasks.data);
  };

  const getTaskById = async (id) => {
    const task = await reqAxios(GET, TASKS_URL + `/${id}`);
    setTaskById(task.data);
  };

  const deleteTask = async (id) => {
    await reqAxios(DELETE, TASKS_URL + `/${id}`);
    getAllTasks();
  };

  const completedTask = async (id, data) => {
    await reqAxios(PUT, TASKS_URL + `/${id}`, data);
  };

  return (
    <Context.Provider
      value={{
        allTasks,
        getAllTasks,
        createTask,
        handlerFormTask,
        handlerUpdateFormTask,
        getTaskById,
        taskById,
        updateTask,
        deleteTask,
        completedTask,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
