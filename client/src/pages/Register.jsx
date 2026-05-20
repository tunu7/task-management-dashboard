import { useState } from "react";

import {
  Link,
  useNavigate,
} from "react-router-dom";

import API from "../services/api";

function Register() {

  const navigate = useNavigate();

  const [formData, setFormData] =
    useState({
      name: "",
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

      const response =
        await API.post(
          "/auth/register",
          formData
        );

      console.log(response.data);

      alert(
        "Registration successful"
      );

      navigate("/login");

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

    <div className="min-h-screen bg-[#f8fafc] flex items-center justify-center px-6">

      <div className="w-full max-w-6xl grid lg:grid-cols-2 bg-white rounded-[4xl] overflow-hidden shadow-xl border border-gray-100">

        {/* Left Side */}
        <div className="hidden lg:flex flex-col justify-between bg-linear-to-br from-black to-gray-800 text-white p-14">

          <div>

            <h1 className="text-5xl font-bold leading-tight">

              Start managing
              <br />

              your tasks smarter

            </h1>

            <p className="text-gray-300 mt-6 text-lg leading-relaxed">

              Create an account and experience
              a modern productivity dashboard
              built for focus and efficiency.

            </p>

          </div>

          <div className="space-y-6">

            <div className="bg-white/10 border border-white/10 rounded-2xl p-5 backdrop-blur">

              <p className="text-sm text-gray-300 mb-2">
                Organize Better
              </p>

              <h3 className="text-2xl font-semibold">
                Manage daily workflows easily
              </h3>

            </div>

            <div className="bg-white/10 border border-white/10 rounded-2xl p-5 backdrop-blur">

              <p className="text-sm text-gray-300 mb-2">
                Stay Productive
              </p>

              <h3 className="text-2xl font-semibold">
                Track progress in real time
              </h3>

            </div>

          </div>

        </div>


        {/* Right Side */}
        <div className="p-8 md:p-14 flex flex-col justify-center">

          <div className="mb-10">

            <p className="text-sm uppercase tracking-[0.2em] text-gray-400 mb-3">
              Register
            </p>

            <h2 className="text-4xl font-bold text-gray-900">
              Create your account
            </h2>

            <p className="text-gray-500 mt-3 text-lg">
              Join TaskFlow and start managing your productivity.
            </p>

          </div>


          <form
            onSubmit={handleSubmit}
            className="space-y-6"
          >

            {/* Name */}
            <div>

              <label className="text-sm font-medium text-gray-700 mb-2 block">
                Full Name
              </label>

              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-200 bg-gray-50 rounded-2xl px-5 py-4 outline-none focus:border-black transition"
                required
              />

            </div>


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
                placeholder="Create password"
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
                ? "Creating account..."
                : "Create Account"}

            </button>

          </form>


          {/* Login Link */}
          <p className="mt-8 text-gray-500 text-center">

            Already have an account?
            {" "}

            <Link
              to="/login"
              className="text-black font-semibold hover:underline"
            >
              Sign in
            </Link>

          </p>

        </div>

      </div>

    </div>
  );
}

export default Register;