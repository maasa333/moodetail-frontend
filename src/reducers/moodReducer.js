export default function moodReducer( state = {moods: [], prompts:[]}, action) {
    switch (action.type) {
        case 'FETCH_MOODS':
            console.log('hit FETCH_MOODS action', action)
            return {moods: action.payload}
        case 'ADD_PROMPT':
            console.log('hit ADD_PROMPT action', action)
            const prompt = {
                moodID: action.payload.mood_id,
                desc: action.payload.desc 
            }
            return {...state, prompts: [...state.prompts, prompt]}
            // let moods = state.moods.map(mood => { 
            //     if (mood.id === action.payload.mood_id) {
            //         return action.payload
            //     } else {
            //         return mood
            //     }
            // })
            // return {...state, moods: moods}
        default:
            return state
    }
}