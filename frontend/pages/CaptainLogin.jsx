import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const CaptainLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [captainData, setCaptainData] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    setCaptainData({
      email: email,
      password: password,
    });
    // console.log(captainData);

    setEmail("");
    setPassword("");
  };
  return (
    <div className=" p-7 h-screen flex flex-col justify-between">
      <div>
        <img
          className="w-24 mb-4"
          src="https://www.freepnglogos.com/uploads/black-uber-logo-png-6.png"
          alt="Uber logo high-res PNG"
        />
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex flex-col"
        >
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
          Join a fleet?
          <Link to="/captain-signup" className=" text-blue-700 ">
            Register as a Captain
          </Link>
        </p>
      </div>
      <div>
        <Link
          to="/login"
          className="flex justify-center items-center bg-[#f36005] text-lg font-medium text-white w-full px-6 py-3 rounded mt-4"
        >
          Sign in as User
        </Link>
      </div>
    </div>
  );
};

export default CaptainLogin;
