'use strict';

var React = require('react-native');
var {
  Component, /* ? */
  ListView,
  LocationButton,
  ScrollView,
  Component,
  AppRegistry,
  StyleSheet,
  TabBarIOS,
  View,
  TouchableOpacity,
  Text
} = React;

var styles    = require('./styles');
var base64Icon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABLCAQAAACSR7JhAAADtUlEQVR4Ac3YA2Bj6QLH0XPT1Fzbtm29tW3btm3bfLZtv7e2ObZnms7d8Uw098tuetPzrxv8wiISrtVudrG2JXQZ4VOv+qUfmqCGGl1mqLhoA52oZlb0mrjsnhKpgeUNEs91Z0pd1kvihA3ULGVHiQO2narKSHKkEMulm9VgUyE60s1aWoMQUbpZOWE+kaqs4eLEjdIlZTcFZB0ndc1+lhB1lZrIuk5P2aib1NBpZaL+JaOGIt0ls47SKzLC7CqrlGF6RZ09HGoNy1lYl2aRSWL5GuzqWU1KafRdoRp0iOQEiDzgZPnG6DbldcomadViflnl/cL93tOoVbsOLVM2jylvdWjXolWX1hmfZbGR/wjypDjFLSZIRov09BgYmtUqPQPlQrPapecLgTIy0jMgPKtTeob2zWtrGH3xvjUkPCtNg/tm1rjwrMa+mdUkPd3hWbH0jArPGiU9ufCsNNWFZ40wpwn+62/66R2RUtoso1OB34tnLOcy7YB1fUdc9e0q3yru8PGM773vXsuZ5YIZX+5xmHwHGVvlrGPN6ZSiP1smOsMMde40wKv2VmwPPVXNut4sVpUreZiLBHi0qln/VQeI/LTMYXpsJtFiclUN+5HVZazim+Ky+7sAvxWnvjXrJFneVtLWLyPJu9K3cXLWeOlbMTlrIelbMDlrLenrjEQOtIF+fuI9xRp9ZBFp6+b6WT8RrxEpdK64BuvHgDk+vUy+b5hYk6zfyfs051gRoNO1usU12WWRWL73/MMEy9pMi9qIrR4ZpV16Rrvduxazmy1FSvuFXRkqTnE7m2kdb5U8xGjLw/spRr1uTov4uOgQE+0N/DvFrG/Jt7i/FzwxbA9kDanhf2w+t4V97G8lrT7wc08aA2QNUkuTfW/KimT01wdlfK4yEw030VfT0RtZbzjeMprNq8m8tnSTASrTLti64oBNdpmMQm0eEwvfPwRbUBywG5TzjPCsdwk3IeAXjQblLCoXnDVeoAz6SfJNk5TTzytCNZk/POtTSV40NwOFWzw86wNJRpubpXsn60NJFlHeqlYRbslqZm2jnEZ3qcSKgm0kTli3zZVS7y/iivZTweYXJ26Y+RTbV1zh3hYkgyFGSTKPfRVbRqWWVReaxYeSLarYv1Qqsmh1s95S7G+eEWK0f3jYKTbV6bOwepjfhtafsvUsqrQvrGC8YhmnO9cSCk3yuY984F1vesdHYhWJ5FvASlacshUsajFt2mUM9pqzvKGcyNJW0arTKN1GGGzQlH0tXwLDgQTurS8eIQAAAABJRU5ErkJggg==';
var request   = require('superagent');
var ListViewPagingExample = require('./ListViewPagingExample');
var x = require('./data');
var Data = x.Data;

/* new : load data from external file! */
request
   .get('http://192.168.10.22:8080/data')
   .end(function(err, res){
    alert(JSON.stringify(res.text));
     Data = JSON.parse(res.text);
   });

/*
fetch("http://192.168.10.22:8080/data")
  .then((response) => response.text())
  .then((responseText) => {
    alert(responseText);
  })
  .catch((error) => {
    console.warn(error);
  });
*/

 var SimpleView = React.createClass({
   render: function() {
     return <View><Text>AAAAAAA</Text></View>
   }
 });

/*  ---------------------------------------------------------


    ---------------------------------------------------------
*/
class Application extends Component {

  constructor(props) {

    /* Keep the Props that we were given */
    super(props);

    /* Default State */
    this.state = {
      selectedTab: 'scheduleTab',
      notifCount: 0,
      presses: 0,
    };

  }

  statics: {
    title: '<TabBarIOS>',
    description: 'Tab-based navigation.',
  }

  // displayName: 'Application'

  _renderContent(color: string, pageText: string, num?: number) {

    if (pageText == "Blue Tab") {
      return (
        <ListViewPagingExample/>
      );
    }
    else {
      return (
        <SimpleView/>
      );
    }
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

          title="Settings"
          icon={{uri: base64Icon, scale: 3}}
          selected={this.state.selectedTab === 'settingsTab'}

          onPress={() => {
            this.setState({
              selectedTab: 'settingsTab',
            });
          }}>
          {
            this._renderContent('#414A8C', 'Settings')
          }
        </TabBarIOS.Item>

        <TabBarIOS.Item

          systemIcon="history"
          badge={this.state.notifCount > 0 ? this.state.notifCount : undefined}
          selected={this.state.selectedTab === 'scheduleTab'}

          onPress={() => {
            this.setState({
              selectedTab: 'scheduleTab',
              notifCount: this.state.notifCount + 1,
            });
          }}>

          {
            this._renderContent('#783E33', 'Schema', this.state.notifCount)
          }
        </TabBarIOS.Item>

        <TabBarIOS.Item

          icon={require('./about.png')}
          title="More"
          selected={this.state.selectedTab === 'aboutTab'}

          onPress={() => {
            this.setState({
              selectedTab: 'aboutTab',
              presses: this.state.presses + 1
            });
          }}>
          {
            this._renderContent('#21551C', 'About', this.state.presses)
          }
        </TabBarIOS.Item>

      </TabBarIOS>

    );
  }
};

module.exports = Application;
AppRegistry.registerComponent('Application', () => Application);
