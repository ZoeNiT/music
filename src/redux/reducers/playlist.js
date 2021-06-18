import { CREATE_PLAYLIST, CLEAR_PLAYLIST, PLAY_MUSIC, STOP_MUSIC, CHANGE_MUSIC } from '../action_type'

let state = {
    playlist: [],
    ids: '',
    isPlay: false,
    play_id: ''
}

export default function playerReducer(preState = state, action) {
    const { type, data } = action
    let newState = null
    switch (type) {
        case CREATE_PLAYLIST:
            newState = { playlist: data.playlist, play_id: data.ids[0] * 1, ids: data.ids, isPlay: true }
            return newState
        case CLEAR_PLAYLIST:
            newState = { playlist: [], ids: '', isplay: false, play_id: '' }
            return newState
        case PLAY_MUSIC:
            newState = { playlist: data.playlist, ids: data.play_id, play_id: data.play_id, isPlay: data.isPlay }
            return newState
        case STOP_MUSIC:
            newState = { playlist: data.playlist, ids: data.ids, play_id: data.play_id, isPlay: data.isPlay }
            return newState
        case CHANGE_MUSIC:
            newState = { playlist: data.playlist, ids: data.ids, play_id: data.play_id, isPlay: true }
            return newState

        default: return preState
    }
}