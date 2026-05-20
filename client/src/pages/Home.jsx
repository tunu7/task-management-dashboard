import { Link } from "react-router-dom";

function Home() {

  return (

    <div className="min-h-screen bg-[#f8fafc] text-gray-900">

      {/* Navbar */}
      <nav className="border-b border-gray-200 bg-white/70 backdrop-blur-lg sticky top-0 z-50">

        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

          <h1 className="text-2xl font-bold tracking-tight">
            TaskFlow
          </h1>

          <div className="flex items-center gap-4">

            <Link
              to="/login"
              className="text-gray-700 hover:text-black transition"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="bg-black text-white px-5 py-2.5 rounded-full hover:opacity-90 transition"
            >
              Get Started
            </Link>

          </div>

        </div>

      </nav>


      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-28">

        <div className="max-w-4xl">

          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm mb-8">

            <span className="text-sm text-gray-600">
              Minimal Task Management Platform
            </span>

          </div>

          <h1 className="text-6xl md:text-7xl font-bold leading-tight tracking-tight">

            Organize your work.
            <br />

            Focus on what matters.

          </h1>

          <p className="text-xl text-gray-500 mt-8 max-w-2xl leading-relaxed">

            A modern and elegant task management dashboard
            built with the MERN Stack for productivity,
            organization, and seamless workflow management.

          </p>

          <div className="flex flex-wrap items-center gap-4 mt-10">

            <Link
              to="/register"
              className="bg-black text-white px-7 py-4 rounded-full text-lg hover:scale-105 transition"
            >
              Start Free
            </Link>

            <Link
              to="/login"
              className="border border-gray-300 bg-white px-7 py-4 rounded-full text-lg hover:bg-gray-50 transition"
            >
              Login
            </Link>

          </div>

        </div>

      </section>


      {/* Features */}
      <section className="max-w-7xl mx-auto px-6 pb-24">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition">

            <div className="w-12 h-12 rounded-2xl bg-gray-100 flex items-center justify-center mb-6">
              🔐
            </div>

            <h3 className="text-2xl font-semibold mb-4">
              Secure Authentication
            </h3>

            <p className="text-gray-500 leading-relaxed">
              JWT-based authentication system with secure login,
              registration, and protected routes.
            </p>

          </div>


          <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition">

            <div className="w-12 h-12 rounded-2xl bg-gray-100 flex items-center justify-center mb-6">
              ✅
            </div>

            <h3 className="text-2xl font-semibold mb-4">
              Smart Task Management
            </h3>

            <p className="text-gray-500 leading-relaxed">
              Create, manage, update, and organize your tasks
              with a clean and intuitive experience.
            </p>

          </div>


          <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition">

            <div className="w-12 h-12 rounded-2xl bg-gray-100 flex items-center justify-center mb-6">
              📊
            </div>

            <h3 className="text-2xl font-semibold mb-4">
              Productivity Analytics
            </h3>

            <p className="text-gray-500 leading-relaxed">
              Track your workflow with real-time statistics
              and productivity insights.
            </p>

          </div>

        </div>

      </section>


      {/* Footer */}
      <footer className="border-t border-gray-200 py-8 text-center text-gray-500 bg-white">

        © 2026 TaskFlow. All rights reserved.

      </footer>

    </div>
  );
}

export default Home;