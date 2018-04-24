var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var CatchupSchema = new Schema({
    date: String,
    summary: String
});

var Catchup = mongoose.model("Catchup", CatchupSchema);
module.exports = Catchup;
