import { getMenu } from '../common/menu';

const pathKey = {};
getMenu(res => {
  if (res && res.length !== 0) {
    res.forEach(item => {
      if (item.children && item.children !== null) {
        item.children.forEach(child => {
          pathKey[child.path] = { key: child.path, openKeys: item.name };
        });
      } else {
        pathKey[item.path] = { key: item.path };
      }
    });
  }
});


export default {
  namespace: 'global',
  state: {
    openKeys: '',
    selectedKeys: '1',
    collapsed: false,
  },
  subscriptions: {},
  effects: {},
  reducers: {
    toggle(state, action) {
      return {
        ...state,
        collapsed: action.payload,
      };
    },
    onselect(state, action) {
      return {
        ...state,
        selectedKeys: action.payload,
      };
    },
    onopen(state, action) {
      return {
        ...state,
        openKeys: action.payload,
      };
    },
    onPathChang(state, action) {
      if (!state.collapsed) {
        return {
          ...state,
          openKeys: pathKey[action.payload] && pathKey[action.payload].openKeys,
          selectedKeys: pathKey[action.payload] && pathKey[action.payload].key,
        };
      } else {
        return {
          ...state,
          openKeys: '',
          selectedKeys: pathKey[action.payload] && pathKey[action.payload].key,
        };
      }
    },
    resetAll(state) {
      return {
        ...state,
        openKeys: '',
        selectedKeys: '1',
        collapsed: false,
      };
    },
  },
};
