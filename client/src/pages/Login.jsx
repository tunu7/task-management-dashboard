import { useState } from "react";
import {
  Link,
  useNavigate,
} from "react-router-dom";

import API from "../services/api";

function Login() {
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

  // Handle Login
  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const res = await API.post(
        "/auth/login",
        formData
      );

      // Save Token
      localStorage.setItem(
        "token",
        res.data.token
      );

      // Redirect
      navigate("/dashboard");
    } catch (error) {
      console.log(error);

      alert("Invalid credentials");
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
          Login
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
          className="bg-blue-500 hover:bg-blue-600 text-white w-full py-3 rounded"
        >
          {loading
            ? "Logging in..."
            : "Login"}
        </button>

        {/* Register Link */}
        <p className="mt-4 text-center">

          No account?{" "}

          <Link
            to="/register"
            className="text-blue-500"
          >
            Register
          </Link>

        </p>

      </form>
    </div>
  );
}

export default Login;