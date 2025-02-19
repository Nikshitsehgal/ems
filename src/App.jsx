import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { AuthContext } from "./context/AuthProvider";
import { setLocalStorage } from "./utils/localStorage";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const [userData, setUserData] = useContext(AuthContext);

  useEffect(() => {
    // localStorage.clear();
    setLocalStorage();
    if (userData) {
      const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
      if (loggedInUser) {
        setUser(loggedInUser.role);
        setLoggedInUserData(loggedInUser.data);
        console.log("Already logged in - ", loggedInUser);
        console.log("UserData called");
      }
    }
  }, [userData]);

  const handleLogin = (email, password) => {
    if (email == "admin@ems.com" && password == "123") {
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } else if (userData) {
      const employee = userData.employees.find(
        (e) => e.email === email && e.password === password
      );
      if (employee) {
        setUser("employee");
        setLoggedInUserData(employee);
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee", data: employee })
        );
      } else {
        alert("Invalid Credentials.");
      }
    }
  };

  return (
    <>
      {!user && <Login handleLogin={handleLogin} />}
      {user == "admin" ? (
        <AdminDashboard user={user} changeUser={setUser} />
      ) : user == "employee" ? (
        <EmployeeDashboard
          user={user}
          changeUser={setUser}
          employeeData={loggedInUserData}
        />
      ) : null}
    </>
  );
};

export default App;
