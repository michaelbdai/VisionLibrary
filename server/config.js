//db connection and export it 
var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/visionPhotoLibrary");
var db = mongoose.connection;
db.on('error', function(err) {
  console.log("Error in conencting to the database");
});
db.once('open', function() {
  console.log("We are connected");
});

module.exports = db;
