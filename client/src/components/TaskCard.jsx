function TaskCard({ task, deleteTask }) {
  return (
    <div className="bg-white p-4 rounded shadow">

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

      <button
        onClick={() => deleteTask(task._id)}
        className="bg-red-500 text-white px-4 py-2 rounded mt-4"
      >
        Delete
      </button>
    </div>
  );
}

export default TaskCard;