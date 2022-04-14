// 创建store
// redux是一个独立库，我们还需要安装react-redux进行连接
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import reducer from './reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// 参数一：reducer，参数二：应用中间件，增强插件等 
const store = createStore(reducer, composeEnhancers(
    applyMiddleware(thunk)
));

export default store;