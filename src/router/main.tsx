import React, {lazy} from 'react';
import {Switch, Route} from 'react-router-dom';

const NotMatch = lazy(() => import('../view/404/NotMatch'));
const UserList = lazy(() => import('../view/user/userList/userList'));
const Home = lazy(() => import('../view/home/home'));


const MainIndex: React.FunctionComponent = (props) => {
    return (
        <Switch>
            <Route path="/" exact={true}>
                <Home/>
            </Route>
            <Route path="/userList">
                <UserList/>
            </Route>
            {/* 404, 请保持该路由为最后一个 */}
            <Route path="*">
                <NotMatch/>
            </Route>
        </Switch>
    )
};

export default MainIndex;

