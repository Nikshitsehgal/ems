import React from "react";

const CompleteTask = ({ task }) => {
  return (
    <div className="flex-shrink-0 h-full w-[300px] p-5 bg-green-400 rounded-xl">
      <div className="flex justify-between items-center">
        <h3 className="bg-gray-600 py-1 px-3 rounded text-sm">
          {task.category}
        </h3>
        <h4 className="text-sm">{task.taskDate}</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold">{task.taskTitle}</h2>
      <p className="text-sm mt-2">{task.taskDescription}</p>
      <div className="mt-4 border-y-1 py-1">
        <button className="w-full">Task Completed</button>
      </div>
    </div>
  );
};

export default CompleteTask;
