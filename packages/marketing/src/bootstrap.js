import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Mount function to start up the app
const mount = (el) => {
  ReactDOM.render(<App />, el);
};

// define development
if (process.env.NODE_ENV === 'development') {
    const rootElementId = '_marketing-dev-root';
    const devRoot = document.querySelector(`#${rootElementId}`);
    if(devRoot) {
        mount(devRoot);
    }else {
        throw new Error(`${rootElementId} element not found.`)
    }
}

// define isolation (call mount immediately)

// we're running through container and we should export the mount function
export { mount };