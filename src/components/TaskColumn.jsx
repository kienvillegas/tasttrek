import React from "react";

import "./TaskColumn.css";
import TaskCard from "./TaskCard";

const TaskColumn = ({ taskStatus, icon, tasks, status, handleDelete }) => {
  return (
    <section className="task-column">
      <h2 className="task_column_heading">
        <img class="task_column_icon" src={icon} alt="" />
        {taskStatus}
      </h2>
      {tasks.map(
        (task, index) =>
          task.status === status && (
            <TaskCard
              key={index}
              title={task.task}
              tags={task.tags}
              handleDelete={handleDelete}
              index={index}
            />
          )
      )}
    </section>
  );
};

export default TaskColumn;
