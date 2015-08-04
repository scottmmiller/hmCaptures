var Mongoose = require("mongoose");
var Schema = Mongoose.schema;

var picSchema = new Schema ({
   id: {type: String},
   type: {type: String},
   img: {data: Buffer, contentType: String}
});

module.exports = Mongoose.model("Pic", picSchema);
