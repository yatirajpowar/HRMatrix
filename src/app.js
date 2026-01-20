const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// app.use("/api/auth", require("./routes/auth.routes"));
// app.use("/api/user", require("./routes/user.routes"));
// app.use("/api/company", require("./routes/company.routes"));
// app.use("/api/user", require("./routes/employe.routes"));
// app.use("/api/company", require("./routes/admin.routes"));
// app.use("/api/leave", require("./routes/leave.routes"));

module.exports = app;
