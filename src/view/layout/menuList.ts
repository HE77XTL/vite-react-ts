// 一般数据库 根据 parentId 来区分上下级
// ant menu tree 结构
// 模拟了两种情况， 后端怎么回返都可有处理， 实际项目按需使用


import {cloneDeep} from 'lodash'

interface TreeNode {
    [key: string]: any // type for unknown keys.
    key: string,
    title: string,
    children?: TreeNode[] // type for a known property.
}

type MenuList = Record<string, string | number | undefined>

const menuTreeArr = [
    {
        key: 'dashboard',
        title: '系统面板',
        icon: '',
        url: '/'
    },
    {
        key: 'userManage',
        title: '用户管理',
        icon: '',
        children: [
            {
                key: 'userList',
                title: '用户列表',
                icon: '',
                url: '/userList'
            },
        ],
    },
    {
        key: 'systemManage',
        title: '系统管理',
        icon: '',
        children: [
            {
                key: 'menuManage',
                title: '菜单管理',
                icon: '',
            },
            {
                key: 'authManage',
                title: '权限管理',
                icon: '',
            },
            {
                key: 'roleManage',
                title: '角色管理',
                icon: '',
            },
        ],
    },
    {
        key: 'testPage',
        title: '测试页面',
        icon: '',
        children: [
            {
                key: 'testPageFirstLevel',
                title: '测试页面A',
                icon: '',
                children: [
                    {
                        key: 'testPageSecond',
                        title: '测试页面A-A',
                        icon: '',
                    },
                ],
            },
        ],
    },
];

export const menuList = [
    {
        id: 200,
        parentId: 0,
        sort: 0,
        key: 'dashboard',
        title: '系统面板',
        icon: '',
        url: '/'
    }, {
        id: 201,
        parentId: 0,
        sort: 1,
        key: 'userManage',
        title: '用户管理',
        icon: '',
        url: '',
    }, {
        id: 202,
        parentId: 0,
        sort: 2,
        key: 'systemManage',
        title: '系统管理',
        icon: '',
        url: '',
    }, {
        id: 203,
        parentId: 0,
        sort: 3,
        key: 'testPage',
        title: '测试页面',
        icon: '',
    }, {
        id: 204,
        parentId: 201,
        sort: 1,
        key: 'userList',
        title: '用户列表',
        icon: '',
        url: '/userList'
    }, {
        id: 205,
        parentId: 202,
        key: 'menuManage',
        title: '菜单管理',
        icon: '',
    },
    {
        id: 206,
        parentId: 202,
        key: 'authManage',
        title: '权限管理',
        icon: '',
    },
    {
        id: 207,
        parentId: 202,
        key: 'roleManage',
        title: '角色管理',
        icon: '',
    }, {
        id: 208,
        parentId: 203,
        key: 'testPageFirstLevel',
        title: '测试页面A',
        icon: '',
    }, {
        id: 209,
        parentId: 208,
        key: 'testPageSecond',
        title: '测试页面A-A',
        icon: '',
    }
];

export function listToTreeArr(data: MenuList[], rootId: string | number) {
    const list = cloneDeep(data);
    let treeArr = [];
    let menuMap = new Map();
    list.forEach((item: MenuList) => {
        menuMap.set(item.id, item)
    });

    for (const e of list) {
        if (e.parentId !== rootId) {
            const parent = menuMap.get(e.parentId);
            if (!parent.children) {
                parent.children = []
            }
            parent.children.push(e)
        }
    }

    for (let value of menuMap.values()) {
        if (value.parentId === rootId) {
            treeArr.push(value)
        }
    }
    return treeArr
}

export function treeArrToList(data: TreeNode[]) {
    const treeArr = cloneDeep(data);
    let list: TreeNode[] = [];

    function getMenuItem(arr: TreeNode[], parentId: string | number) {
        for (let i = 0; i < arr.length; i++) {
            let item = arr[i];
            if (item.children) {
                Array.isArray(item.children) && getMenuItem(item.children, item.key);
                delete item.children
            }
            list.push({...item, parentId})
        }
    }

    getMenuItem(treeArr, 0);
    return list
}


export default menuTreeArr

