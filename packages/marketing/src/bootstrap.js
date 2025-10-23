import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// createMemoryHistory: React Router DOM internally makes use of history
import { createMemoryHistory, createBrowserHistory } from 'history';

// Mount function to start up the app
const mount = (el, { onNavigate, defaultHistory }) => {
  const history = defaultHistory || createMemoryHistory();

  if ( onNavigate ) {
    history.listen(onNavigate);
  }

  ReactDOM.render(<App history={history} />, el);

  return {
    onParentNavigate({ pathname: nextPathName }) {
      const { pathname } = history.location;
      if ( pathname !== nextPathName ){
        history.push(nextPathName);
      }
    }
  }

};

// define development
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_marketing-dev-root');

// define isolation (call mount immediately)

  if (devRoot) {
    mount(devRoot, { defaultHistory: createBrowserHistory() });
  }
}

// we're running through container and we should export the mount function
export { mount };