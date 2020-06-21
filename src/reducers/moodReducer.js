export default function moodReducer(state = {moods: [], prompts:[]}, action) {
    switch (action.type) {
        case 'FETCH_MOODS':
            return {moods: action.payload}
        case 'ADD_PROMPT':
            let moods = state.moods.map(mood => {
                if (mood.id === action.payload.id) {
                    return action.payload
                } else {
                    return mood
                }
            })
            return {...state, moods: moods}
        case 'DELETE_PROMPT':
            console.log('hit DELETE_PROMPT action')
            let moods2 = state.moods.map(mood => {
                if (mood.id === action.payload.id) {
                    return action.payload
                } else {
                    return mood
                }
            })
            return {...state, moods: moods2}
        default:
            return state
    }
}