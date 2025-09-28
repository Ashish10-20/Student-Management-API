const mongoose = require("mongoose");

// students-api is database name
mongoose.connect("mongodb://127.0.0.1:27017/students-api")
  .then(() => {
    console.log("✅ MongoDB connection established");
  })
  .catch((err) => {
    console.error("❌ No connection:", err);
  });
