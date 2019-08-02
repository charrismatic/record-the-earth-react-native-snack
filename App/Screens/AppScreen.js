import React from 'react';
import { FlatList, StyleSheet, Text, Button, View } from 'react-native';
import {  
  createStackNavigator,
  createAppContainer,
} from 'react-navigation';

import ProfileScreen from './ProfileScreen'
import SurveyScreen from './Survey/index'
import CheckBoxView from '../components/CheckBoxView'

class ListScreen extends React.Component {
  static navigationOptions = {
    title: 'User Profile',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <FlatList
          data={[
            { key: 'Devin' },
            { key: 'Jackson' },
            { key: 'James' },
            { key: 'Joel' },
            { key: 'John' },
            { key: 'Jillian' },
            { key: 'Jimmy' },
            { key: 'Julie' },
          ]}
          renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
        />
        <Button title="Home" onPress={() => navigate('Home', {})} />
        <Button title="Survey" onPress={() => navigate('Survey', {})} />
        <Button title="Boxes" onPress={() => navigate('Boxes', {})} />
      </View>
    );
  }
}

class MainAppScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.main}>
        <Text>HOME SCREEN</Text>
        <Button
          title="Go to profile"
          onPress={() => navigate('Profile', { name: 'Profile' })}
        />
        <Button
          title="Take Survey"
          onPress={() => navigate('Survey', { name: 'Survey' })}
        />
        <Button
          title="CheckBoxView"
          onPress={() => navigate('Boxes', { name: 'Boxes' })}
        />
      </View>
    );
  }
}



class CheckBoxScreen extends React.Component {
  static navigationOptions = {
    title: 'Boxes Boxes',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>Boxes</Text>
        <CheckBoxView />
        <Button title="Home" onPress={() => navigate('Home', {})} />
        <Button title="Survey" onPress={() => navigate('Survey', {})} />
        <Button title="Profile" onPress={() => navigate('Profile', {})} />
        <Button title="List" onPress={() => navigate('List', {})} />
      </View>
    );
  }
}


const MainStackNav = createStackNavigator({
  Main: { screen: MainAppScreen },
  Profile: { screen: ProfileScreen },
  Survey: { screen: SurveyScreen },
  List: { screen: ListScreen },
  Boxes: {screen: CheckBoxScreen }
});



const styles = StyleSheet.create({
  main: {
    fontSize: '16px',
    paddingTop: 0,
  },
  container: {
    flex: 1,
    paddingTop: 10,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

const App = createAppContainer(MainStackNav);

export default App;
