import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import getRoutes from './router';
import reducer from './reducers';

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

class App extends React.Component {

    render() {
        return (
            <Provider store={store}>
                <Router>
                    {getRoutes()}
                </Router>
            </Provider>
        );
    }
}

export default App;
