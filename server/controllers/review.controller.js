const Review = require('../models/review.model')

module.exports.Create = (req, res) => {
    console.log("creating a new review", req.body);
    Review.create(req.body)
        .then(newReview => res.json(newReview))
        .catch(err => res.json(err));
};

module.exports.findAllReviews = (req,res) => {
    Review.find()
        .then((allReviews) => res.json({reviews: allReviews}))
        .catch(err => res.json ({message: "Something went wrong!", error: err }));
};

module.exports.findOneReview = (req,res) => {
    Review.findOne({_id: req.params.id })
        .then(oneSingleReview => res.json({review: oneSingleReview}))
        .catch(err =>res.json ({message: "Something went wrong!", error:err}));
};

module.exports.updateReviews = (req, res) => {
    Review.findOneAndUpdate({_id: req.params.id}, req.body, {new:true})
    .then(updateReviews => res.json ({ review: updateReviews}))
    .catch(err => res.json({ message: "Something went wrong", error:err}));
};

module.exports.deleteReview = (req, res) => {
    console.log("Review has been deleted", req.params.id)
    Review.deleteOne({ _id: req.params.id })
        .then(result => res.json ({ result: result }))
        .catch(err => res.json ({ message: "Houston we have a problem", error:err }));
};