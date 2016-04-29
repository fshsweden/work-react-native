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


var x         = require('./data.js');
var Data      = x.Data;
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

    console.log("Number of days in data:" + Data.days.length);

    for (var ii = 0; ii < Data.days.length; ii++) {

      var sectionName = dateTools.getDaynameOfDate(Data.days[ii].date) + " " + Data.days[ii].date;
      sectionIDs.push(sectionName);
      dataBlob[sectionName] = sectionName;

      rowIDs[ii] = [];
      for (var jj = 0; jj < Data.days[ii].bookings.length; jj++) {

        //var rowName = 'S' + ii + ', R' + jj;
        var rowName = Data.days[ii].bookings[jj].from + " " +
                      Data.days[ii].bookings[jj].to + " " +
                      Data.days[ii].bookings[jj].team;
        rowIDs[ii].push(rowName);
        dataBlob[rowName] = rowName;
      }
    }
    return {
      dataSource: dataSource.cloneWithRowsAndSections(dataBlob, sectionIDs, rowIDs),
      headerPressCount: 0,
    };
  },

  /*  ----------------------------------------------------------------------

      ----------------------------------------------------------------------
  */
  renderRow: function(rowData: string, sectionID: string, rowID: string) : ReactElement {

    var color_index = Math.floor(Math.random() * 6) + 1;
    var colors = ['lightblue','yellow','green','chartreuse','pink','white'];

    return (
      <View style={styles.col}>
        <View style={styles.row} backgroundColor={colors[color_index]}>
          <Text style={styles.bookingdata}>{rowData}</Text>
          <Text style={styles.bookingdata}>Grupp</Text>
          <Text style={styles.bookingdata}>Lag</Text>
          <Text style={styles.bookingdata}>Träning/Match</Text>
          <Text style={styles.bookingdata}>Hemma</Text>
          <Text style={styles.bookingdata}>Borta</Text>
          <Text style={styles.bookingdata}>Ismaskin</Text>
        </View>
        <View style={styles.row} >
          <Text style={styles.bookingdata}>This is an extra row!</Text>
        </View>
      </View>

    );
  },

  /*  ----------------------------------------------------------------------

      ----------------------------------------------------------------------
  */
  renderSectionHeader: function(sectionData: string, sectionID: string) {
    return (
      <View style={styles.section}>
        <Text style={styles.text, styles.bookingheader}>
          Vecka XX : {sectionData}
        </Text>
      </View>
    );
  },

  /*  ----------------------------------------------------------------------

      ----------------------------------------------------------------------
  */
  renderHeader: function() {
    var headerLikeText = this.state.headerPressCount % 2 ?
      <View><Text style={styles.text}>1 Like</Text></View> :
      null;
    return (
      <TouchableOpacity onPress={this._onPressHeader} style={styles.header}>
        {headerLikeText}
        <View>
          <Text style={styles.text}>
            Table Header (click me)
          </Text>
        </View>
      </TouchableOpacity>
    );
  },

  /*  ----------------------------------------------------------------------

      ----------------------------------------------------------------------
  */
  renderFooter: function() {
    return (
      <View style={styles.header}>
        <Text onPress={() => console.log('Footer!')} style={styles.text}>
          Table Footer
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
