var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var CatchupSchema = new Schema({
    title: String,
    description: String
});

var Catchup = mongoose.model("Catchup", CatchupSchema);
module.exports = Catchup;
