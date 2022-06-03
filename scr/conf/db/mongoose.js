const mongoose = require("mongoose");
async function connect() {
  try {
    await mongoose.connect("mongodb://0.0.0.0:27017/benode", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("DB CONNECTION SUCCESSFUL");
  } catch (error) {
    console.log("DB CONNECTION FAIL: " + error);
    return res
      .status(400)
      .json({ success: false, data: null, errors: "DB CONNECTION FAIL" });
  }
}

module.exports = { connect };
