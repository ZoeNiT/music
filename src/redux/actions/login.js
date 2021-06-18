import { SAVE_USER_INFO, /* DEL_USER_INFO */ } from '../action_type'

//  保存用户信息
export const saveUserInfo = data => ({ type: SAVE_USER_INFO, data })

//  删除用户信息