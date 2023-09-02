import {View, Text} from 'react-native';
import React from 'react';
import TabViewExample from './src/screens/TabScreen';
// import CheckScreen from './src/screens/CheckScreen';
// import SubmitScreen from './src/screens/SubmitScreen';
// import Check from './src/screens/Check';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Webcraft Assignment App</Text>
      </View>
      <TabViewExample />
    </View>
  );
};

const styles = {
  header: {
    padding: 20,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    color: 'black', // Customize the text color
  },
};

export default App;
