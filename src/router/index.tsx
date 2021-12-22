import React, {lazy, Suspense} from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

const Layout = lazy(() => import('../view/layout/layout'));
const Login = lazy(() => import('../view/login/login'));
const Registry = lazy(() => import('../view/layout/layout'));


const RouterIndex: React.FunctionComponent = () => (
    <HashRouter>
        <Suspense fallback={'loading'}>
            <Switch>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/registry">
                    <Registry />
                </Route>
                <Route path="/">
                    <Layout />
                </Route>
            </Switch>
        </Suspense>
    </HashRouter>
);

export default RouterIndex;

