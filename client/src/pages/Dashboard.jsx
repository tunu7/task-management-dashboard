// Dashboard.jsx

import { useEffect, useMemo, useState } from "react";

import Navbar from "../components/Navbar";
import TaskForm from "../components/TaskForm";
import TaskCard from "../components/TaskCard";

import API from "../services/api";

function Dashboard() {

  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

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

      console.log(error);

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

      } finally {

        setLoading(false);

      }
    };

    getTasks();

  }, []);

  // ADD TASK
  const addTask = (newTask) => {

    setTasks((prev) => [
      newTask,
      ...prev,
    ]);
  };

  // UPDATE TASK
  const updateTask = (updatedTask) => {

    setTasks((prev) =>
      prev.map((task) =>
        task._id === updatedTask._id
          ? updatedTask
          : task
      )
    );
  };

  // REMOVE TASK
  const removeTask = (id) => {

    setTasks((prev) =>
      prev.filter(
        (task) => task._id !== id
      )
    );
  };

  const completedTasks = useMemo(
    () =>
      tasks.filter(
        (task) =>
          task.status === "Completed"
      ),
    [tasks]
  );

  const pendingTasks = useMemo(
    () =>
      tasks.filter(
        (task) =>
          task.status === "Pending"
      ),
    [tasks]
  );

  if (loading) {

    return (

      <div className="
        min-h-screen
        flex
        items-center
        justify-center
        bg-slate-100
      ">

        <h1 className="text-2xl font-semibold text-slate-700">
          Loading Tasks...
        </h1>

      </div>
    );
  }

  return (

    <div className="
      min-h-screen
      bg-linear-to-br
      from-slate-50
      to-slate-100
    ">

      <Navbar />

      <div className="
        max-w-400
        mx-auto
        px-8
        py-10
      ">

        {/* HEADER */}
        <div className="
          flex
          flex-col
          md:flex-row
          md:items-center
          md:justify-between
          mb-10
        ">

          <div>

            <p className="
              text-sm
              uppercase
              tracking-[0.3em]
              text-blue-600
              font-semibold
            ">
              Productivity Dashboard
            </p>

            <h1 className="
              text-5xl
              font-bold
              text-slate-900
              mt-3
            ">

              Welcome back,
              {" "}

              <span className="text-blue-600">
                {user?.name || "User"}
              </span>

            </h1>

            <p className="
              text-slate-500
              mt-4
              text-lg
            ">
              Manage your tasks and stay productive.
            </p>

          </div>

        </div>

        {/* STATS */}
        <div className="
          grid
          grid-cols-1
          md:grid-cols-3
          gap-6
          mb-10
        ">

          {/* TOTAL */}
          <div className="
            bg-white
            rounded-3xl
            p-7
            shadow-lg
            border
            border-slate-200
            hover:shadow-2xl
            transition-all
            duration-300
          ">

            <p className="
              text-slate-500
              font-medium
            ">
              Total Tasks
            </p>

            <h2 className="
              text-5xl
              font-bold
              text-slate-900
              mt-4
            ">
              {tasks.length}
            </h2>

          </div>

          {/* COMPLETED */}
          <div className="
            bg-white
            rounded-3xl
            p-7
            shadow-lg
            border
            border-slate-200
            hover:shadow-2xl
            transition-all
            duration-300
          ">

            <p className="
              text-slate-500
              font-medium
            ">
              Completed
            </p>

            <h2 className="
              text-5xl
              font-bold
              text-green-600
              mt-4
            ">
              {completedTasks.length}
            </h2>

          </div>

          {/* PENDING */}
          <div className="
            bg-white
            rounded-3xl
            p-7
            shadow-lg
            border
            border-slate-200
            hover:shadow-2xl
            transition-all
            duration-300
          ">

            <p className="
              text-slate-500
              font-medium
            ">
              Pending
            </p>

            <h2 className="
              text-5xl
              font-bold
              text-orange-500
              mt-4
            ">
              {pendingTasks.length}
            </h2>

          </div>

        </div>

        {/* MAIN SECTION */}
        <div className="
          grid
          grid-cols-1
          xl:grid-cols-3
          gap-8
        ">

          {/* LEFT SIDE */}
          <div className="xl:col-span-1">

            <div className="
              bg-white
              rounded-3xl
              border
              border-slate-200
              shadow-xl
              p-8
              sticky
              top-24
            ">

              <TaskForm addTask={addTask} />

            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="xl:col-span-2">

            <div className="mb-6">

              <h2 className="
                text-3xl
                font-bold
                text-slate-900
              ">
                Your Tasks
              </h2>

              <p className="
                text-slate-500
                mt-2
              ">
                Organize and manage your workflow efficiently.
              </p>

            </div>

            {tasks.length > 0 ? (

              <div className="
                grid
                grid-cols-1
                lg:grid-cols-2
                2xl:grid-cols-3
                gap-6
              ">

                {tasks.map((task) => (

                  <TaskCard
                    key={task._id}
                    task={task}
                    updateTask={updateTask}
                    removeTask={removeTask}
                  />

                ))}

              </div>

            ) : (

              <div className="
                bg-white
                rounded-3xl
                border-2
                border-dashed
                border-slate-300
                p-20
                text-center
              ">

                <h3 className="
                  text-3xl
                  font-semibold
                  text-slate-700
                ">
                  No Tasks Yet
                </h3>

                <p className="
                  text-slate-500
                  mt-3
                ">
                  Start by creating your first task.
                </p>

              </div>

            )}

          </div>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;