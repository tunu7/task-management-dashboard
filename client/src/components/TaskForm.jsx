// TaskForm.jsx

import { useState } from "react";
import API from "../services/api";

function TaskForm({ addTask }) {

  const [formData, setFormData] =
    useState({
      title: "",
      description: "",
      priority: "Low",
      dueDate: "",
      status: "Pending",
    });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const res =
        await API.post(
          "/tasks",
          formData
        );

      addTask(res.data);

      setFormData({
        title: "",
        description: "",
        priority: "Low",
        dueDate: "",
        status: "Pending",
      });

    } catch (error) {

      console.log(error);

    }
  };

  return (

    <form onSubmit={handleSubmit}>

      <div className="mb-8">

        <h2 className="
          text-3xl
          font-bold
          text-slate-900
        ">
          Create Task
        </h2>

        <p className="
          text-slate-500
          mt-2
        ">
          Add a new task to your workflow.
        </p>

      </div>

      <input
        type="text"
        name="title"
        placeholder="Task Title"
        value={formData.title}
        onChange={handleChange}
        required
        className="
          w-full
          border
          border-slate-200
          bg-slate-50
          rounded-2xl
          px-4
          py-3
          outline-none
          focus:ring-2
          focus:ring-blue-500
          transition-all
          duration-300
          mb-4
        "
      />

      <textarea
        name="description"
        placeholder="Task Description"
        value={formData.description}
        onChange={handleChange}
        rows="5"
        className="
          w-full
          border
          border-slate-200
          bg-slate-50
          rounded-2xl
          px-4
          py-3
          outline-none
          focus:ring-2
          focus:ring-blue-500
          transition-all
          duration-300
          mb-4
        "
      />

      <select
        name="priority"
        value={formData.priority}
        onChange={handleChange}
        className="
          w-full
          border
          border-slate-200
          bg-slate-50
          rounded-2xl
          px-4
          py-3
          outline-none
          focus:ring-2
          focus:ring-blue-500
          transition-all
          duration-300
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
        value={formData.dueDate}
        onChange={handleChange}
        className="
          w-full
          border
          border-slate-200
          bg-slate-50
          rounded-2xl
          px-4
          py-3
          outline-none
          focus:ring-2
          focus:ring-blue-500
          transition-all
          duration-300
          mb-4
        "
      />

      <button
        className="
          w-full
          bg-blue-600
          hover:bg-blue-700
          text-white
          font-semibold
          py-3
          rounded-2xl
          transition-all
          duration-300
          shadow-lg
          hover:shadow-xl
        "
      >
        Add Task
      </button>

    </form>
  );
}

export default TaskForm;