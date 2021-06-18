import { CREATE_PLAYLIST, CLEAR_PLAYLIST, PLAY_MUSIC,STOP_MUSIC, CHANGE_MUSIC } from '../action_type'

export const createPlayList = data => ({ type: CREATE_PLAYLIST, data })

export const clearPlayList = data => ({ type: CLEAR_PLAYLIST, data })

export const playMusic = data => ({ type: PLAY_MUSIC, data })

export const stopMusic = data => ({ type: STOP_MUSIC, data })

export const changeMusic = data => ({ type: CHANGE_MUSIC, data })