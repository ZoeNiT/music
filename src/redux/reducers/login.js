import { SAVE_USER_INFO, /* DEL_USER_INFO */ } from '../action_type'

let state = {
    userInfo: JSON.parse(localStorage.getItem('userInfo')) || {},
    token: JSON.parse(localStorage.getItem('token')) || '',
    isLogin: JSON.parse(localStorage.getItem('isLogin')) || false
}

export default function loginReducer(preState = state, action) {
    const { type, data } = action
    let newState
    switch (type) {
        case SAVE_USER_INFO:
            newState = { userInfo: data.profile, token: data.token, isLogin: true }
            return newState
/*         case DEL_USER_INFO:
            newState = { userInfo: {}, token: '', isLogin: false }
            return newState */
        default: return preState
    }
}