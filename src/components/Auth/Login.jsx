import React, { useState } from "react";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex flex-col h-screen w-screen items-center justify-center">
      <h1 className="text-center mb-20 text-5xl font-semibold">
        Employee Management System
      </h1>
      <div className="border-2 border-emerald-600 p-16 rounded-xl">
        <h2 className="text-center mb-7 text-3xl">Login</h2>
        <form
          onSubmit={(e) => submitHandler(e)}
          className="flex flex-col items-center justify-center"
        >
          <input
            required
            className="outline-none border-2 border-emerald-600 py-2 px-5 rounded-full"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            required
            className="outline-none border-2 border-emerald-600 py-2 px-5 rounded-full mt-3"
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button className="w-full outline-none border-none bg-emerald-600 py-2 px-5 rounded-full mt-3">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
