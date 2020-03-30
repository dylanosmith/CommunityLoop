const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/communitydb", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {console.log("Established a connection with the database")})
    .catch(err => {console.log("Something went wrong while connecting to the database", err)});