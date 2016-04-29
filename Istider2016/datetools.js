
var dayNames = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

exports.getDaynameOfDate = function(str) {
  var year = str.slice(0, 4);
  var mnth = str.slice(5, 7);
  var day  = str.slice(8, 10);

  var date = new Date(year, mnth-1, day, 0, 0, 0);
  return dayNames[date.getDay()];
};

exports.getTimeRemaining = function (endtime){
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor( (t/1000) % 60 );
  var minutes = Math.floor( (t/1000/60) % 60 );
  var hours = Math.floor( (t/(1000*60*60)) % 24 );
  var days = Math.floor( t/(1000*60*60*24) );
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}
