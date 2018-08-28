import {
  createStackNavigator,
} from 'react-navigation';

import { CreatePage } from './src/pages/CreatePage';
import { HomeScreen } from './src/pages/Home';
import { JoinPage } from './src/pages/JoinPage';

import { PAGES } from './src/enums/pages';

const App = createStackNavigator({
  [PAGES.HOME_PAGE]: { screen: HomeScreen },
  [PAGES.CREATE_PAGE]: { screen: CreatePage },
  [PAGES.JOIN_PAGE]: { screen: JoinPage },
});

export default App;