import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './test/index';
import Index1 from './test/index1';
import Index2 from './test/index2';
import Index3 from './test/index3';

export default () => {

    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/index2" component={Index2} />
            <Route exact path="/index3" component={Index3} />
            <Route path="/:index1" component={Index1} />
        </Switch>
    );
};