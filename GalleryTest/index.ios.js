/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  AnimakitRotator
} from 'react-native';

const images = [
    { title: 'Image-1', width: '800', height: '650' },
    { title: 'Image-2', width: '1000', height: '1000'},
    { title: 'Image-3', width: '400', height: '650' }
]

const items = images.map(( item, i ) => {
    var src = "https://unsplash.it/" + item.width + "/" + item.height + "/?random";
    return (
        <div key={'image-'+i}>
            <h3 className="image-title">{item.title}</h3>
            <img className="centered" src={src} />
        </div>
    )
})

// add content to items
items.push(
    <div key={'content'}>
        <div className="centered">
            <h1>Some Random Text</h1>
            <p>Sociis risus nisi ridiculus urn?</p>
        </div>
    </div>
)

// add embeded video
items.push(
    <div key={'video'} className={'video-embed'}>
        <div className="centered">
            <iframe src="//player.vimeo.com/video/148626927" width="640px" height="420px" frameBorder="0"
              webkitallowfullscreen mozallowfullscreen allowFullScreen></iframe>
        </div>
    </div>
)


class GalleryTest extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Something</Text>
      </View>
    );
  }
}

class SubmitButton extends React.Component {
  state = {
    side: 'button'
  };

  listeners = {
    onClick:  this.onClick.bind(this),
    onSubmit: this.onSubmit.bind(this)
  };

  onSubmit() {
    this.setState({ side: 'button' });
  }

  onClick() {
    this.setState({ side: 'loader' });

    submit(this.listeners.onSubmit);
  }

  render() {
    return (
      <AnimakitRotator
        side = { this.state.side }
      >
        <button
          key       = "button"
          className = { styles.button }
          onClick   = { this.listeners.onClick }
        >
          Submit
        </button>
        <div
          key       = "loader"
          className = { styles.loader }
        />
      </AnimakitRotator>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('GalleryTest', () => SubmitButton);
