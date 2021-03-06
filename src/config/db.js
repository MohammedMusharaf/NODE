const mongoose = require("mongoose");
mongoose.connect(process.env.Db_Uri, { useNewUrlParser: true });

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  // we're connected!
  console.log("DB CONNECTED");
});
