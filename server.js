var express = require("express");
var app = express();
var port = process.env.PORT || 8080;

function toNatDate(uDate){
  var year = uDate.getFullYear();
  var day = uDate.getDate();
  var month = uDate.getMonth();
  switch (month) {
    case 0:
      month = "January";
      break;
    case 1:
      month = "February";
      break;
    case 2:
      month = "March";
      break;
    case 3:
      month = "April";
      break;
    case 4:
      month = "May";
      break;
    case 5:
      month = "June";
      break;
    case 6:
      month = "July";
      break;
    case 7:
      month = "August";
      break;
    case 8:
      month = "September";
      break;
    case 9:
      month = "October";
      break;
    case 10:
      month = "November";
      break;
    case 11:
      month = "December";
      break;
    default:
      console.log("error in month");
      break;
  }
  return month + " " + day + "," + " " + year;
}

app.get('', function(req, res){
  res.sendFile(process.cwd() + '/index.html');
});

app.get('/:serveDate', function (req, res) {
  var myDate = {
    "unix": null,
    "natural": null
  };
  var input = req.params.serveDate;
  // Test if the input is a uxix time or string time
  if (Number(input) > 1) {
    input = Number(input);
  }
  console.log(input + " was queried.");
  var theDate = new Date(input);
  var displayDate = Date.parse(theDate);
  myDate.unix = theDate.getTime();
  myDate.natural = toNatDate(theDate);
  console.log("The date is " + theDate);
  res.json(myDate);
});

app.listen(port, function () {
  console.log('Example app listening on port 8080!');
});