import React from 'react';
import {Route, IndexRoute} from 'react-router';
import Template from '../containers/template'


const createRoute = ()=>{
    return(<Route
    path="/"
    component ={Template}>

    </Route>)

}


const Routes = createRoute();

export default Routes;