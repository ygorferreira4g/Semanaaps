import React from 'react';
import { StatusBar, YellowBox } from 'react-native';

import Routes from './src/routes';

// ajuste do erro da bliblioteca WebSocket rebaixar varsao resolve
YellowBox.ignoreWarnings([
  'Unrecognized WebSocket'
]);

export default function App() {
  return (
    <>
    <StatusBar barStyle="light-content" backgroudColor="#7d40e7"/>
    <Routes />
    </>
  );
}

