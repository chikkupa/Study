import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import ComponentScreen from "./src/screens/ComponentScreen";
import ListScreen from './src/screens/ListScreen';
import ImageScreen from './src/screens/ImageScreen';
import CounterScreen from './src/screens/CounterScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentScreen,
    List: ListScreen,
    Images: ImageScreen,
    Counter: CounterScreen
  },
  {
    initialRouteName: 'Counter',
    defaultNavigationOptions: {
      title: 'My First Application'
    }
  }
);

export default createAppContainer(navigator);
