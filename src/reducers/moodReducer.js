export default function moodReducer(state = {moods: [], prompts:[]}, action) {
    switch (action.type) {
        case 'FETCH_MOODS':
            // debugger
            // console.log('hit FETCH_MOODS action', action)
            return {moods: action.payload}
        case 'ADD_PROMPT':
            console.log('hit the ADD_PROMPT action', action)
            // debugger
            let moods = state.moods.map(mood => {
                if (mood.id === action.payload.id) {
                    // mood.prompts.push(action.payload)
                    // return mood
                    return action.payload
                } else {
                    return mood
                }
            })
            return {...state, moods: moods}
        default:
            return state
    }
}