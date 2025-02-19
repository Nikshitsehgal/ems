import React from "react";

const Header = ({ user, changeUser, employeeData }) => {
  const logOutUser = () => {
    localStorage.removeItem("loggedInUser");
    // window.location.reload();
    changeUser("");
  };
  return (
    <div className="flex flex-col">
      <div className="text-center">
        <h2 className="text-4xl font-bold">
          {user == "admin" ? "Admin " : "Employee "}Dashboard
        </h2>
      </div>
      <div className="flex justify-between mt-5 md:mt-0">
        <h1 className="text-2xl">
          Hello{" "}
          <span className="text-3xl font-semibold">
            {employeeData?.firstName ?? "Admin"} 😄
          </span>
        </h1>
        <button
          onClick={logOutUser}
          className="bg-red-500 md:text-lg md:font-medium text-white px-5 py-2 rounded-lg cursor-pointer"
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Header;
