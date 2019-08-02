import React from 'react';
import { ExpoConfigView } from '@expo/samples';

export default function SettingsScreen() {
  /** Go ahead and delete ExpoConfigView and replace it with your content */
  return <ExpoConfigView />;
}

SettingsScreen.navigationOptions = {
  title: 'app.json',
};
