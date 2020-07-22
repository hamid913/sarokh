import React from 'react';
import { BrowserRouter,Route,Switch} from 'react-router-dom';
import Login from '../views/login';
import ShipperRouter from './ShipperRouter';
import '../styles/global.css';
import {RecoilRoot} from 'recoil';


function ApplicationRouter(porps)
{
    return(
        <RecoilRoot>
        <BrowserRouter>
        <Switch>
            <Route exact path='/login'>
                <Login />
            </Route>
        </Switch>
        <ShipperRouter />
        </BrowserRouter>
        </RecoilRoot>
    );
}

export default ApplicationRouter;