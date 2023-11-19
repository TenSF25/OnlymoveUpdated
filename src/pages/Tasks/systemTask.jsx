import { useEffect, useState } from "react";
import "./tasks.css";

const SystemTask = () => {
  const [getTask, setGetTask] = useState([]);
  const [title, setTitle] = useState("");
  const [statusTask, setStatus] = useState(0);
  const [date, setDate] = useState();
  const [description, setDescription] = useState("");

  const [isEdit, setIsEdit] = useState(false);
  const [idEdit, setId] = useState(0);
  const [titleEdit, setTitleEdit] = useState("");
  const [statusEdit, setStatusEdit] = useState(0);
  const [dateEdit, setDateEdit] = useState("");
  const [descriptionEdit, setDescriptionEdit] = useState("");

  const taskList = async () => {
    try {
      const response = await fetch("http://localhost:8080/task");
      const data = await response.json();
      setGetTask(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const getTitle = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
  };

  const getDate = (e) => {
    setDate(e.target.value);
  };

  const getStatus = (e) => {
    setStatus(e.target.value);
  };

  const getDescription = (e) => {
    setDescription(e.target.value);
  };

  const edit = (id, titleEdit, dateEdit, descriptionEdit, sT) => {
    setIsEdit(true);
    setId(id);
    setTitleEdit(titleEdit);
    setStatusEdit(sT);
    setDateEdit(dateEdit);
    setDescriptionEdit(descriptionEdit);
  };

  const taskPost = async () => {
    const body = {
      title: title,
      statusTask: statusTask,
      date: date,
      description: description,
    };

    if (
      title === "" ||
      statusTask === "" ||
      date === "" ||
      description === ""
    ) {
      alert("Debes de ingresar algun valor");
    } else {
      try {
        await fetch("http://localhost:8080/task", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        });

        window.location.reload();
      } catch (error) {
        console.log(error);
      }
    }
  };

  const taskEdit = async () => {
    const body = {
      title: title !== "" ? title : titleEdit,
      statusTask: statusTask !== "" ? statusTask : statusEdit,
      date: date !== "" ? date : dateEdit,
      description: description !== "" ? description : descriptionEdit,
    };

    try {
      await fetch(`http://localhost:8080/task/${idEdit}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const taskDelete = async (id) => {
    try {
      await fetch(`http://localhost:8080/task/${id}`, {
        method: "DELETE",
      });
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    taskList();
  }, []);

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <>
      <div className="addTask" style={{ display: isEdit ? "none" : "block" }}>
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
            <tr>
              <td></td>
              <td className="title">
                <input type="text" value={title} onChange={getTitle} />
              </td>
              <td className="status">
                <select name="" id="" value={statusTask} onChange={getStatus}>
                  <option value="0"></option>
                  <option value="1">Sin empezar</option>
                  <option value="2">En proceso</option>
                  <option value="3">Terminado</option>
                </select>
              </td>
              <td className="date">
                <input
                  type="date"
                  name=""
                  id=""
                  value={date}
                  onChange={getDate}
                />
              </td>
              <td className="description">
                <input
                  type="text"
                  value={description}
                  onChange={getDescription}
                />
              </td>
              <td>
                <button style={{ background: "green" }} onClick={taskPost}>
                  Add
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="getTasks">
        {!isEdit ? (
          getTask ? (
            getTask.map((res) => (
              <table className="task-table" key={res._id}>
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
                  <tr>
                    <td></td>
                    <td className="title">{res.title}</td>
                    <td className="status">
                      {res.statusTask === 1 ? (
                        <span>Sin empezar</span>
                      ) : res.statusTask === 2 ? (
                        <span>En proceso</span>
                      ) : res.statusTask === 3 ? (
                        <span>Terminado</span>
                      ) : null}
                    </td>
                    <td className="date">{formatDate(res.date)}</td>
                    <td className="description">{res.description}</td>
                    <td>
                      <button
                        style={{ background: "orange" }}
                        onClick={() =>
                          edit(
                            res._id,
                            res.title,
                            res.date,
                            res.description,
                            res.statusTask
                          )
                        }
                      >
                        Edit
                      </button>
                    </td>
                    <td>
                      <button
                        style={{ background: "red" }}
                        onClick={() => taskDelete(res._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            ))
          ) : (
            <span>No hay tareas disponibles!</span>
          )
        ) : (
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
              <tr>
                <td></td>
                <td className="title">
                  <input type="text" value={title} onChange={getTitle} />
                </td>
                <td className="status">
                  <select name="" id="" value={statusTask} onChange={getStatus}>
                    <option value="0"></option>
                    <option value="1">Sin empezar</option>
                    <option value="2">En proceso</option>
                    <option value="3">Terminado</option>
                  </select>
                </td>
                <td className="date">
                  <input
                    type="date"
                    name=""
                    id=""
                    value={date}
                    onChange={getDate}
                  />
                </td>
                <td className="description">
                  <input
                    type="text"
                    value={description}
                    onChange={getDescription}
                  />
                </td>
                <td>
                  <button style={{ background: "green" }} onClick={taskEdit}>
                    ✔
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        )}
      </div>
    </>
  );
};

export default SystemTask;
