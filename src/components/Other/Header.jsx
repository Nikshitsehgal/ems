import React from "react";

const Header = ({ user, changeUser, employeeData }) => {
  const logOutUser = () => {
    localStorage.removeItem("loggedInUser");
    // window.location.reload();
    changeUser("");
  };
  return (
    <div className="flex items-center justify-between">
      <h1 className="text-2xl">
        Hello{" "}
        <span className="text-3xl font-semibold">
          {employeeData?.firstName ?? "Admin"} 😄
        </span>
      </h1>
      <h2 className="text-4xl font-bold">
        {user == "admin" ? "Admin " : "Employee "}Dashboard
      </h2>
      <button
        onClick={logOutUser}
        className="bg-red-500 text-lg font-medium text-white px-5 py-2 rounded-lg cursor-pointer"
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;
