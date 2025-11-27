const bcrypt = require("bcryptjs");

const password = "farhan200206"; // ganti ini
const salt = bcrypt.genSaltSync(10);
const hash = bcrypt.hashSync(password, salt);

console.log("Hash:", hash);
