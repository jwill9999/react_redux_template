import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {Router, Route, browserHistory, IndexRoute} from "react-router";
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';
import allReducers from './reducers';
import Root from './components/App';
import Home from './components/Home/Home'
import User from './components/User/User'
import About from './components/About/About'

const logger = createLogger();
const store = createStore(
    allReducers,
    applyMiddleware(thunk, promise, logger)
);

class App extends React.Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path={"/"} component={Root} >
                <IndexRoute component={Home} />  
                <Route path={"user/:id"} component={User} />
                <Route path={"home"} component={Home} />   
                <Route path={"about"} component={About} />  
                </Route>
                <Route path={"home-single"} component={Home}/>
            </Router>
        );
    }
}


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
