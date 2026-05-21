// TaskCard.jsx

import { useState } from "react";
import API from "../services/api";

function TaskCard({
  task,
  updateTask,
  removeTask,
}) {

  const [isEditing, setIsEditing] =
    useState(false);

  const [editData, setEditData] =
    useState({
      title: task.title,
      description: task.description,
      priority: task.priority,
      dueDate: task.dueDate
        ? task.dueDate.split("T")[0]
        : "",
      status: task.status,
    });

  const handleChange = (e) => {

    setEditData({
      ...editData,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = async () => {

    try {

      const res =
        await API.put(
          `/tasks/${task._id}`,
          editData
        );

      updateTask(res.data);

      setIsEditing(false);

    } catch (error) {

      console.log(error);

    }
  };

  const handleDelete = async () => {

    try {

      await API.delete(
        `/tasks/${task._id}`
      );

      removeTask(task._id);

    } catch (error) {

      console.log(error);

    }
  };

  const priorityColors = {
    Low:
      "bg-green-100 text-green-700",
    Medium:
      "bg-yellow-100 text-yellow-700",
    High:
      "bg-red-100 text-red-700",
  };

  return (

    <div className="
      bg-white
      border
      border-slate-200
      rounded-3xl
      p-6
      shadow-lg
      hover:shadow-2xl
      hover:-translate-y-1
      transition-all
      duration-300
    ">

      {isEditing ? (

        <div>

          <input
            type="text"
            name="title"
            value={editData.title}
            onChange={handleChange}
            className="
              w-full
              border
              border-slate-200
              bg-slate-50
              rounded-2xl
              px-4
              py-3
              mb-4
            "
          />

          <textarea
            name="description"
            value={editData.description}
            onChange={handleChange}
            rows="4"
            className="
              w-full
              border
              border-slate-200
              bg-slate-50
              rounded-2xl
              px-4
              py-3
              mb-4
            "
          />

          <select
            name="priority"
            value={editData.priority}
            onChange={handleChange}
            className="
              w-full
              border
              border-slate-200
              bg-slate-50
              rounded-2xl
              px-4
              py-3
              mb-4
            "
          >

            <option>Low</option>
            <option>Medium</option>
            <option>High</option>

          </select>

          <input
            type="date"
            name="dueDate"
            value={editData.dueDate}
            onChange={handleChange}
            className="
              w-full
              border
              border-slate-200
              bg-slate-50
              rounded-2xl
              px-4
              py-3
              mb-4
            "
          />

          <select
            name="status"
            value={editData.status}
            onChange={handleChange}
            className="
              w-full
              border
              border-slate-200
              bg-slate-50
              rounded-2xl
              px-4
              py-3
              mb-4
            "
          >

            <option>Pending</option>
            <option>Completed</option>

          </select>

          <div className="flex gap-3">

            <button
              onClick={handleUpdate}
              className="
                flex-1
                bg-blue-600
                hover:bg-blue-700
                text-white
                py-3
                rounded-2xl
                font-semibold
              "
            >
              Save
            </button>

            <button
              onClick={() =>
                setIsEditing(false)
              }
              className="
                flex-1
                bg-slate-200
                hover:bg-slate-300
                text-slate-700
                py-3
                rounded-2xl
                font-semibold
              "
            >
              Cancel
            </button>

          </div>

        </div>

      ) : (

        <div>

          <div className="
            flex
            items-start
            justify-between
            gap-4
          ">

            <div>

              <h2 className="
                text-2xl
                font-bold
                text-slate-900
              ">
                {task.title}
              </h2>

              <p className="
                text-slate-500
                mt-3
                leading-relaxed
              ">
                {task.description}
              </p>

            </div>

            <span
              className={`
                px-4
                py-1
                rounded-full
                text-sm
                font-semibold
                whitespace-nowrap
                ${priorityColors[task.priority]}
              `}
            >
              {task.priority}
            </span>

          </div>

          <div className="
            mt-6
            space-y-3
          ">

            <div className="
              flex
              items-center
              justify-between
            ">

              <p className="
                text-slate-500
                font-medium
              ">
                Status
              </p>

              <span
                className={`
                  px-3
                  py-1
                  rounded-full
                  text-sm
                  font-semibold
                  ${
                    task.status ===
                    "Completed"
                      ? "bg-green-100 text-green-700"
                      : "bg-orange-100 text-orange-700"
                  }
                `}
              >
                {task.status}
              </span>

            </div>

            <div className="
              flex
              items-center
              justify-between
            ">

              <p className="
                text-slate-500
                font-medium
              ">
                Due Date
              </p>

              <p className="
                text-slate-700
                font-semibold
              ">
                {task.dueDate
                  ? new Date(
                      task.dueDate
                    ).toLocaleDateString()
                  : "No Date"}
              </p>

            </div>

          </div>

          <div className="
            flex
            gap-3
            mt-8
          ">

            <button
              onClick={() =>
                setIsEditing(true)
              }
              className="
                flex-1
                bg-blue-600
                hover:bg-blue-700
                text-white
                py-3
                rounded-2xl
                font-semibold
                transition-all
                duration-300
              "
            >
              Edit
            </button>

            <button
              onClick={handleDelete}
              className="
                flex-1
                bg-red-500
                hover:bg-red-600
                text-white
                py-3
                rounded-2xl
                font-semibold
                transition-all
                duration-300
              "
            >
              Delete
            </button>

          </div>

        </div>

      )}

    </div>
  );
}

export default TaskCard;