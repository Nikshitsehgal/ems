import React from "react";

const NewTask = ({ task }) => {
  return (
    <div className="flex-shrink-0 h-full w-[300px] p-5 bg-blue-400 rounded-xl">
      <div className="flex justify-between items-center">
        <h3 className="bg-gray-600 py-1 px-3 rounded text-sm">
          {task.category}
        </h3>
        <h4 className="text-sm">{task.taskDate}</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold">{task.taskTitle}</h2>
      <p className="text-sm mt-2">{task.taskDescription}</p>
      <div className="mt-4">
        <button className="bg-yellow-500 py-1 px-2 text-sm cursor-pointer">
          Accept Task
        </button>
      </div>
    </div>
  );
};

export default NewTask;
