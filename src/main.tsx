import React from 'react'
import ReactDOM from 'react-dom'
import Index from './router/index';
import 'antd/dist/antd.less';
import './asset/css/common.less'

// ant StrictMode findDOMNode 报错 不打印
const consoleError = console.error.bind(console);
console.error = (errMessage, ...args) => {
    if (process.env.NODE_ENV === 'development' && errMessage.includes('Warning') && args[0].includes('findDOMNode')){
        return;
    }
    consoleError(errMessage, ...args);
};

ReactDOM.render(
  <React.StrictMode>
      <Index />
  </React.StrictMode>,
  document.getElementById('root')
);
