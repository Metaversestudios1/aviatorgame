import React, { useEffect, useState } from "react";
import { IoMdEyeOff } from "react-icons/io";
import { IoEye } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import currencyOptions from "./../../services/currencies.json";
import Select from "react-select";
import "./../../assets/styles/Register.css";

export default function Email() {
  const navigate = useNavigate();
  const initialState = {
    password: "",
    email: "",
    currency: "",
  };
  const [data, setData] = useState(initialState);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(`http://localhost:8000/api/insertuser`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const response = await res.json();
    if (response.success) {
      navigate("/home");
    }
  };
  const sendOTP = () => {};
  const confirmOTP = () => {};
  const handleChange = (e) => {
    console.log(e.target);
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  // Custom styles for the Select component
  const customStyles = {
    control: (provided) => ({
      ...provided,
      background: "transparent", // Set background to transparent
      border: "2px solid #dc2626", // Match the border color with your design
      boxShadow: "none",
      "&:hover": {
        border: "2px solid #dc2626", // Maintain the border color on hover
      },
    }),
    menu: (provided) => ({
      ...provided,
      background: "#1F1F1F", // Background color for the dropdown menu
    }),
    option: (provided, state) => ({
      ...provided,
      color: "white", // Text color for options
      background: state.isSelected ? "#dc2626" : "transparent", // Background color for selected option
      "&:hover": {
        background: "#dc2626", // Background color on hover
      },
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "white", // Text color for the selected value
    }),
  };
  console.log(data);

  return (
    <div className="flex flex-col gap-3">
      <form action="">
        <div className="flex flex-col md:flex-row md:justify-between gap-4 md:items-center">
          <div className="flex flex-col gap-2">
            <p className="text-white font-medium">Your Email Id*</p>
            <div className="border-2 border-red-600 rounded-sm overflow-hidden">
              <div className="flex justify-between">
                <input
                  name="email"
                  value={data.email}
                  onChange={handleChange}
                  type="email"
                  placeholder="Enter your Email Id"
                  className="bg-transparent outline-none flex-grow text-white p-2"
                />
                <button
                  onClick={sendOTP}
                  className="bg-sky-600 text-sm text-white px-4 hover:bg-sky-300 hover:text-sky-600"
                >
                  Send Mail
                </button>
              </div>
            </div>
            <div className="border-2 border-red-600 flex justify-between mt-4">
              <input
                type="text"
                placeholder="Confirmation Code"
                className="bg-transparent text-white p-2 outline-none"
              />
              <button
                onClick={confirmOTP}
                className="bg-sky-300 text-sm text-sky-600 px-4 hover:bg-sky-600 hover:text-white"
              >
                Confirm
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="w-72 flex flex-col gap-2">
              <p className="text-white font-medium">Select Currency*</p>
              <Select
                options={currencyOptions}
                name="currency"
                value={data.currency}
                onChange={handleChange}
                placeholder="Select currency"
                styles={customStyles}
              />
            </div>
            <div className="border-2 border-red-600 mt-4 rounded-sm">
              <input
                type="text"
                placeholder="Promo Code (if you have one)"
                className="w-full bg-transparent text-white p-2 outline-none"
              />
            </div>
          </div>
        </div>
        <div className="border-2 border-red-700 p-1 rounded-sm flex items-center md:w-1/2 md:mx-auto my-4 p-2">
          <input
            name="password"
            value={data.password}
            onClick={handleChange}
            type={passwordVisible ? "text" : "password"}
            placeholder="Password*"
            className="bg-transparent outline-none flex-grow text-white"
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="text-white ml-2"
          >
            {passwordVisible ? (
              <IoEye className="text-sky-500" />
            ) : (
              <IoMdEyeOff className="text-sky-500" />
            )}
          </button>
        </div>
        <button
          onClick={handleSubmit}
          className="bg-red-600 text-white uppercase p-2 font-medium"
        >
          Register
        </button>
      </form>
      <p className="text-sm text-white mx-auto my-6">
        Already have an account?{" "}
        <Link to={"/"} className="text-sky-400">
          Login
        </Link>
      </p>
    </div>
  );
}
