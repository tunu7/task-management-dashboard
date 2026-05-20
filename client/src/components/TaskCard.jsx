import { useState } from "react";
import API from "../services/api";

function TaskCard({ task, fetchTasks, deleteTask }) {

  const [isEditing, setIsEditing] = useState(false);

  const [editData, setEditData] = useState({
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

  const updateTask = async () => {
    try {
      await API.put(
        `/tasks/${task._id}`,
        editData
      );

      setIsEditing(false);

      fetchTasks();

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-white p-4 rounded shadow">

      {isEditing ? (

        <div>

          <input
            type="text"
            name="title"
            value={editData.title}
            onChange={handleChange}
            className="border p-2 w-full mb-3"
          />

          <textarea
            name="description"
            value={editData.description}
            onChange={handleChange}
            className="border p-2 w-full mb-3"
          />

          <select
            name="priority"
            value={editData.priority}
            onChange={handleChange}
            className="border p-2 w-full mb-3"
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
            className="border p-2 w-full mb-3"
          />

          <select
            name="status"
            value={editData.status}
            onChange={handleChange}
            className="border p-2 w-full mb-3"
          >
            <option>Pending</option>
            <option>Completed</option>
          </select>

          <div className="flex gap-2">

            <button
              onClick={updateTask}
              className="bg-green-500 text-white px-4 py-2 rounded"
            >
              Save
            </button>

            <button
              onClick={() => setIsEditing(false)}
              className="bg-gray-500 text-white px-4 py-2 rounded"
            >
              Cancel
            </button>

          </div>

        </div>

      ) : (

        <div>

          <div className="flex justify-between items-start">

            <div>
              <h2 className="text-xl font-bold">
                {task.title}
              </h2>

              <p className="text-gray-600 mt-1">
                {task.description}
              </p>
            </div>

            <span className="bg-gray-200 px-3 py-1 rounded text-sm">
              {task.priority}
            </span>

          </div>

          <div className="mt-4 space-y-1">

            <p>
              <strong>Status:</strong> {task.status}
            </p>

            <p>
              <strong>Due Date:</strong>{" "}
              {task.dueDate
                ? new Date(task.dueDate).toLocaleDateString()
                : "No Date"}
            </p>

          </div>

          <div className="flex gap-2 mt-4">

            <button
              onClick={() => setIsEditing(true)}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Edit
            </button>

            <button
              onClick={() => deleteTask(task._id)}
              className="bg-red-500 text-white px-4 py-2 rounded"
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