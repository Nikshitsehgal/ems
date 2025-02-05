import React from "react";
import Header from "../Other/Header";
import TaskListNumbers from "../Other/TaskListNumbers";
import TaskList from "../TaskList/TaskList";

const EmployeeDashboard = ({ changeUser, employeeData }) => {
  return (
    <div className="p-10 bg-[#1C1C1C] h-screen">
      <Header changeUser={changeUser} employeeData={employeeData} />
      <TaskListNumbers employeeData={employeeData} />
      <TaskList employeeData={employeeData} />
    </div>
  );
};

export default EmployeeDashboard;
