const express = require("express");

const cors = require("cors")

const app = express();

const cookieParser = require("cookie-parser");

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));

require("./config/mongoose.config");
require("./routes/review.route")(app);
require("./routes/user.route")(app);
require("./routes/task.route")(app);


app.listen(8000, () => {
    console.log("Listening on port 8000")
})

