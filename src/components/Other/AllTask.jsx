import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  return (
    <div
      id="tasklist"
      className="bg-[#1c1c1c p-5 mt-5 rounded overflow-auto text-center"
    >
      <h1 className="text-3xl mb-5 text-center font-bold">
        Employees Task's List
      </h1>

      <div className="bg-violet-300 font-bold mb-2 py-2 px-4 flex justify-between rounded">
        <h2 className="w-1/5">Employee Name</h2>
        <h3 className="w-1/5">New Task</h3>
        <h3 className="w-1/5">Active Task</h3>
        <h3 className="w-1/5">Completed</h3>
        <h3 className="w-1/5">Failed</h3>
      </div>
      {userData.employees.map((employee, index) => {
        return (
          <div
            key={index}
            className="border-2 border-violet-300 font-medium mb-2 py-2 px-4 flex justify-between rounded"
          >
            <h2 className="w-1/5">{employee.firstName}</h2>
            <h3 className="w-1/5">{employee.taskCount.newTask}</h3>
            <h3 className="w-1/5">{employee.taskCount.active}</h3>
            <h3 className="w-1/5">{employee.taskCount.completed}</h3>
            <h3 className="w-1/5">{employee.taskCount.failed}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default AllTask;
