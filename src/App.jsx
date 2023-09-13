import Home from './components/Home/Home';
import { Route, Routes } from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import CreateTaskForm from './components/CreateTaskForm/CreateTaskForm';
import style from './App.module.css'
import EditTaskForm from './components/EditTaskForm/EditTaskForm';

function App() {
  return (
    <div className={style.container}>
    <NavBar />
    <Routes>
      <Route index path="/" element={<Home />} />
      <Route path="/create-task" element={<CreateTaskForm />} />
      <Route path="/edit-task/:id" element={<EditTaskForm />} />
    </Routes>
  </div>
  );
}

export default App;
