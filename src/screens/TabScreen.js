import * as React from 'react';
import {View, useWindowDimensions, Text} from 'react-native';
import {TabView, SceneMap} from 'react-native-tab-view';
import Check from './Check';
import SubmitScreen from './SubmitScreen';

const FirstRoute = () => {
  return <SubmitScreen />;
};

const SecondRoute = () => {
  return <Check />;
};

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});

export default function TabViewExample() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'Submit'},
    {key: 'second', title: 'Check-ins'},
  ]);

  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
    />
  );
}
