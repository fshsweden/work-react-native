'use strict';

var React = require('react-native');
var {
  ListView,
  ScrollView,
  Component,
  AppRegistry,
  StyleSheet,
  TabBarIOS,
  Text,
  View,
  TouchableOpacity
} = React;

var base64Icon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABLCAQAAACSR7JhAAADtUlEQVR4Ac3YA2Bj6QLH0XPT1Fzbtm29tW3btm3bfLZtv7e2ObZnms7d8Uw098tuetPzrxv8wiISrtVudrG2JXQZ4VOv+qUfmqCGGl1mqLhoA52oZlb0mrjsnhKpgeUNEs91Z0pd1kvihA3ULGVHiQO2narKSHKkEMulm9VgUyE60s1aWoMQUbpZOWE+kaqs4eLEjdIlZTcFZB0ndc1+lhB1lZrIuk5P2aib1NBpZaL+JaOGIt0ls47SKzLC7CqrlGF6RZ09HGoNy1lYl2aRSWL5GuzqWU1KafRdoRp0iOQEiDzgZPnG6DbldcomadViflnl/cL93tOoVbsOLVM2jylvdWjXolWX1hmfZbGR/wjypDjFLSZIRov09BgYmtUqPQPlQrPapecLgTIy0jMgPKtTeob2zWtrGH3xvjUkPCtNg/tm1rjwrMa+mdUkPd3hWbH0jArPGiU9ufCsNNWFZ40wpwn+62/66R2RUtoso1OB34tnLOcy7YB1fUdc9e0q3yru8PGM773vXsuZ5YIZX+5xmHwHGVvlrGPN6ZSiP1smOsMMde40wKv2VmwPPVXNut4sVpUreZiLBHi0qln/VQeI/LTMYXpsJtFiclUN+5HVZazim+Ky+7sAvxWnvjXrJFneVtLWLyPJu9K3cXLWeOlbMTlrIelbMDlrLenrjEQOtIF+fuI9xRp9ZBFp6+b6WT8RrxEpdK64BuvHgDk+vUy+b5hYk6zfyfs051gRoNO1usU12WWRWL73/MMEy9pMi9qIrR4ZpV16Rrvduxazmy1FSvuFXRkqTnE7m2kdb5U8xGjLw/spRr1uTov4uOgQE+0N/DvFrG/Jt7i/FzwxbA9kDanhf2w+t4V97G8lrT7wc08aA2QNUkuTfW/KimT01wdlfK4yEw030VfT0RtZbzjeMprNq8m8tnSTASrTLti64oBNdpmMQm0eEwvfPwRbUBywG5TzjPCsdwk3IeAXjQblLCoXnDVeoAz6SfJNk5TTzytCNZk/POtTSV40NwOFWzw86wNJRpubpXsn60NJFlHeqlYRbslqZm2jnEZ3qcSKgm0kTli3zZVS7y/iivZTweYXJ26Y+RTbV1zh3hYkgyFGSTKPfRVbRqWWVReaxYeSLarYv1Qqsmh1s95S7G+eEWK0f3jYKTbV6bOwepjfhtafsvUsqrQvrGC8YhmnO9cSCk3yuY984F1vesdHYhWJ5FvASlacshUsajFt2mUM9pqzvKGcyNJW0arTKN1GGGzQlH0tXwLDgQTurS8eIQAAAABJRU5ErkJggg==';

var x = require('./data.js');
var Data = x.Data;

var dayNames = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

function getDaynameOfDate(str) {
  var year = str.slice(0, 4);
  var mnth = str.slice(5, 7);
  var day  = str.slice(8, 10);

  var date = new Date(year, mnth-1, day, 0, 0, 0);
  return dayNames[date.getDay()];
}


var ListViewPagingExample = React.createClass({
  statics: {
    title: '<ListView> - Paging',
    description: 'Floating headers & layout animations.'
  },

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

      var sectionName = getDaynameOfDate(Data.days[ii].date) + " " + Data.days[ii].date;
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

  renderRow: function(rowData: string, sectionID: string, rowID: string): ReactElement {
    // return (<Thumb text={rowData}/>);
    return (
      <View style={styles.row}>
        <Text style={styles.bookingdata}>{rowData}</Text>
        <Text style={styles.bookingdata}>Grupp</Text>
        <Text style={styles.bookingdata}>Lag</Text>
        <Text style={styles.bookingdata}>Träning/Match</Text>
        <Text style={styles.bookingdata}>Hemma</Text>
        <Text style={styles.bookingdata}>Borta</Text>
        <Text style={styles.bookingdata}>Ismaskin</Text>
      </View>
    );
  },

  renderSectionHeader: function(sectionData: string, sectionID: string) {
    return (
      <View style={styles.section}>
        <Text style={styles.text, styles.bookingheader}>
          {sectionData}
        </Text>
      </View>
    );
  },

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

  renderFooter: function() {
    return (
      <View style={styles.header}>
        <Text onPress={() => console.log('Footer!')} style={styles.text}>
          Table Footer
        </Text>
      </View>
    );
  },

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
    var config = layoutAnimationConfigs[Math.floor(this.state.headerPressCount / 2) % layoutAnimationConfigs.length];
    LayoutAnimation.configureNext(config);
    this.setState({headerPressCount: this.state.headerPressCount + 1});
  },

});









/*  ---------------------------------------------------------


    ---------------------------------------------------------
*/
class TabBarExample extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'redTab',
      notifCount: 0,
      presses: 0,
    };
  }

  statics: {
    title: '<TabBarIOS>',
    description: 'Tab-based navigation.',
  }

  // displayName: 'TabBarExample'

  _renderContent(color: string, pageText: string, num?: number) {
    return (
      <ListViewPagingExample/>
    );
  }

  render() {
    return (

      /*  ---------------------------------------------------------
          The TAB Bar
          ---------------------------------------------------------
      */
      <TabBarIOS
        tintColor="white"
        barTintColor="darkslateblue">

        <TabBarIOS.Item
          title="Blue Tab"
          icon={{uri: base64Icon, scale: 3}}
          selected={this.state.selectedTab === 'blueTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'blueTab',
            });
          }}>
          {
            this._renderContent('#414A8C', 'Blue Tab')
          }
        </TabBarIOS.Item>

        <TabBarIOS.Item
          systemIcon="history"
          badge={this.state.notifCount > 0 ? this.state.notifCount : undefined}
          selected={this.state.selectedTab === 'redTab'}

          onPress={() => {
            this.setState({
              selectedTab: 'redTab',
              notifCount: this.state.notifCount + 1,
            });
          }}>

          {
            this._renderContent('#783E33', 'Red Tab', this.state.notifCount)
          }
        </TabBarIOS.Item>

        <TabBarIOS.Item
          icon={require('./flux.png')}
          title="More"
          selected={this.state.selectedTab === 'greenTab'}

          onPress={() => {
            this.setState({
              selectedTab: 'greenTab',
              presses: this.state.presses + 1
            });
          }}>
          {
            this._renderContent('#21551C', 'Green Tab', this.state.presses)
          }
        </TabBarIOS.Item>

      </TabBarIOS>

    );
  }

};


/*  ---------------------------------------------------------


    ---------------------------------------------------------
*/
var styles = StyleSheet.create({
  tabContent: {
    flex: 1,
    alignItems: 'center',
  },
  tabText: {
    color: 'white',
    margin: 50,
  },


  row: {
    flexDirection: "row"
  },
  bookingheader: {
    fontSize: 10,
    fontFamily: "Verdana",
  },
  bookingdata: {
    fontSize: 8,
    fontFamily: "Verdana",
    paddingHorizontal: 5
  },
  listview: {
    backgroundColor: '#B0C4DE',
  },
  header: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3B5998',
    flexDirection: 'row',
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
    backgroundColor: '#5890ff',
  },

});

module.exports = TabBarExample;
AppRegistry.registerComponent('TabBarExample', () => TabBarExample);
