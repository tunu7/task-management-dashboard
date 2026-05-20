import { useState } from "react";

import {
  Link,
  useNavigate,
} from "react-router-dom";

import API from "../services/api";

function Login() {

  const navigate = useNavigate();

  const [formData, setFormData] =
    useState({
      email: "",
      password: "",
    });

  const [loading, setLoading] =
    useState(false);

  const handleChange = (e) => {

    setFormData((prev) => ({
      ...prev,
      [e.target.name]:
        e.target.value,
    }));

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    setLoading(true);

    try {

      const res = await API.post(
        "/auth/login",
        formData
      );

      localStorage.setItem(
        "token",
        res.data.token
      );

      localStorage.setItem(
        "user",
        JSON.stringify(res.data.user)
      );

      navigate("/dashboard");

    } catch (error) {

      console.log(
        error.response?.data
      );

      alert("Invalid credentials");

    } finally {

      setLoading(false);

    }
  };

  return (

    <div className="min-h-screen bg-[#f8fafc] flex items-center justify-center px-6">

      <div className="w-full max-w-6xl grid lg:grid-cols-2 bg-white rounded-[4xl] overflow-hidden shadow-xl border border-gray-100">

        {/* Left Side */}
        <div className="hidden lg:flex flex-col justify-between bg-black text-white p-14">

          <div>

            <h1 className="text-4xl font-bold leading-tight">

              Welcome back to
              <br />

              TaskFlow

            </h1>

            <p className="text-gray-400 mt-6 text-lg leading-relaxed">

              Manage your productivity,
              organize tasks, and stay focused
              with a modern workflow experience.

            </p>

          </div>

          <div className="space-y-6">

            <div className="border border-white/10 rounded-2xl p-5 bg-white/5 backdrop-blur">

              <p className="text-sm text-gray-400 mb-2">
                Productivity
              </p>

              <h3 className="text-2xl font-semibold">
                Simplified task management
              </h3>

            </div>

            <div className="border border-white/10 rounded-2xl p-5 bg-white/5 backdrop-blur">

              <p className="text-sm text-gray-400 mb-2">
                Dashboard
              </p>

              <h3 className="text-2xl font-semibold">
                Clean & modern experience
              </h3>

            </div>

          </div>

        </div>


        {/* Right Side */}
        <div className="p-8 md:p-14 flex flex-col justify-center">

          <div className="mb-10">

            <p className="text-sm uppercase tracking-[0.2em] text-gray-400 mb-3">
              Login
            </p>

            <h2 className="text-4xl font-bold text-gray-900">
              Sign in to your account
            </h2>

            <p className="text-gray-500 mt-3 text-lg">
              Continue managing your tasks efficiently.
            </p>

          </div>


          <form
            onSubmit={handleSubmit}
            className="space-y-6"
          >

            {/* Email */}
            <div>

              <label className="text-sm font-medium text-gray-700 mb-2 block">
                Email Address
              </label>

              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-200 bg-gray-50 rounded-2xl px-5 py-4 outline-none focus:border-black transition"
                required
              />

            </div>


            {/* Password */}
            <div>

              <label className="text-sm font-medium text-gray-700 mb-2 block">
                Password
              </label>

              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                className="w-full border border-gray-200 bg-gray-50 rounded-2xl px-5 py-4 outline-none focus:border-black transition"
                required
              />

            </div>


            {/* Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-black text-white py-4 rounded-2xl font-semibold hover:opacity-90 transition disabled:opacity-70"
            >

              {loading
                ? "Signing in..."
                : "Sign In"}

            </button>

          </form>


          {/* Register Link */}
          <p className="mt-8 text-gray-500 text-center">

            Don’t have an account?
            {" "}

            <Link
              to="/register"
              className="text-black font-semibold hover:underline"
            >
              Create account
            </Link>

          </p>

        </div>

      </div>

    </div>
  );
}

export default Login;