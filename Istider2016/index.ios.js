'use strict';

var React = require('react-native');
var {
  ActivityIndicatorIOS,
  SwitchIOS,
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

/* import {
  Cell,
  CustomCell,
  Section,
  TableView
} from 'react-native-tableview-simple';
import Dimensions from 'Dimensions';
*/

var styles    = require('./styles');
var base64Icon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABLCAQAAACSR7JhAAADtUlEQVR4Ac3YA2Bj6QLH0XPT1Fzbtm29tW3btm3bfLZtv7e2ObZnms7d8Uw098tuetPzrxv8wiISrtVudrG2JXQZ4VOv+qUfmqCGGl1mqLhoA52oZlb0mrjsnhKpgeUNEs91Z0pd1kvihA3ULGVHiQO2narKSHKkEMulm9VgUyE60s1aWoMQUbpZOWE+kaqs4eLEjdIlZTcFZB0ndc1+lhB1lZrIuk5P2aib1NBpZaL+JaOGIt0ls47SKzLC7CqrlGF6RZ09HGoNy1lYl2aRSWL5GuzqWU1KafRdoRp0iOQEiDzgZPnG6DbldcomadViflnl/cL93tOoVbsOLVM2jylvdWjXolWX1hmfZbGR/wjypDjFLSZIRov09BgYmtUqPQPlQrPapecLgTIy0jMgPKtTeob2zWtrGH3xvjUkPCtNg/tm1rjwrMa+mdUkPd3hWbH0jArPGiU9ufCsNNWFZ40wpwn+62/66R2RUtoso1OB34tnLOcy7YB1fUdc9e0q3yru8PGM773vXsuZ5YIZX+5xmHwHGVvlrGPN6ZSiP1smOsMMde40wKv2VmwPPVXNut4sVpUreZiLBHi0qln/VQeI/LTMYXpsJtFiclUN+5HVZazim+Ky+7sAvxWnvjXrJFneVtLWLyPJu9K3cXLWeOlbMTlrIelbMDlrLenrjEQOtIF+fuI9xRp9ZBFp6+b6WT8RrxEpdK64BuvHgDk+vUy+b5hYk6zfyfs051gRoNO1usU12WWRWL73/MMEy9pMi9qIrR4ZpV16Rrvduxazmy1FSvuFXRkqTnE7m2kdb5U8xGjLw/spRr1uTov4uOgQE+0N/DvFrG/Jt7i/FzwxbA9kDanhf2w+t4V97G8lrT7wc08aA2QNUkuTfW/KimT01wdlfK4yEw030VfT0RtZbzjeMprNq8m8tnSTASrTLti64oBNdpmMQm0eEwvfPwRbUBywG5TzjPCsdwk3IeAXjQblLCoXnDVeoAz6SfJNk5TTzytCNZk/POtTSV40NwOFWzw86wNJRpubpXsn60NJFlHeqlYRbslqZm2jnEZ3qcSKgm0kTli3zZVS7y/iivZTweYXJ26Y+RTbV1zh3hYkgyFGSTKPfRVbRqWWVReaxYeSLarYv1Qqsmh1s95S7G+eEWK0f3jYKTbV6bOwepjfhtafsvUsqrQvrGC8YhmnO9cSCk3yuY984F1vesdHYhWJ5FvASlacshUsajFt2mUM9pqzvKGcyNJW0arTKN1GGGzQlH0tXwLDgQTurS8eIQAAAABJRU5ErkJggg==';
var request   = require('superagent');
var ListViewPagingExample = require('./ListViewPagingExample');
var x = require('./data');
var Data = x.Data;




updateData(); // run function once at first to avoid delay
var timeinterval = setInterval(updateData,30000);

function updateData() {
  /* new : load data from external file! */
  request
     .get('http://192.168.10.22:8080/data')
     .end(function(err, res){
      /* alert(JSON.stringify(res.text)); */
       Data = JSON.parse(res.text);
     });
}


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

 class SettingsPage extends Component {

   constructor(props) {
     super(props);
     this.state = {
     }
   }

   render() {
     return <View><Text>AAAAAAA</Text></View>
   }
}

class AboutPage extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return <View style={styles.row}>
        <Text>AAAAAAA</Text>
      </View>
  }
}

/*
class Example extends Component {
  render() {
    return (
      <ScrollView contentContainerStyle={styles.stage}>
        <TableView>
          <Section header="STANDARD" footer="A Footer">
            <Cell cellstyle="Basic" title="Basic"/>
            <Cell cellstyle="RightDetail" title="RightDetail" detail="Detail" />
            <Cell cellstyle="LeftDetail" title="LeftDetail" detail="Detail"/>
            <Cell cellstyle="Subtitle" title="Subtitle" detail="No linebreakkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk"/>
            <Cell cellstyle="Basic" title="Pressable w/ accessory" accessory="DisclosureIndicator" onPress={() => console.log('Heyho!')}/>
          </Section>
          <Section header="DISABLED">
            <Cell cellstyle="Basic" isDisabled={true} title="Basic"/>
            <Cell cellstyle="RightDetail" isDisabled={true} title="RightDetail" detail="Detail" />
            <Cell cellstyle="LeftDetail" isDisabled={true} title="LeftDetail" detail="Detail"/>
            <Cell cellstyle="Subtitle" isDisabled={true} title="Subtitle" detail="No linebreakkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk"/>
            <Cell cellstyle="Basic" isDisabled={true} title="Pressable w/ accessory" accessory="DisclosureIndicator" onPress={() => {console.log('Heyho!')}}/>
          </Section>
          <Section header="ACCESSORY">
            <Cell cellstyle="Basic" accessory="DisclosureIndicator" title="Basic"/>
            <Cell cellstyle="RightDetail" accessory="DetailDisclosure" title="RightDetail" detail="Detail" />
            <Cell cellstyle="LeftDetail" accessory="Detail" title="LeftDetail" detail="Detail"/>
            <Cell cellstyle="Subtitle" accessory="Checkmark" title="Subtitle" detail="No linebreakkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk"/>
            <Cell cellstyle="Basic" accessory="Detail" title="Pressable w/ accessory" onPress={() => console.log('Heyho!')}/>
          </Section>
          <Section header="CUSTOMCELLS">
            <CustomCell>
              <Text style={{flex: 1, fontSize: 16}}>Loading</Text>
              <ActivityIndicatorIOS/>
            </CustomCell>
            <CustomCell>
              <Text style={{flex: 1, fontSize: 16}}>Switch</Text>
              <SwitchIOS/>
            </CustomCell>
          </Section>
        </TableView>
        <View style={{
            height: Dimensions.get('window').height,
          }}
        >
          <View style={{
            backgroundColor: '#37474F',
            height: 500,
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <View style={{
              backgroundColor: '#ffc107',
              width: 80,
              height: 80,
              borderRadius: 10
            }}></View>
          </View>
          <TableView>
            <Section footer="All rights reserved.">
              <Cell title="Help / FAQ" titleTintColor="#007AFF" onPress={() => console.log('open Help/FAQ')}/>
              <Cell title="Contact Us" titleTintColor="#007AFF" onPress={() => console.log('open Contact Us')}/>
            </Section>
          </TableView>
        </View>
      </ScrollView>
    );
  }
};

const styles = StyleSheet.create({
  stage: {
    backgroundColor: '#EFEFF4',
    paddingTop: 20,
    paddingBottom: 20
  },
});
*/
/*  ---------------------------------------------------------


    ---------------------------------------------------------
*/
class TheApp extends Component {

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

  // displayName: 'TheApp'

  _renderContent(color: string, pageText: string, num?: number) {

      if (pageText == "Schema") {
        return (
          <ListViewPagingExample/>
        );
      }
      else if (pageText == "Settings") {
        return (<SettingsPage/>);
      }
      else if (pageText == "About") {
        return (<AboutPage/>);
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

module.exports = TheApp;
AppRegistry.registerComponent('TabBarExample', () => TheApp);
