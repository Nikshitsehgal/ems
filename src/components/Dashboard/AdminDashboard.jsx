import React from "react";
import Header from "../Other/Header";
import CreateTask from "../Other/CreateTask";
import AllTask from "../Other/AllTask";

const AdminDashboard = ({ user, changeUser }) => {
  return (
    <div className="h-screen w-full p-10">
      <Header user={user} changeUser={changeUser} />
      <CreateTask />
      <AllTask />
    </div>
  );
};

export default AdminDashboard;
