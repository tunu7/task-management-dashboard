const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      trim: true,
    },

    priority: {
      type: String,
      enum: ["Low", "Medium", "High"],
      default: "Low",
    },

    dueDate: {
      type: Date,
    },

    status: {
      type: String,
      enum: [
        "Pending",
        "In Progress",
        "Completed",
      ],
      default: "Pending",
    },
  },
  {
    timestamps: true,
  }
);


// Indexes
taskSchema.index({ user: 1 });

taskSchema.index({
  user: 1,
  status: 1,
});

taskSchema.index({
  createdAt: -1,
});

taskSchema.index({
  title: "text",
  description: "text",
});

module.exports = mongoose.model(
  "Task",
  taskSchema
);