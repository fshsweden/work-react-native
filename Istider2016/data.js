'use strict'

// remember:
// exports = module.exports = {}

exports.getDates = function() {
    var dates = [];
    for(var k in Data) dates.push(k);
    return dates;
}

exports.getDateObjArray = function(date) {
  var d = Data[date];
  /* if (d == undefined) {
     deal with error here
  } */
  return d;
}

exports.getTimesForDateObj = function(date) {
  var d = Data[date];
  /* if (d == undefined) {
     deal with error here
  } */
  var times = [];
  for (var t in d) {
    times.push(t.from);
  }
  return times;
}

exports.getDateObjForTime = function(date, time) {
  var d = Data[date];
  /* if (d == undefined) {
     deal with error here
  } */

  for (var t in d) {
    if (t.from == time) {
      return t;
    }
  }
  return undefined;
}


var Data = {
  "2016-01-01" : [   /* array of objects */
    {
      from: "10:00",
      to  : "11:00",
      team: "U11",
      typ:  "Practice",
      zamboni: "Jonte F",
      rowstyle: 'even'
    },
    {
      from: "11:10",
      to: "12:10",
      team: "U12",
      typ:  "Practice",
      zamboni: "Anna H",
      rowstyle: 'odd'
    },
    {
      from: "12:20",
      to: "13:20",
      team: "U13",
      typ:  "Practice",
      zamboni: "Patrik K",
      rowstyle: 'even'
    },
    {
      from: "13:30",
      to: "14:30",
      team: "U14",
      typ:  "Practice",
      zamboni: "Adam X",
      rowstyle: 'odd'
    },
    {
      from: "14:40",
      to: "15:40",
      team: "U15",
      typ:  "Practice",
      zamboni: "John K",
      rowstyle: 'even'
    },
    {
      from: "15:50",
      to: "16:50",
      team: "U16",
      typ:  "Practice",
      zamboni: "Olle A",
      rowstyle: 'odd'
    },
    {
      from: "17:00",
      to: "20:30",
      team: "A",
      zamboni: "Olle A",
      typ:  "Match",
      serie: "Div 1C Västra",
      hemma: "Valbo HC",
      borta: "Strömsbro IF",
      rowstyle: 'even'
    }
  ]
}
