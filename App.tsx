import {
  createStackNavigator,
} from 'react-navigation';

import { CreateRoom } from './src/pages/CreateRoom';
import { HomeScreen } from './src/pages/Home';
import { JoinRoom } from './src/pages/JoinRoom';

import { PAGES } from './src/enums/pages';

const App = createStackNavigator({
  [PAGES.HOME]: { screen: HomeScreen },
  [PAGES.CREATE_ROOM]: { screen: CreateRoom },
  [PAGES.JOIN_ROOM]: { screen: JoinRoom },
});

export default App;