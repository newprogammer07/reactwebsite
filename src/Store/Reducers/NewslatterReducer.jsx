import { ADD_NEWSLETTER_RED, DELETE_NEWSLETTER_RED, GET_NEWSLETTER_RED, UPDATE_NEWSLETTER_RED } from "../Constants"
export function NewslatterReducer(state = [], action) {
    switch (action.type) {
        case ADD_NEWSLETTER_RED:
            state.push(action.data)
            return state
        case GET_NEWSLETTER_RED:
            return action.data
        case DELETE_NEWSLETTER_RED:
            var newState = state.filter(item=>item.id!==action.data.id)
            return newState
        case UPDATE_NEWSLETTER_RED:
            var index = state.findIndex((item)=>item.id===Number(action.data.id))
            state[index].name = action.data.name
            return state
        default:
            return state
    }
}