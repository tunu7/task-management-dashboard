import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import TaskForm from "../components/TaskForm";
import TaskCard from "../components/TaskCard";

import API from "../services/api";

function Dashboard() {

  // Tasks State
  const [tasks, setTasks] = useState([]);

  // User State
  const [user] = useState(() => {
    try {

      const storedUser =
        localStorage.getItem("user");

      // Prevent undefined/null issues
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

  // Load Tasks
  useEffect(() => {

    const getTasks = async () => {
      try {

        const res = await API.get("/tasks");

        setTasks(res.data);

      } catch (error) {

        console.log(error);

      }
    };

    getTasks();

  }, []);

  // Fetch Tasks
  const fetchTasks = async () => {
    try {

      const res = await API.get("/tasks");

      setTasks(res.data);

    } catch (error) {

      console.log(error);

    }
  };

  // Delete Task
  const deleteTask = async (id) => {
    try {

      await API.delete(`/tasks/${id}`);

      // Remove Deleted Task Instantly
      setTasks((prevTasks) =>
        prevTasks.filter(
          (task) => task._id !== id
        )
      );

    } catch (error) {

      console.log(error);

    }
  };

  // Completed Tasks
  const completedTasks = tasks.filter(
    (task) => task.status === "Completed"
  );

  // Pending Tasks
  const pendingTasks = tasks.filter(
    (task) => task.status === "Pending"
  );

  return (
    <div>

      {/* Navbar */}
      <Navbar />

      <div className="p-6">

        {/* Welcome Section */}
        <div className="mb-6">

          <h1 className="text-3xl font-bold">

            Welcome,
            {" "}

            <span className="text-blue-600">

              {user?.name || "User"}

            </span>

          </h1>

          <p className="text-gray-600 mt-1">
            Manage your daily tasks efficiently
          </p>

        </div>

        {/* Dashboard Cards */}
        <div className="grid md:grid-cols-3 gap-4 mb-6">

          {/* Total Tasks */}
          <div className="bg-blue-500 text-white p-6 rounded shadow">

            <h2 className="text-xl">
              Total Tasks
            </h2>

            <p className="text-3xl font-bold mt-2">
              {tasks.length}
            </p>

          </div>

          {/* Completed Tasks */}
          <div className="bg-green-500 text-white p-6 rounded shadow">

            <h2 className="text-xl">
              Completed
            </h2>

            <p className="text-3xl font-bold mt-2">
              {completedTasks.length}
            </p>

          </div>

          {/* Pending Tasks */}
          <div className="bg-yellow-500 text-white p-6 rounded shadow">

            <h2 className="text-xl">
              Pending
            </h2>

            <p className="text-3xl font-bold mt-2">
              {pendingTasks.length}
            </p>

          </div>

        </div>

        {/* Task Form */}
        <TaskForm fetchTasks={fetchTasks} />

        {/* Task List */}
        <div className="grid md:grid-cols-2 gap-4 mt-6">

          {tasks.length > 0 ? (

            tasks.map((task) => (
              <TaskCard
                key={task._id}
                task={task}
                fetchTasks={fetchTasks}
                deleteTask={deleteTask}
              />
            ))

          ) : (

            <p className="text-gray-500">
              No Tasks Found
            </p>

          )}

        </div>

      </div>

    </div>
  );
}

export default Dashboard;