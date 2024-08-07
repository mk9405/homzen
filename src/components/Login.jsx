import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Aos from "aos";

export default function Login({ handleClose }) {
  useEffect(()=>{
    Aos.init({duration:300})
  },[])
  return (
    <div>
      <div data-aos="zoom-in" className="absolute right-[35%] top-[50%] rounded-xl bg-[#f1f1f1] border-2 w-[500px] p-8 max-sm:right-2 max-sm:top-16 max-sm:w-[400px]">
        <div
          onClick={handleClose}
          className="close-btn absolute right-4 top-2 text-4xl"
        >
          &times;
        </div>
        <h1 className="text-3xl font-bold text-center py-2">Login</h1>
        <form>
          <label className="text-xl font-semibold  py-2">Your Name:</label>
          <input
            className="border-2 w-full py-4 focus:outline-none my-2 rounded-lg px-2  "
            placeholder="Enter Your Name"
            type="text"
            // value={username}
            // onChange={(event) => setUsername(event.target.value)}
          />
          <br />
          <label className="text-xl font-semibold mx-2 py-2">Password:</label>
          <input
            className="border-2 w-full focus:outline-none py-4 my-2 rounded-lg px-2 "
            placeholder="Enter Your Password"
            type="password"
            // value={password}
            // onChange={(event) => setPassword(event.target.value)}
          />
          <br />
          <div className="flex w-full justify-between py-4 items-center">
          <div className="flex gap-2">
            <input type="checkbox" />
            <label>Remember Me</label>
          </div>
          <h1 className="text-sky-500 text-center mb-2">Forgot Password ?</h1>
          </div>
          <div className="flex gap-1 items-center r text-gray-500 py-2">
           <hr className="w-[40%]"/>or sign up with <hr className="flex-1 "/>
          </div>
          <div className="text-center mb-4">
            <h1 className="py-3 border-2 bg-white rounded-xl hover:bg-red-500 hover:text-white duration-500 mb-2 ">Continue with Facebook</h1>
            <h1 className="py-3 border-2 bg-white rounded-xl hover:bg-red-500 hover:text-white duration-500 mb-2 ">Continue with Google</h1>
          </div>
          <button
            className="text-xl rounded-lg text-white bg-red-500 w-full font-bold py-2"
            type="submit"
          >
            Login
          </button>
          <h1 className="text-center my-2">
            Don't have an account?
            <Link to="/" className="text-sky-500">
              Sign Up
            </Link>
          </h1>
        </form>
      </div>
    </div>
  );
}
