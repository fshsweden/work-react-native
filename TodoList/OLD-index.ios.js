/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TextInput,
  ListView
} from 'react-native';

var firebase = require('firebase');

/*


*/
class TodoList extends Component {

  constructor(props) {
    super(props);
    var fbref = new Firebase("https://shining-heat-227.firebaseio.com");
    this.itemsRef = fbref.child('items');
    this.state = {
      newTodo: '',
      todoSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2
      })
    }
    this.items = [];
  }

  /*
    Initial Setup!
  */
  componentDidMount() {
    // When a todo is added
    this.itemsRef.on('child_added', (dataSnapshot) => {

      /* update the "items" array */
      this.items.push({id: dataSnapshot.key(), text: dataSnapshot.val()});

      /* call the setter setState() - which copies the "items" array to the todoSource */
      this.setState({
        todoSource: this.state.todoSource.cloneWithRows(this.items)
      });
    });

    // When a todo is removed
    this.itemsRef.on('child_removed', (dataSnapshot) => {

        /* filter out one item! */
        this.items = this.items.filter((x) => x.id !== dataSnapshot.key());

        /* call the setter setState() - which copies the "items" array to the todoSource */
        this.setState({
          todoSource: this.state.todoSource.cloneWithRows(this.items)
        });

    });
  }

  addTodo() {
    if (this.state.newTodo !== '') {
      this.itemsRef.push({
        todo: this.state.newTodo
      });
      this.setState({
        newTodo: ''
      });
    }
  }

  removeTodo(rowData) {
    this.itemsRef.child(rowData.id).remove();
  }

  render() {
    return (
      <View style={styles.appContainer}>

        <View style={styles.titleView}>
          <Text style={styles.titleText}>
            My Todos
          </Text>
        </View>

        <View style={styles.inputcontainer}>
          <TextInput style={styles.input} onChangeText={(text) => this.setState({newTodo: text})} value={this.state.newTodo}/>
          <TouchableHighlight
            style={styles.touchhighlight}
            onPress={() => this.addTodo()}
            underlayColor='#dddddd'>
            <Text style={styles.btnText}>Add!</Text>
          </TouchableHighlight>
        </View>

        <ListView
          style={styles.listView}
          dataSource={this.state.todoSource}
          renderRow={this.renderRow.bind(this)} />

      </View>
    );
  }

  renderRow(rowData) {

    return (
      <View style={styles.redView}></View>

  /*
        <View>
          <View style={styles.row}>
            <Text style={styles.todoText}>{rowData.text.todo}</Text>
            <TouchableHighlight
              underlayColor='#dddddd'
              onPress={() => this.removeTodo(rowData)}>
                <Text style={styles.removeText}>Remove</Text>
              </TouchableHighlight>
          </View>
          <View style={styles.row}>
            <Text style={styles.secondRowText}>Second row of text</Text>
          </View>
          <View style={styles.separator} />
        </View>
*/
    );
  }
}

class MyApp extends React.Component {
  render() {
    return (
      <React.NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Property Finder',
          component: TodoList,
        }}/>
    );
  }
}


var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    padding: 0
  },
  appContainer:{
    flex: 1,
    backgroundColor: 'cyan'
  },
  titleView:{
    backgroundColor: '#48afdb',
    paddingTop: 30,
    paddingBottom: 0,
    flexDirection: 'row'
  },
  titleText:{
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    flex: 1,
    fontSize: 20,
  },
  inputcontainer: {
    marginTop: 5,
    padding: 10,
    flexDirection: 'row'
  },
  touchhighlight: {
    height: 36,
    flex: 2,
    flexDirection: 'row',
    backgroundColor: '#48afdb',
    justifyContent: 'center',

    borderRadius: 4,
  },
  button: {
    height: 36,
    flex: 2,
    flexDirection: 'row',
    backgroundColor: '#48afdb',
    justifyContent: 'center',
    color: '#FFFFFF',
    borderRadius: 4,
  },
  btnText: {
    fontSize: 18,
    color: '#fff',
    marginTop: 6,
  },
  input: {
    height: 36,
    padding: 4,
    marginRight: 5,
    flex: 4,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#48afdb',
    borderRadius: 4,
    color: '#48BBEC'
  },
  row: {
    flexDirection: 'row',
    padding: 2,
    backgroundColor: 'yellow'

  },
  separator: {
    height: 1,
    backgroundColor: '#CCCCCC',
  },
  todoText: {
    flex: 1,
    padding: 0,
    backgroundColor: 'green'
  },
  removeText: {
    color: 'red'
  },
  secondRowText: {
    padding: 0,
    backgroundColor: 'cyan'
  },
  listView: {
    backgroundColor: 'green',
    padding: 0
  },
  redView: {
    flex: 1,
    backgroundColor: 'yellow'
  }
});

AppRegistry.registerComponent('TodoList', () => TodoList);
AppRegistry.registerComponent('MyApp', () => MyApp);
