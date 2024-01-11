const { default: mongoose } = require("mongoose");

const userSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  phoneNumber: { type: String, unique: true, required: true },
  tgId: { type: Number, unique: true, required: true },
  created: Date,
});

// userSchema.pre("save", function (next) {
//   const currentDate = new Date();
//   this.created = currentDate;
//   next();
// });

const User = mongoose.model("User", userSchema);
module.exports = User;
