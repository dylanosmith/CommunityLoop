const User = require('../models/user.model')

module.exports.Create = (req, res) => {
    console.log("creating a new user", req.body);
    User.create(req.body)
        .then(newUser => res.json(newUser))
        .catch(err => res.json(err));
};

module.exports.findAllUsers = (req,res) => {
    User.find()
        .then((allUsers) => res.json({users: allUsers}))
        .catch(err => res.json ({message: "Something went wrong!", error: err }));
};

module.exports.findOneUser = (req,res) => {
    User.findOne({_id: req.params.id })
        .then(oneSingleUser => res.json({user: oneSingleUser}))
        .catch(err =>res.json ({message: "Something went wrong!", error:err}));
};

module.exports.updateUsers = (req, res) => {
    User.findOneAndUpdate({_id: req.params.id}, req.body, {new:true})
    .then(updateUsers => res.json ({ user: updateUsers}))
    .catch(err => res.json({ message: "Something went wrong", error:err}));
};

module.exports.deleteUser = (req, res) => {
    console.log("User has been deleted", req.params.id)
    User.deleteOne({ _id: req.params.id })
        .then(result => res.json ({ result: result }))
        .catch(err => res.json ({ message: "Houston we have a problem", error:err }));
};