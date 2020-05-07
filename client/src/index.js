import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { campaignReducer } from './reducers/campaignReducer';
import { BrowserRouter as Router } from 'react-router-dom';

import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import Footer from './Footer';

const store = createStore(campaignReducer, applyMiddleware(thunk));

// Process to make footer sticky in a cra app if this fails just add it to public html?
// The body is doing something to keep the footer in the middle of the page
// const withFooter = WrappedComponent => () => [
//   <WrappedComponent key='1' />,
//   <Footer key='2' />
// ];

// const Wrapper = () => (
//   <Provider store={store}>
//     <Router>
//       <App />
//     </Router>
//   </Provider>
// )

// const WrapperWithFooter = withFooter(Wrapper)

ReactDOM.render(
  <React.StrictMode>
    {/* <WrapperWithFooter /> */}
    <Provider store={store}>
    <Router>
      <App />
    </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
