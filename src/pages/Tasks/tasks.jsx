import { useEffect, useState } from "react";
import './tasks.css';

const Tasks = () => {
  const [getTask, setGetTask] = useState([]);

  const taskList = async () => {
    try {
      const response = await fetch("http://localhost:8080/task");
      const data = await response.json();
      setGetTask(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    taskList();
  }, []);

  const handleEdit = (section, id) => {
    console.log(`Editando ${section} de la tarea con ID ${id}`)
  }

  console.log(getTask);

  return (
    <div>
      {getTask && getTask.length > 0 ? (
        <table className="task-table">
          <thead>
            <tr>
              <th></th>
              <th>Título</th>
              <th>Estado</th>
              <th>Fecha</th>
              <th>Descripción</th>
            </tr>
          </thead>
          <tbody>
            {getTask.map((task) => (
              <tr key={task.id}>
                <td></td>
                <td onClick={() => handleEdit('title', task.id)} className="title">{task.title}</td>
                <td onClick={() => handleEdit('status', task.id)} className="status">{task.statusTask}</td>
                <td onClick={() => handleEdit('date', task.id)} className="date">{task.date}</td>
                <td onClick={() => handleEdit('description', task.id)} className="description">{task.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No hay tareas disponibles.</p>
      )}
    </div>
  );
};

export default Tasks;