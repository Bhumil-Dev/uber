import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className=' bg-cover bg-center bg-[url("https://images.unsplash.com/photo-1569349515604-830956556452?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")] h-screen pt-10 w-full flex justify-between flex-col bg-red-400'>
      <img
        className="w-24 ml-10"
        src='https://www.freepnglogos.com/uploads/black-uber-logo-png-6.png'
        alt="Uber logo high-res PNG"
      />

      <div className="flex justify-center items-center pt-4 flex-col pb-10 bg-white gap-5">
        <h1 className=" text-3xl font-bold">Get Started with Uber</h1>
        <Link to="/login" className=" flex justify-center items-center text-xl text-white  px-28 py-4 bg-black rounded-xl ">Continue</Link>
      </div>
    </div>
  );
};

export default Home;
