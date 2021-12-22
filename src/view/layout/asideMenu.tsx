import React, {useEffect, useState} from 'react';
import {Menu} from 'antd';
import {useHistory} from 'react-router-dom'
import {SelectInfo} from 'rc-menu/lib/interface'
import {
    AppstoreOutlined,
    MailOutlined,
    SettingOutlined,
} from '@ant-design/icons';
import logo from '../../asset/img/logo.png';
import appCss from './asideMenu.module.less'
import {listToTreeArr, menuList} from './menuList'


const AsideMenu: React.FunctionComponent = () => {
    const history = useHistory();
    const menuTreeArr = listToTreeArr(menuList, 0);

    interface MenuInterface {
        title: string;
        icon?: string;
        key: string;
        children?: Array<any>
    }

    const menuIconMap = {};

    const rootSubmenuKeys = ['dashboard', 'userManage', 'systemManage', 'testPage'];
    const [openKeys, setOpenKeys] = useState<string[]>([]);


    function onOpenChange(keys: string[]) {
        const latestOpenKey = keys.find(
            (key: string) => openKeys.indexOf(key) === -1
        );
        if (latestOpenKey && rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            setOpenKeys(keys);
        } else {
            setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
        }
    }

    function onSelect(menuItem: SelectInfo) {
        if (rootSubmenuKeys.indexOf(menuItem.key) !== -1) {
            setOpenKeys([])
        }
        const selectMenu = menuList.find(m => {
            return m.key === menuItem.key
        });
        if (selectMenu && selectMenu.url) {
            history.push(selectMenu.url)
        }
    }


    function getMenuItem(menuList: MenuInterface[]) {
        return menuList.map(menu => {
            return (menu.children && menu.children.length > 0)
                ? <Menu.SubMenu
                    title={menu.title}
                    key={menu.key}>
                    {getMenuItem(menu.children)}
                </Menu.SubMenu>
                : <Menu.Item
                    key={menu.key}>
                    {menu.title}
                </Menu.Item>
        })
    }


    return (
        <div className={appCss.vAsideMenu}>
            <div className={appCss.logoWrap}>
                <img src={logo} alt="logo"/>
            </div>
            <Menu
                mode="inline"
                theme={'dark'}
                openKeys={openKeys}
                onSelect={onSelect}
                onOpenChange={onOpenChange}>
                {getMenuItem(menuTreeArr)}
            </Menu>
        </div>
    );
};

export default AsideMenu;

