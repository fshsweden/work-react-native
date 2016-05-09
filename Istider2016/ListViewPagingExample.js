'use strict'

var React = require('react-native');
var {
  ListView,
  LocationButton,
  ScrollView,
  Component,
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} = React;


var data      = require('./data.js');
var dateTools = require('./datetools');
var styles    = require('./styles');


/*
 *
 *
 *
 */
var ListViewPagingExample = React.createClass({
  statics: {
    title: '<ListView> - Paging',
    description: 'Floating headers & layout animations.'
  },

  /*  ----------------------------------------------------------------------

      ----------------------------------------------------------------------
  */
  getInitialState: function() {

    var getSectionData = (dataBlob, sectionID) => {
      return dataBlob[sectionID];
    };
    var getRowData = (dataBlob, sectionID, rowID) => {
      return dataBlob[rowID];
    };

    var dataSource = new ListView.DataSource({
      getRowData: getRowData,
      getSectionHeaderData: getSectionData,
      rowHasChanged: (row1, row2) => row1 !== row2,
      sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
    });

    /* Create the Data BLOB!
    */
    var dataBlob = {};
    var sectionIDs = [];
    var rowIDs = [];
    var timeToDateObj = {}; // index KEY --> Date Object

    console.log("Number of days in data:" + data.getDates().length);

    /*
    data["2016-01-01"]["10:00"]["team"]
    data.getDays()   -->   ["2016-01-01","2016-01-02","2016-01-03"];
    data.getDay(day) -->   {"date" : "2016-01-01", "from":"10:00", "to":"11:00", team:"U15", ice:"Kalle P", "type":"practice"}
    data.getItemsForTeam(team) -->   [{"date" : "2016-01-01", "from":"10:00", "to":"11:00", team:"U15", ice:"Kalle P", "type":"practice"}]
    */

    var dates = data.getDates();
    for (var ii = 0; ii < dates.length; ii++) {

      var dateStr = dates[ii];
      var dateObjArray = data.getDateObjArray(dateStr);
      var sectionName = dateTools.getDaynameOfDate(dateStr) + " " + dateStr;

      sectionIDs.push(sectionName);
      dataBlob[sectionName] = sectionName;

      rowIDs[ii] = [];
      for (var jj = 0; jj < dateObjArray.length; jj++) {

        // Put together an ID for this row!
        var rowName = dateStr + " " +
                      dateObjArray[jj].from + " " +
                      dateObjArray[jj].to + " " +
                      dateObjArray[jj].team;

        timeToDateObj[rowName] = dateObjArray[jj];

        rowIDs[ii].push(rowName);
        dataBlob[rowName] = rowName;
      }
    }
    return {
      dataSource: dataSource.cloneWithRowsAndSections(dataBlob, sectionIDs, rowIDs),
      headerPressCount: 0,
      timeToDateObj: timeToDateObj
    };
  },

  /*  ----------------------------------------------------------------------

      ----------------------------------------------------------------------
  */
  renderRow: function(rowData: string, sectionID: string, rowID: string) : ReactElement {

    var color_index = Math.floor(Math.random() * 6) + 1;
    var colors = ['lightblue','yellow','green','chartreuse','pink','white'];

    // rowObj = data.getItem(sectionID, rowID);
    var rowObj = this.state.timeToDateObj[rowID];

    var txt;

    if (rowObj.typ == "Practice")
      txt = <Text style={styles.practice}>Träning</Text>
    else if (rowObj.typ == "Match")
      txt = <Text style={styles.match}>MATCH {rowObj.hemma} - {rowObj.borta} </Text>
    else {
      txt = <Text style={styles.practice}>Que?</Text>
    }

    return (
      <View style={styles.col}>
        <View style={this.RowStyle(rowObj.rowstyle)} >
          <Text style={styles.from}>{rowObj.from} to {rowObj.to}</Text>
          <Text style={styles.to}>{rowObj.team}</Text>
          <Text style={styles.zamboni}>(Ismaskin:{rowObj.zamboni})</Text>
        </View>
        <View style={this.RowStyle(rowObj.rowstyle)}>
            {txt}
        </View>
      </View>

    );
  },

  /* experimental */
  onSelectRow: function() {
    alert("Hej");
  },
  RowStyle: function(styleStr) {
    if (styleStr == 'even') {
      return  styles.even;
    }
    else {
      return styles.odd;
    }
 },

  /*  ----------------------------------------------------------------------

      ----------------------------------------------------------------------
  */
  renderSectionHeader: function(sectionData: string, sectionID: string) {
    return (
      <View style={styles.section}>
        <Text style={styles.text, styles.bookingheader}>
          {sectionData}
        </Text>
      </View>
    );
  },

  /*  ----------------------------------------------------------------------

      ----------------------------------------------------------------------
  */
  renderHeader: function() {
    return (
        <View style={styles.headerView}>
          <Text style={styles.headerText}>
            Schema vecka 43
          </Text>
        </View>
    );
  },

  /*  ----------------------------------------------------------------------

      ----------------------------------------------------------------------
  */
  renderFooter: function() {
    return (
      <View style={styles.footerView}>
        <Text style={styles.footerText}>
          Valbo HC
        </Text>
      </View>
    );
  },

  /*  ----------------------------------------------------------------------

      ----------------------------------------------------------------------
  */
  render: function() {
    return (
      <ListView
        style={styles.listview}
        dataSource={this.state.dataSource}
        onChangeVisibleRows={(visibleRows, changedRows) => console.log({visibleRows, changedRows})}
        renderHeader={this.renderHeader}
        renderFooter={this.renderFooter}
        renderSectionHeader={this.renderSectionHeader}
        renderRow={this.renderRow}
        initialListSize={10}
        pageSize={4}
        scrollRenderAheadDistance={500}
      />
    );
  },

  _onPressHeader: function() {
    /*
    var config = layoutAnimationConfigs[Math.floor(this.state.headerPressCount / 2) % layoutAnimationConfigs.length];
    LayoutAnimation.configureNext(config);
    this.setState({headerPressCount: this.state.headerPressCount + 1});
    */
  },

});

module.exports = ListViewPagingExample;
