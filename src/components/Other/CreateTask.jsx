import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const CreateTask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  const [formInputs, setFormInputs] = useState({
    taskTitle: "",
    taskDate: "",
    taskDescription: "",
    asignTo: "",
    category: "",
    active: false,
    newTask: true,
    completed: false,
    failed: false,
  });

  const handleChange = (e) => {
    setFormInputs({ ...formInputs, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const employees = userData.employees;
    employees.forEach((employee) => {
      if (formInputs.asignTo == employee.firstName) {
        const { asignTo, ...newTaskData } = formInputs;
        employee.tasks.push(newTaskData);
        employee.taskCount.newTask++;
      }
    });

    setUserData({ ...userData, employees });
    localStorage.setItem("employees", JSON.stringify(employees));

    setFormInputs({
      taskTitle: "",
      taskDate: "",
      taskDescription: "",
      asignTo: "",
      category: "",
      active: false,
      newTask: true,
      completed: false,
      failed: false,
    });
  };

  return (
    <div className="p-5 bg-[#232323] mt-7 rounded">
      <h1 className="text-3xl mb-5 text-center font-bold">Create Task</h1>
      <form
        className="flex flex-wrap w-full items-start justify-between"
        onSubmit={(e) => submitHandler(e)}
      >
        <div className="w-1/2">
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
            <input
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="text"
              placeholder="Make a UI Design"
              name="taskTitle"
              value={formInputs.taskTitle}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
            <input
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="date"
              name="taskDate"
              value={formInputs.taskDate}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Assign To</h3>
            <input
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="text"
              placeholder="employee name"
              name="asignTo"
              value={formInputs.asignTo}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
            <input
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="text"
              placeholder="design, dev, etc."
              name="category"
              value={formInputs.category}
              onChange={(e) => handleChange(e)}
            />
          </div>
        </div>
        <div className="w-2/5 flex flex-col items-start">
          <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
          <textarea
            className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
            value={formInputs.taskDescription}
            onChange={(e) => handleChange(e)}
            name="taskDescription"
          ></textarea>
          <button className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
