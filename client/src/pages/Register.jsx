import { useState } from "react";

import {
  Link,
  useNavigate,
} from "react-router-dom";

import API from "../services/api";

function Register() {
  const navigate = useNavigate();

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  // Loading State
  const [loading, setLoading] =
    useState(false);

  // Handle Input Change
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]:
        e.target.value,
    }));
  };

  // Handle Register
  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await API.post(
        "/auth/register",
        formData
      );

      console.log(response.data);

      alert(
        "Registration successful"
      );

      navigate("/");
    } catch (error) {
      console.log(
        error.response?.data
      );

      alert(
        error.response?.data
          ?.message ||
          "Registration failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">

      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-md"
      >

        {/* Title */}
        <h1 className="text-3xl font-bold mb-6 text-center">
          Register
        </h1>

        {/* Name Input */}
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={formData.name}
          onChange={handleChange}
          className="border p-3 w-full mb-4 rounded outline-none focus:ring-2 focus:ring-green-400"
          required
        />

        {/* Email Input */}
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
          className="border p-3 w-full mb-4 rounded outline-none focus:ring-2 focus:ring-green-400"
          required
        />

        {/* Password Input */}
        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={formData.password}
          onChange={handleChange}
          className="border p-3 w-full mb-6 rounded outline-none focus:ring-2 focus:ring-green-400"
          required
        />

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="bg-green-500 hover:bg-green-600 transition text-white w-full py-3 rounded font-semibold"
        >
          {loading
            ? "Registering..."
            : "Register"}
        </button>

        {/* Login Link */}
        <p className="mt-4 text-center text-sm">

          Already have an account?{" "}

          <Link
            to="/"
            className="text-blue-500 hover:underline"
          >
            Login
          </Link>

        </p>

      </form>
    </div>
  );
}

export default Register;