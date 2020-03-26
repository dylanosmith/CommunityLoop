const Task = require('../models/task.model')

module.exports.Create = (req, res) => {
    console.log("creating a new task", req.body);
    Task.create(req.body)
        .then(newTask => res.json(newTask))
        .catch(err => res.json(err));
};

module.exports.findAllTasks = (req,res) => {
    Task.find()
        .then((allTasks) => res.json({tasks: allTasks}))
        .catch(err => res.json ({message: "Something went wrong!", error: err }));
};

module.exports.findOneTask = (req,res) => {
    Task.findOne({_id: req.params.id })
        .then(oneSingleTask => res.json({task: oneSingleTask}))
        .catch(err =>res.json ({message: "Something went wrong!", error:err}));
};

module.exports.updateTasks = (req, res) => {
    Task.findOneAndUpdate({_id: req.params.id}, req.body, {new:true})
    .then(updateTasks => res.json ({ task: updateTasks}))
    .catch(err => res.json({ message: "Something went wrong", error:err}));
};

module.exports.deleteTask = (req, res) => {
    console.log("Task has been deleted", req.params.id)
    Task.deleteOne({ _id: req.params.id })
        .then(result => res.json ({ result: result }))
        .catch(err => res.json ({ message: "Houston we have a problem", error:err }));
};