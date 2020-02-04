import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { Route, BrowserRouter,HashRouter, Switch } from 'react-router-dom';

import List from './list.js';
import About from './about.js';

class App extends Component {
    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route path="/" exact component={List} />
                   <Route path="/about"  component={About} />
                </Switch>
            </HashRouter>
        )
    }
};

ReactDom.render(
    <App />,
    document.getElementById('app')
)