const Task = require("../models/Task");


// Create Task
exports.createTask = async (
  req,
  res
) => {
  try {

    const task = await Task.create({
      ...req.body,
      user: req.user.id,
    });

    res.status(201).json({
      success: true,
      task,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};


// Get Tasks
exports.getTasks = async (
  req,
  res
) => {
  try {

    const page =
      Number(req.query.page) || 1;

    const limit = 10;

    const skip =
      (page - 1) * limit;

    const search =
      req.query.search || "";

    const query = {
      user: req.user.id,
    };

    // Search
    if (search) {
      query.$text = {
        $search: search,
      };
    }

    // Status Filter
    if (req.query.status) {
      query.status =
        req.query.status;
    }

    // Priority Filter
    if (req.query.priority) {
      query.priority =
        req.query.priority;
    }

    const tasks = await Task.find(
      query
    )
      .sort({
        createdAt: -1,
      })
      .skip(skip)
      .limit(limit)
      .lean();

    const total =
      await Task.countDocuments(
        query
      );

    res.status(200).json({
      success: true,

      currentPage: page,

      totalPages:
        Math.ceil(total / limit),

      totalTasks: total,

      tasks,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};


// Update Task
exports.updateTask = async (
  req,
  res
) => {
  try {

    const task =
      await Task.findOneAndUpdate(
        {
          _id: req.params.id,
          user: req.user.id,
        },
        req.body,
        {
          new: true,
          runValidators: true,
        }
      );

    if (!task) {
      return res.status(404).json({
        success: false,
        message:
          "Task not found",
      });
    }

    res.status(200).json({
      success: true,
      task,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};


// Delete Task
exports.deleteTask = async (
  req,
  res
) => {
  try {

    const task =
      await Task.findOneAndDelete({
        _id: req.params.id,
        user: req.user.id,
      });

    if (!task) {
      return res.status(404).json({
        success: false,
        message:
          "Task not found",
      });
    }

    res.status(200).json({
      success: true,
      message:
        "Task deleted successfully",
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};