const mongoose = require("mongoose");

// Connection with Mongodb

mongoose.connection.on("error", (err) => {
  console.log(" MongoDB connection error", err);
  process.exit(1);
});

mongoose.connection.once("open", () => {
  console.log("Connected to mongo in the database:", mongoose.connection.name);
});

console.log(process.env.MONGO_DB_URI);
mongoose.connect(process.env.MONGO_DB_URI);

module.exports = mongoose.connection;
