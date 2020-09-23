const mongoose = require("mongoose");

let UserId = mongoose.Schema;

const UserIdSchema = new UserId ({ login: String, password: String});
const ProfileSchema = new Profile ({ name: String, surname: String, dateOfBirth: Date, Comments: String, rol: String});
const CredentialsSchema = new Credentials ({ adress: String, phone: Number, email: String});


module.exports = mongoose.model("UserId", UserIdSchema, "userid");
module.exports = mongoose.model("UserId", ProfileSchema, "profile");
module.exports = mongoose.model("UserId", CredentialsSchema, "credentials");