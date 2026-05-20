import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import TaskForm from "../components/TaskForm";
import TaskCard from "../components/TaskCard";

import API from "../services/api";

function Dashboard() {

  const [tasks, setTasks] = useState([]);

  const [user] = useState(() => {

    try {

      const storedUser =
        localStorage.getItem("user");

      if (
        !storedUser ||
        storedUser === "undefined"
      ) {
        return null;
      }

      return JSON.parse(storedUser);

    } catch (error) {

      console.log(
        "User Parse Error:",
        error
      );

      return null;
    }
  });

  useEffect(() => {

    const getTasks = async () => {

      try {

        const res =
          await API.get("/tasks");

        setTasks(res.data);

      } catch (error) {

        console.log(error);

      }
    };

    getTasks();

  }, []);

  const fetchTasks = async () => {

    try {

      const res =
        await API.get("/tasks");

      setTasks(res.data);

    } catch (error) {

      console.log(error);

    }
  };

  const deleteTask = async (id) => {

    try {

      await API.delete(`/tasks/${id}`);

      setTasks((prevTasks) =>
        prevTasks.filter(
          (task) => task._id !== id
        )
      );

    } catch (error) {

      console.log(error);

    }
  };

  const completedTasks = tasks.filter(
    (task) => task.status === "Completed"
  );

  const pendingTasks = tasks.filter(
    (task) => task.status === "Pending"
  );

  return (

    <div className="min-h-screen bg-[#f5f7fb]">

      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* Welcome Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10">

          <div>

            <p className="text-sm text-gray-500 uppercase tracking-widest">
              Dashboard
            </p>

            <h1 className="text-4xl font-bold text-gray-900 mt-2">

              Welcome back,
              {" "}

              <span className="text-blue-600">
                {user?.name || "User"}
              </span>

            </h1>

            <p className="text-gray-500 mt-3 text-lg">
              Stay productive and manage your tasks efficiently.
            </p>

          </div>

        </div>


        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

          {/* Total */}
          <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm hover:shadow-md transition">

            <p className="text-gray-500 text-sm">
              Total Tasks
            </p>

            <h2 className="text-4xl font-bold text-gray-900 mt-4">
              {tasks.length}
            </h2>

          </div>

          {/* Completed */}
          <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm hover:shadow-md transition">

            <p className="text-gray-500 text-sm">
              Completed
            </p>

            <h2 className="text-4xl font-bold text-green-600 mt-4">
              {completedTasks.length}
            </h2>

          </div>

          {/* Pending */}
          <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm hover:shadow-md transition">

            <p className="text-gray-500 text-sm">
              Pending
            </p>

            <h2 className="text-4xl font-bold text-orange-500 mt-4">
              {pendingTasks.length}
            </h2>

          </div>

        </div>


        {/* Task Form Section */}
        <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm mb-10">

          <div className="mb-6">

            <h2 className="text-2xl font-semibold text-gray-900">
              Create New Task
            </h2>

            <p className="text-gray-500 mt-1">
              Organize your workflow efficiently
            </p>

          </div>

          <TaskForm fetchTasks={fetchTasks} />

        </div>


        {/* Tasks */}
        <div>

          <div className="flex items-center justify-between mb-6">

            <div>

              <h2 className="text-2xl font-semibold text-gray-900">
                Your Tasks
              </h2>

              <p className="text-gray-500 mt-1">
                Manage and track your progress
              </p>

            </div>

          </div>

          {tasks.length > 0 ? (

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {tasks.map((task) => (

                <TaskCard
                  key={task._id}
                  task={task}
                  fetchTasks={fetchTasks}
                  deleteTask={deleteTask}
                />

              ))}

            </div>

          ) : (

            <div className="bg-white rounded-3xl border border-dashed border-gray-300 p-16 text-center">

              <h3 className="text-xl font-semibold text-gray-700">
                No Tasks Yet
              </h3>

              <p className="text-gray-500 mt-2">
                Start by creating your first task.
              </p>

            </div>

          )}

        </div>

      </div>

    </div>
  );
}

export default Dashboard;