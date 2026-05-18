import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import TaskForm from "../components/TaskForm";
import TaskCard from "../components/TaskCard";

import API from "../services/api";

function Dashboard() {
  const [tasks, setTasks] = useState([]);

  // Load Tasks
  useEffect(() => {

    const getTasks = async () => {
      try {
        const res = await API.get("/tasks");

        // Update state
        setTasks(res.data);

      } catch (error) {
        console.log(error);
      }
    };

    getTasks();

  }, []);

  // Fetch Tasks Function
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

      // Remove deleted task instantly
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

        {/* Dashboard Cards */}
        <div className="grid md:grid-cols-3 gap-4 mb-6">

          {/* Total */}
          <div className="bg-blue-500 text-white p-6 rounded shadow">

            <h2 className="text-xl">
              Total Tasks
            </h2>

            <p className="text-3xl font-bold mt-2">
              {tasks.length}
            </p>

          </div>

          {/* Completed */}
          <div className="bg-green-500 text-white p-6 rounded shadow">

            <h2 className="text-xl">
              Completed
            </h2>

            <p className="text-3xl font-bold mt-2">
              {completedTasks.length}
            </p>

          </div>

          {/* Pending */}
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
                deleteTask={deleteTask}
              />
            ))

          ) : (

            <p>No Tasks Found</p>

          )}

        </div>

      </div>

    </div>
  );
}

export default Dashboard;