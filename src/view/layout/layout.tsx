import React, {lazy} from 'react';
import AsideMenu from './asideMenu'
import TopHeader from './topHeader'
import MainRouter from '../../router/main'
import appCss from './layout.module.less'

const Layout: React.FunctionComponent = () => {
    console.log('请记得修改组件名---');

    return (
        <div className={appCss.layout}>
            <div className={appCss.asideMenu}>
                <AsideMenu />
            </div>
            <div className={appCss.mainWrap}>
                <div className={appCss.topHeader}>
                    <TopHeader/>
                </div>
                <div className={appCss.mainContent}>
                    <MainRouter/>
                </div>
            </div>
        </div>
    );
};

export default Layout;
