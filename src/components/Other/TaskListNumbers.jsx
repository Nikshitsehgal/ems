import React from "react";

const TaskListNumbers = ({ employeeData }) => {
  return (
    <div className="flex mt-20 justify-between gap-5">
      <div className="rounded-xl w-[45%] px-9 py-6 border-3 border-blue-400">
        <h2 className="text-3xl font-semibold">
          {employeeData?.taskCount?.newTask}
        </h2>
        <h3 className="text-xl font-medium">New Task</h3>
      </div>

      <div className="rounded-xl w-[45%] px-9 py-6 border-3 border-yellow-400">
        <h2 className="text-3xl font-semibold">
          {employeeData?.taskCount?.active}
        </h2>
        <h3 className="text-xl font-medium">Accepted Task</h3>
      </div>
      <div className="rounded-xl w-[45%] px-9 py-6 border-3 border-green-400">
        <h2 className="text-3xl font-semibold">
          {employeeData?.taskCount?.completed}
        </h2>
        <h3 className="text-xl font-medium">Completed Task</h3>
      </div>
      <div className="rounded-xl w-[45%] px-9 py-6 border-3 border-red-400">
        <h2 className="text-3xl font-semibold">
          {employeeData?.taskCount?.failed}
        </h2>
        <h3 className="text-xl font-medium">Failed Task</h3>
      </div>
    </div>
  );
};

export default TaskListNumbers;
