import * as React from 'react';
import {View, useWindowDimensions} from 'react-native';
import {TabView, SceneMap} from 'react-native-tab-view';
import Check from './Check';
import SubmitScreen from './SubmitScreen';

const FirstRoute = () => {
  <SubmitScreen />;
};

const SecondRoute = () => {
  <Check />;
};

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});

export default function TabViewExample() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'First'},
    {key: 'second', title: 'Second'},
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