import React, { useState } from "react";
import { Link } from "react-router-dom";

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState("")

    const submitHandler = (e) => {
    e.preventDefault();
        setUserData({
        email: email,
        password: password,
        })        
    setEmail("");
    setPassword("");    

    }

  return (
    <div className=" p-7 h-screen flex flex-col justify-between">
      <div>
        <img
          className="w-24 mb-4"
          src="https://www.freepnglogos.com/uploads/black-uber-logo-png-6.png"
          alt="Uber logo high-res PNG"
        />
        <form onSubmit={(e) => {
          submitHandler(e);
        }} className="flex flex-col">
          <h3 className=" text-lg font-medium mb-2">What's your email</h3>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className=" bg-[#eee] border mb-4 rounded w-full px-6 py-3 "
            type="email"
            required
            placeholder="email@example.com"
          />
          <h3 className=" text-lg font-medium mb-2">Enter Password</h3>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className=" bg-[#eee] border mb-4 rounded w-full px-6 py-3 "
            type="password"
            required
            placeholder="password"
          />
          <button className="bg-black font-medium text-white w-full px-6 py-3 rounded mt-4">
            Login
          </button>
        </form>
        <p className=" mt-3 text-center">
          New here?
          <Link to="/signup" className=" text-blue-700 ">
            Create new Account
          </Link>
        </p>
      </div>
      <div>
        <Link to="/captain-login" className="flex justify-center items-center bg-[#0a603b] text-lg font-medium text-white w-full px-6 py-3 rounded mt-4">
          Sign in as Captain
        </Link>
      </div>
    </div>
  );
};

export default UserLogin;
