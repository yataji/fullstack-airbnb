import React from "react";
import { CardDefault } from "../Components/regLog";
import logo from "../assets/logo.svg";

function Register() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="sm:w-[70%] w-[90%] sm:h-[80%] h-full flex flex-col justify-center items-center shadow-2xl border border-[#FF385C] rounded-xl gap-5">
        <img src={logo} alt="logo" className="sm:w-56 mt-5" />
        <div className="flex grow flex-col w-full sm:flex-row justify-center items-center">
          <CardDefault type="Login" />
          <div className="w-0.5 bg-gray-300 h-[70%]"></div>
          <CardDefault type="Register" />
        </div>
      </div>
    </div>
  );
}

export default Register;
