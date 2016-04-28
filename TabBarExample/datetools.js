
var dayNames = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

exports.getDaynameOfDate = function(str) {
  var year = str.slice(0, 4);
  var mnth = str.slice(5, 7);
  var day  = str.slice(8, 10);

  var date = new Date(year, mnth-1, day, 0, 0, 0);
  return dayNames[date.getDay()];
};
