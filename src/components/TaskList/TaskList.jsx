import React from "react";
import NewTask from "./NewTask";
import AcceptTask from "./AcceptTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

const TaskList = ({ employeeData }) => {
  return (
    <div
      id="tasklist"
      className="h-[20rem] w-full flex items-center justify-center md:justify-start gap-5 flex-wrap py-5 mt-10"
    >
      {employeeData?.tasks.map((task, index) => {
        if (task.active) {
          return (
            <AcceptTask
              key={index}
              task={task}
              firstName={employeeData.firstName}
            />
          );
        }
        if (task.newTask) {
          return (
            <NewTask
              key={index}
              task={task}
              firstName={employeeData.firstName}
            />
          );
        }
        if (task.completed) {
          return <CompleteTask key={index} task={task} />;
        }
        if (task.failed) {
          return <FailedTask key={index} task={task} />;
        }
      })}
    </div>
  );
};

export default TaskList;
