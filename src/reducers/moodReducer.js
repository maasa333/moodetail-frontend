export default function moodReducer(state = {moods: [], prompts:[]}, action) {
    switch (action.type) {
        case 'FETCH_MOODS':
            // console.log('hit FETCH_MOODS action', action)
            return {moods: action.payload}
        case 'ADD_PROMPT':
            // console.log('hit ADD_PROMPT action', action)
            let moods = state.moods.map(mood => {
                if (mood.id === action.payload.mood_id) {
                    mood.prompts.push(action.payload)
                    return mood
                } else {
                    return mood
                }
            })
            return {...state, moods: moods}
        default:
            return state
    }
}