import {
  createStackNavigator,
} from 'react-navigation';

import { JoinScreen } from './src/pages/Join';
import { HomeScreen } from './src/pages/Home';

const App = createStackNavigator({
  Home: { screen: HomeScreen },
  Join: { screen: JoinScreen },
});

export default App;