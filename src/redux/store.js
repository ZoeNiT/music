//引入createStore，专门用于创建redux中最为核心的store对象
import { createStore, applyMiddleware } from 'redux'
//引入combineReducers，用于汇总多个reducer
import { combineReducers } from 'redux'
//引入redux-thunk，用于支持异步action
import thunk from 'redux-thunk'
//引入redux-devtools-extension
import { composeWithDevTools } from 'redux-devtools-extension'

import login from './reducers/login'
import playlist from './reducers/playlist'

//汇总所有的reducer变为一个总的reducer
const reducer = combineReducers({
    login,
    playlist
})

//暴露store 
export default createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))
