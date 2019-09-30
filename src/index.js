import ReactDOM from 'react-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import { createStore, createApp } from './app';

const defaultState = {};

const { store, history } = createStore(createBrowserHistory(), defaultState);
const app = createApp(store, history);

const root = document.getElementById('root');
ReactDOM.render(app, root);

if (module.hot) {
  // app 监听的引用相同
  module.hot.accept(createApp);
}
