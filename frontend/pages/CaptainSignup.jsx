import React from 'react'
import { useState } from "react";
import { Link } from "react-router-dom";

const CaptainSignup = () => {
  const [email, setEmail] = useState("");
    const [password, setPassword] = useState(""); 
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [userData, setUserData] = useState({});
    const submitHandler = (e) => {
      e.preventDefault();
      
      setUserData({
       fullName: {
          firstName: firstName,
          lastName: lastName
        },
        email: email,
        password: password,
      });
      setEmail("");
      setPassword("");
      setFirstName(""); 
      setLastName("");
    };
  return (
   <div className=" p-7 h-screen flex flex-col justify-between">
      <div>
        <img
          className="w-24 mb-4"
          src="https://www.freepnglogos.com/uploads/black-uber-logo-png-6.png"
          alt="Uber logo high-res PNG"
        />
        <form onSubmit={submitHandler} className="flex flex-col">
          <h3 className=" text-lg font-medium mb-2">What's your name</h3>
          <div className=" flex gap-4 mb-4">
            <input
              className=" bg-[#eee] border  rounded w-1/2 px-6 py-3 "
              type="text"
              required
              placeholder="First name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              className=" bg-[#eee] border  rounded w-1/2 px-6 py-3 "
              type="text"
              required
              placeholder="Last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <h3 className=" text-lg font-medium mb-2">What's your email</h3>
          <input
            className=" bg-[#eee] border mb-4 rounded w-full px-6 py-3 "
            type="email"
            required
            placeholder="email@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h3 className=" text-lg font-medium mb-2">Enter Password</h3>
          <input
            className=" bg-[#eee] border mb-4 rounded w-full px-6 py-3 "
            type="password"
            required
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="bg-black font-medium text-white w-full px-6 py-3 rounded mt-2">
            Login
          </button>
        </form>
        <p className=" mt-2 text-center">
          Already have an account?
          <Link to="/captain-login" className=" text-blue-700 ">
            Login here
          </Link>
        </p>
      </div>
      <div>
        <p className="text-[13px] text-gray-500 text-center">
         This sitr is protected by reCAPTCHA and the <span className=' underline'>Google Privacy Policy</span> and <span className='underline'>Terms of Service</span> apply.
        </p>
      </div>
    </div>
  )
}

export default CaptainSignup
