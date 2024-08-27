import '../global.css';
import React from 'react';
import {View, Text} from 'react-native';
import {GluestackUIProvider} from './components/ui/gluestack-ui-provider';
import {Heading} from './components/ui/heading';

const App = () => {
  return (
    <GluestackUIProvider>
      <Heading>Gluestack UI</Heading>
    </GluestackUIProvider>
  );
};

export default App;
