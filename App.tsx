import {
  createStackNavigator,
} from 'react-navigation';

import { CreatePage } from './src/pages/CreatePage';
import { HomeScreen } from './src/pages/Home';
import { JoinPage } from './src/pages/JoinPage';

import { PAGES } from './src/enums/pages';
import { WaitingPage } from "./src/pages/WaitingPage";

const App = createStackNavigator({
  [PAGES.HOME_PAGE]: { screen: HomeScreen },
  [PAGES.CREATE_PAGE]: { screen: CreatePage },
  [PAGES.JOIN_PAGE]: { screen: JoinPage },
  [PAGES.WAITING_PAGE]: { screen: WaitingPage },
});

export default App;