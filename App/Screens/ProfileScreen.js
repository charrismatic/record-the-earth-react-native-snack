import React from 'react';
import { 
  FlatList, 
  StyleSheet, 
  Text, 
  Button, 
  View 
} from 'react-native';

export default class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: 'User Profile',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>User Profile</Text>
        <Button title="Home" onPress={() => navigate('Home', {})} />
        <Button title="Survey" onPress={() => navigate('Survey', {})} />
        <Button title="Boxes" onPress={() => navigate('Boxes', {})} />
        <Button title="List" onPress={() => navigate('List', {})} />
      </View>
    );
  }
}