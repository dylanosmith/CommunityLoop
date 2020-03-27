const express = require("express");

const cors = require("cors")

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
require("./config/mongoose.config");
require("./routes/review.route")(app);
require("./routes/user.route")(app);
require("./routes/task.route")(app);

app.use(cors());

app.listen(8000, () => {
    console.log("Listening  port 8000")
})

