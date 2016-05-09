var React = require('react-native');
var {
  StyleSheet
} = React;

/*  ---------------------------------------------------------


    ---------------------------------------------------------
*/
module.exports = StyleSheet.create({
  tabContent: {
    flex: 1,
    alignItems: 'center',
  },
  tabText: {
    color: 'white',
    margin: 50,
  },
  container: {
    marginVertical: 30,
    flexDirection: "column"
  },
  col: {
    flexDirection: "column"
  },
  row: {
    fontSize: 10,
    flexDirection: "row"
  },
  minirow: {
    flexDirection: "row"
  },
  bookingheader: {
    fontSize: 10,
    fontFamily: "Verdana",
  },
  bookingdata: {
    fontSize: 12,
    fontFamily: "Verdana",
    paddingHorizontal: 5
  },
  even: {
    flexDirection: "row",
    backgroundColor: '#CCCC99'
  },
  odd: {
    flexDirection: "row",
    backgroundColor: '#FFFFCC'
  },
  from: {
    fontSize: 10,
    color: 'gray',
    fontFamily: "Verdana",
    paddingHorizontal: 5
  },
  to: {
    fontSize: 10,
    color: 'gray',
    fontFamily: "Verdana",
    paddingHorizontal: 5
  },
  zamboni: {
    fontSize: 10,
    color: 'gray',
    fontFamily: "Verdana",
    paddingHorizontal: 5
  },
  practice: {
    fontSize: 10,
    fontFamily: "Verdana",
    color: 'gray',
    paddingHorizontal: 5
  },
  match: {
    fontSize: 10,
    fontFamily: "Verdana",
    color: 'gray',
    paddingHorizontal: 5
  },
  listview: {
    top: 20,
    backgroundColor: '#B0C4DE',
  },
  headerView: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#CC9933',
    flexDirection: 'row',
  },
  headerText: {
    color: 'white'
  },
  footerView: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#CC9933',
    flexDirection: 'row',
  },
  footerText: {
    color: 'white'
  },
  text: {
    color: 'white',
    paddingHorizontal: 8,
  },
  rowText: {
    color: '#888888',
  },
  thumbText: {
    fontSize: 20,
    color: '#888888',
  },
  buttonContents: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    marginVertical: 3,
    padding: 5,
    backgroundColor: '#EAEAEA',
    borderRadius: 3,
    paddingVertical: 10,
  },
  img: {
    width: 64,
    height: 64,
    marginHorizontal: 10,
    backgroundColor: 'transparent',
  },
  section: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 6,
    backgroundColor: '#99CCCC',
  },

});
