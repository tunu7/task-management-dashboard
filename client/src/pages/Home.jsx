import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen bg-gray-100">

      {/* Navbar */}
      <nav className="bg-white shadow">

        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          <h1 className="text-2xl font-bold text-blue-600">
            Task Manager
          </h1>

          <div className="space-x-4">

            <Link
              to="/login"
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="bg-green-500 text-white px-4 py-2 rounded"
            >
              Register
            </Link>

          </div>
        </div>
      </nav>


      {/* Hero Section */}
      <section className="flex flex-col justify-center items-center text-center py-24 px-6">

        <h1 className="text-5xl font-bold text-gray-800 max-w-3xl leading-tight">
          Manage Your Tasks Efficiently
        </h1>

        <p className="text-gray-600 mt-6 text-lg max-w-2xl">
          A simple and beginner-friendly task management dashboard
          built using MERN Stack with authentication,
          task tracking, and analytics.
        </p>

        <div className="mt-8 space-x-4">

          <Link
            to="/register"
            className="bg-blue-500 text-white px-6 py-3 rounded text-lg"
          >
            Get Started
          </Link>

          <Link
            to="/login"
            className="border border-blue-500 text-blue-500 px-6 py-3 rounded text-lg"
          >
            Login
          </Link>

        </div>
      </section>


      {/* Features Section */}
      <section className="max-w-6xl mx-auto px-6 pb-20">

        <h2 className="text-3xl font-bold text-center mb-12">
          Features
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-xl font-bold mb-3">
              Authentication
            </h3>

            <p className="text-gray-600">
              Secure login and registration system using JWT authentication.
            </p>
          </div>


          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-xl font-bold mb-3">
              Task Management
            </h3>

            <p className="text-gray-600">
              Create, update, delete, and manage all your daily tasks easily.
            </p>
          </div>


          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-xl font-bold mb-3">
              Dashboard Analytics
            </h3>

            <p className="text-gray-600">
              Track completed and pending tasks with a clean dashboard UI.
            </p>
          </div>

        </div>
      </section>


      {/* Footer */}
      <footer className="bg-white border-t py-6 text-center text-gray-500">
        © 2026 Task Manager Dashboard
      </footer>

    </div>
  );
}

export default Home;