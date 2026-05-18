import { useState } from "react";

import {
  Link,
  useNavigate,
} from "react-router-dom";

import API from "../services/api";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

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
      await API.post(
        "/auth/register",
        formData
      );

      alert(
        "Registration successful"
      );

      navigate("/");
    } catch (error) {
      console.log(error);

      alert("Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">

      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md w-96"
      >

        <h1 className="text-3xl font-bold mb-6 text-center">
          Register
        </h1>

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
          className="border p-3 w-full mb-4 rounded"
          required
        />

        {/* Password */}
        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={formData.password}
          onChange={handleChange}
          className="border p-3 w-full mb-4 rounded"
          required
        />

        {/* Button */}
        <button
          type="submit"
          disabled={loading}
          className="bg-green-500 hover:bg-green-600 text-white w-full py-3 rounded"
        >
          {loading
            ? "Registering..."
            : "Register"}
        </button>

        {/* Login Link */}
        <p className="mt-4 text-center">

          Already have an account?{" "}

          <Link
            to="/"
            className="text-blue-500"
          >
            Login
          </Link>

        </p>

      </form>
    </div>
  );
}

export default Register;