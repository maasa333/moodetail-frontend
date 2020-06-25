export default function moodReducer(state = {moods: [], prompts:[]}, action) {
    switch (action.type) {
        case 'FETCH_MOODS':
            return {moods: action.payload}
        case 'ADD_PROMPT':
            // console.log(action)
            let moods = state.moods.map(mood => {
                if (mood.id === action.payload.id) {
                    return action.payload
                } else {
                    return mood
                }
            })
            return {...state, moods: moods}
        case 'DELETE_PROMPT':
            // debugger
            let remainingMoods = state.moods.map(mood => {
                if (mood.id === action.payload.id) {
                    return action.payload
                } else {
                    return mood
                }
            })
            return {...state, moods: remainingMoods}
        default:
            return state
    }
}