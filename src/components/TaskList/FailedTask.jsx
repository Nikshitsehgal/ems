import React from "react";

const FailedTask = ({ task }) => {
  return (
    <div className="flex flex-col justify-between flex-shrink-0 h-full w-[300px] p-5 bg-gray-600 rounded-xl">
      <div>
        <div className="flex justify-between items-center">
          <h3 className="bg-gray-700 py-1 px-3 rounded text-sm">
            {task.category}
          </h3>
          <h4 className="text-sm">{task.taskDate}</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">{task.taskTitle}</h2>
        <p className="text-sm mt-2">{task.taskDescription}</p>
      </div>
      <hr className="" />
      <div>
        <button className="w-full">Failed</button>
      </div>
    </div>
  );
};

export default FailedTask;
