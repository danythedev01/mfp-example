import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// createMemoryHistory: React Router DOM internally makes use of history
import { createMemoryHistory, createBrowserHistory } from 'history';

// Mount function to start up the app
const mount = (el, { onNavigate, onSignIn, defaultHistory, initialPath }) => {
  const history = defaultHistory || createMemoryHistory({
    // to avoid starting at `/`
    initialEntries: [initialPath]
  });

  if ( onNavigate ) {
    history.listen(onNavigate);
  }

  ReactDOM.render(<App onSignIn={onSignIn} history={history} />, el);

  return {
    onParentNavigate({ pathname: nextPathName }) {
      const { pathname } = history.location;
      console.log(nextPathName);
      if ( pathname !== nextPathName ){
        history.push(nextPathName);
      }
    }
  }

};

// define development
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_auth-dev-root');

// define isolation (call mount immediately)

  if (devRoot) {
    mount(devRoot, { defaultHistory: createBrowserHistory() });
  }
}

// we're running through container and we should export the mount function
export { mount };