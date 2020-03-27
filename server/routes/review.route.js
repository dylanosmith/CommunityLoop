const ReviewController = require("../controllers/review.controller")

module.exports = app => {
    app.get("/api/reviews", ReviewController.findAllReviews);
    app.get("/api/reviews/:id", ReviewController.findOneReview);
    app.put("/api/reviews/update/:id", ReviewController.updateReviews);
    app.post("/api/reviews/new", ReviewController.Create);
    app.delete("/api/reviews/delete/:id", ReviewController.deleteReview);
 
};