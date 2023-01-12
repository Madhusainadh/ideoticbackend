const mongoose = require("mongoose");

function connect() {
    return mongoose.connect(process.env.MONGO);
}

module.exports = connect;