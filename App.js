import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import Main from './src/Main/';

const App: () => Node = () => {
  return (
    <SafeAreaView style={styles.main}>
      <Main />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    height: '100%',
  },
});

export default App;
