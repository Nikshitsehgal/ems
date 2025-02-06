import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AcceptTask = ({ task, firstName }) => {
  const [userData, setUserData] = useContext(AuthContext);

  const handleTask = (action) => {
    const employees = userData.employees;
    employees.forEach((employee) => {
      if (firstName == employee.firstName) {
        const updatedTask = { ...task, active: false, [action]: true };
        const updatedTaskList = employee.tasks.map((currentTask) => {
          if (currentTask.taskTitle == updatedTask.taskTitle) {
            currentTask = updatedTask;
          }
          return currentTask;
        });
        employee.tasks = updatedTaskList;
        employee.taskCount.active--;
        employee.taskCount[action]++;

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
    <div className="flex flex-col flex-shrink-0 justify-between h-full w-[300px] p-5 bg-gray-600 rounded-xl">
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
      <div className="flex justify-between mt-4">
        <button
          onClick={() => handleTask("completed")}
          className="bg-green-500 py-1 px-2 text-sm rounded cursor-pointer"
        >
          Mark as Completed
        </button>
        <button
          onClick={() => handleTask("failed")}
          className="bg-red-500 py-1 px-2 text-sm rounded cursor-pointer"
        >
          Mark as Failed
        </button>
      </div>
    </div>
  );
};

export default AcceptTask;
