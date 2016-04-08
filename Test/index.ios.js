/**
 * The examples provided by Facebook are for non-commercial testing and
 * evaluation purposes only.
 *
 * Facebook reserves all rights not expressly granted.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
 * OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL
 * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN
 * AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 * @provides ListViewPagingExample
 * @flow
 */
'use strict';

var React = require('react-native');
var {
  ScrollView,
  Component,
  AppRegistry,
  Image,
  LayoutAnimation,
  ListView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} = React;

var dayNames = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

function getDaynameOfDate(str) {
  var year = str.slice(0, 4);
  var mnth = str.slice(5, 7);
  var day  = str.slice(8, 10);

  var date = new Date(year, mnth-1, day, 0, 0, 0);
  return dayNames[date.getDay()];
}

var Data = {
    startDate: "Vecka 1",
    days: [
      /* 2016-01-01 */
      {
        date: "2016-01-01",
        bookings: [
          {
            from: "10:00",
            to: "11:00",
            team: "U16"
          },
          {
            from: "11:10",
            to: "12:10",
            team: "U16"
          },
          {
            from: "12:20",
            to: "13:20",
            team: "U16"
          },
          {
            from: "13:30",
            to: "14:30",
            team: "U16"
          },
          {
            from: "14:40",
            to: "15:40",
            team: "U16"
          }
        ]
      },
      /* 2016-01-02 */
      {
        date: "2016-01-02",
        bookings: [
          {
            from: "10:00",
            to: "11:00",
            team: "U16"
          },
          {
            from: "11:10",
            to: "12:10",
            team: "U16"
          },
          {
            from: "12:20",
            to: "13:20",
            team: "U16"
          },
          {
            from: "13:30",
            to: "14:30",
            team: "U16"
          },
          {
            from: "14:40",
            to: "15:40",
            team: "U16"
          }
        ]
      },
      /* 2016-01-03 */
      {
        date: "2016-01-03",
        bookings: [
          {
            from: "10:00",
            to: "11:00",
            team: "U16"
          },
          {
            from: "11:10",
            to: "12:10",
            team: "U16"
          },
          {
            from: "12:20",
            to: "13:20",
            team: "U16"
          },
          {
            from: "13:30",
            to: "14:30",
            team: "U16"
          },
          {
            from: "14:40",
            to: "15:40",
            team: "U16"
          }
        ]
      },
      /* 2016-01-04 */
      {
        date: "2016-01-04",
        bookings: [
          {
            from: "10:00",
            to: "11:00",
            team: "U16"
          },
          {
            from: "11:10",
            to: "12:10",
            team: "U16"
          },
          {
            from: "12:20",
            to: "13:20",
            team: "U16"
          },
          {
            from: "13:30",
            to: "14:30",
            team: "U16"
          },
          {
            from: "14:40",
            to: "15:40",
            team: "U16"
          }
        ]
      },
      /* 2016-01-05 */
      {
        date: "2016-01-05",
        bookings: [
          {
            from: "10:00",
            to: "11:00",
            team: "U16"
          },
          {
            from: "11:10",
            to: "12:10",
            team: "U16"
          },
          {
            from: "12:20",
            to: "13:20",
            team: "U16"
          },
          {
            from: "13:30",
            to: "14:30",
            team: "U16"
          },
          {
            from: "14:40",
            to: "15:40",
            team: "U16"
          }
        ]
      },


    ]
};

var NativeModules = require('NativeModules');
var {
  UIManager,
} = NativeModules;

var THUMB_URLS = [
  require('./Thumbnails/like.png'),
  require('./Thumbnails/dislike.png'),
  require('./Thumbnails/call.png'),
  require('./Thumbnails/fist.png'),
  require('./Thumbnails/bandaged.png'),
  require('./Thumbnails/flowers.png'),
  require('./Thumbnails/heart.png'),
  require('./Thumbnails/liking.png'),
  require('./Thumbnails/party.png'),
  require('./Thumbnails/poke.png'),
  require('./Thumbnails/superlike.png'),
  require('./Thumbnails/victory.png'),
];
var NUM_SECTIONS = 100;
var NUM_ROWS_PER_SECTION = 10;

/*  'Old' way of creatnig a class
*/
var OldThumb = React.createClass({
  getInitialState: function() {
    return {
      thumbIndex: this._getThumbIdx(),
      dir: 'row'
    };
  },

  componentWillMount: function() {
    UIManager.setLayoutAnimationEnabledExperimental &&
      UIManager.setLayoutAnimationEnabledExperimental(true);
  },

  _getThumbIdx: function() {
    return Math.floor(Math.random() * THUMB_URLS.length);
  },
  _onPressThumb: function() {
    var config = layoutAnimationConfigs[this.state.thumbIndex % layoutAnimationConfigs.length];
    LayoutAnimation.configureNext(config);
    this.setState({
      thumbIndex: this._getThumbIdx(),
      dir: this.state.dir === 'row' ? 'column' : 'row',
    });
  },
  render: function() {
    return (
      <TouchableOpacity
        onPress={this._onPressThumb}
        style={[styles.buttonContents, {flexDirection: this.state.dir}]}>
        <Image style={styles.img} source={THUMB_URLS[this.state.thumbIndex]} />
        <Image style={styles.img} source={THUMB_URLS[this.state.thumbIndex]} />
        <Image style={styles.img} source={THUMB_URLS[this.state.thumbIndex]} />
        {this.state.dir === 'column' ?
          <Text>
            Oooo, look at this new text!  So awesome it may just be crazy.
            Let me keep typing here so it wraps at least one line.
          </Text> :
          <Text />
        }
      </TouchableOpacity>
    );
  }
});



class Thumb extends Component {

  getInitialState() {
    return {
      thumbIndex: this._getThumbIdx(),
      dir: 'row'
    };
  }

  componentWillMount() {
    UIManager.setLayoutAnimationEnabledExperimental &&
      UIManager.setLayoutAnimationEnabledExperimental(true);
  }

  _getThumbIdx() {
    return Math.floor(Math.random() * THUMB_URLS.length);
  }

  _onPressThumb() {
    var config = layoutAnimationConfigs[this.state.thumbIndex % layoutAnimationConfigs.length];
    LayoutAnimation.configureNext(config);

    this.setState({
      thumbIndex: this._getThumbIdx(),
      dir: this.state.dir === 'row' ? 'column' : 'row',
    });
  }

  render() {
    return (
      <TouchableOpacity
        onPress={this._onPressThumb}
        style={[styles.buttonContents, {flexDirection: this.state.dir}]}>
        <Image style={styles.img} source={THUMB_URLS[this.state.thumbIndex]} />
        <Image style={styles.img} source={THUMB_URLS[this.state.thumbIndex]} />
        <Image style={styles.img} source={THUMB_URLS[this.state.thumbIndex]} />
        {this.state.dir === 'column' ?
          <Text>
            Oooo, look at this new text!  So awesome it may just be crazy.
            Let me keep typing here so it wraps at least one line.
          </Text> :
          <Text />
        }
      </TouchableOpacity>
    );
  }
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
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={true} style={styles.row}>
        <Text style={styles.bookingdata}>{rowData}</Text>
        <Text style={styles.bookingdata}>Grupp</Text>
        <Text style={styles.bookingdata}>Lag</Text>
        <Text style={styles.bookingdata}>Träning/Match</Text>
        <Text style={styles.bookingdata}>Hemma</Text>
        <Text style={styles.bookingdata}>Borta</Text>
        <Text style={styles.bookingdata}>Ismaskin</Text>
      </ScrollView>
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

var styles = StyleSheet.create({

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

var animations = {
  layout: {
    spring: {
      duration: 750,
      create: {
        duration: 300,
        type: LayoutAnimation.Types.easeInEaseOut,
        property: LayoutAnimation.Properties.opacity,
      },
      update: {
        type: LayoutAnimation.Types.spring,
        springDamping: 0.4,
      },
    },
    easeInEaseOut: {
      duration: 300,
      create: {
        type: LayoutAnimation.Types.easeInEaseOut,
        property: LayoutAnimation.Properties.scaleXY,
      },
      update: {
        delay: 100,
        type: LayoutAnimation.Types.easeInEaseOut,
      },
    },
  },
};

var layoutAnimationConfigs = [
  animations.layout.spring,
  animations.layout.easeInEaseOut,
];

module.exports = ListViewPagingExample;
AppRegistry.registerComponent('Test', () => ListViewPagingExample);
