import Nav from '../../components/navbar/navbar'
import SystemTask from './systemTask';

import "./task.css";

const Tasks = () => {

  return (
    <>
      <div className="taskContainer">
        <div className="tasks">
          <SystemTask/>
        </div>
      </div>
    </>
  );
};

export default Tasks;
