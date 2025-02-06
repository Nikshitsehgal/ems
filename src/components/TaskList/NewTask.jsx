import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const NewTask = ({ task, firstName }) => {
  const [userData, setUserData] = useContext(AuthContext);

  const handleAcceptTask = () => {
    const employees = userData.employees;
    employees.forEach((employee) => {
      if (firstName == employee.firstName) {
        const updatedTask = { ...task, active: true, newTask: false };
        const updatedTaskList = employee.tasks.map((currentTask) => {
          if (currentTask.taskTitle == updatedTask.taskTitle) {
            currentTask = updatedTask;
          }
          return currentTask;
        });
        employee.tasks = updatedTaskList;
        employee.taskCount.newTask--;
        employee.taskCount.active++;

        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee", data: employee })
        );
      }
    });
    setUserData({ ...userData, employees });
    localStorage.setItem("employees", JSON.stringify(employees));
  };

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
      <div className="mt-4 flex justify-center">
        <button
          onClick={handleAcceptTask}
          className="bg-yellow-500 py-1 px-2 text-sm cursor-pointer rounded"
        >
          Accept Task
        </button>
      </div>
    </div>
  );
};

export default NewTask;
