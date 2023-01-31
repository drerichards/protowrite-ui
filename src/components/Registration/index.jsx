import React, { useState } from "react";
import axios from "axios";
import { BACKEND_API_URL } from "utils/constants";
import { validateForm } from "./helpers";

const Registration = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
    setErrors({ ...errors, [event.target.name]: "" });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (validateForm(formData, setErrors)) {
      console.log("Registration form is valid");
      const pswd = "abc123def456";
      const newformData = {
        ...formData,
        password: pswd,
        password2: pswd,
      };
      try {
        const response = await axios.post(
          `${BACKEND_API_URL}/register/`,
          newformData
        );
        console.log(response.data);
        if (response.status === 201) {
          await axios.post(`${BACKEND_API_URL}/token/`, newformData);
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-5xl bg-white p-6 rounded-lg">
      <div className="mb-4">
        <label className="block font-bold mb-2 text-gray-700" htmlFor="name">
          Username
        </label>
        <input
          type="text"
          className={`w-full p-2 border border-gray-400 ${
            errors.name ? "border-red-500" : ""
          }`}
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && (
          <p className="text-red-500 text-xs italic mt-2">{errors.name}</p>
        )}
      </div>
      <div className="mb-4">
        <label className="block font-bold mb-2 text-gray-700" htmlFor="email">
          Email
        </label>
        <input
          type="email"
          className={`w-full p-2 border border-gray-400 ${
            errors.email ? "border-red-500" : ""
          }`}
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && (
          <p className="text-red-500  text-xs italic mt-2">{errors.name}</p>
        )}
      </div>
      <div className="mb-4">
        <label
          className="block font-bold mb-2 text-gray-700"
          htmlFor="password"
        >
          Password
        </label>
        <input
          type="password"
          className={`w-full p-2 border border-gray-400 ${
            errors.password ? "border-red-500" : ""
          }`}
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && (
          <p className="text-red-500 text-xs italic mt-2">{errors.password}</p>
        )}
      </div>
      <div className="mb-4">
        <label
          className="block font-bold mb-2 text-gray-700"
          htmlFor="password"
        >
          Confirm Password
        </label>
        <input
          type="password"
          className={`w-full p-2 border border-gray-400 ${
            errors.password2 ? "border-red-500" : ""
          }`}
          id="password2"
          name="password2"
          value={formData.password2}
          onChange={handleChange}
        />
        {errors.password2 && (
          <p className="text-red-500 text-xs italic mt-2">{errors.password2}</p>
        )}
      </div>
      <button
        type="submit"
        className="bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-600"
      >
        Register
      </button>
    </form>
  );
};

export default Registration;
