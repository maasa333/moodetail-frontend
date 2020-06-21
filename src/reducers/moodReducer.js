export default function moodReducer(state = {moods: [], prompts:[]}, action) {
    switch (action.type) {
        case 'FETCH_MOODS':
            // console.log('hit FETCH_MOODS action', action)
            return {moods: action.payload}
        case 'ADD_PROMPT':
            console.log('hit ADD_PROMPT action', action)
    
            let moods = state.moods.map(mood => {
                if (mood.id === action.payload.mood_id) {
                    // debugger
                    mood.prompts.push(action.payload)
                    return mood
                } else {
                    return mood
                }
            })
            // debugger
            return {...state, moods: moods}

//             let mood = state.moods.filter(mood => mood.id === action.payload.mood_id)[0]
//             mood.prompts.push(action.payload)

            // return {...state, moods: [...state.moods, mood]}
            
            // mood.prompts.concat(action.payload)

            // return {...state, moods: [...state.moods, mood]}
            
            // break
            // return {...state, moods: [...state.moods, updatedMood]}
            
            // return {...state, prompts: [...state.prompts, action.payload]}
            // const prompt = {
            //     mood_id: action.payload.mood_id,
            //     desc: action.payload.desc
            // }
            // const mood = state.moods.filter(mood => mood.id === prompt.mood_id)
            // return {...state, moods: [...state.moods, prompt]}
        default:
            return state
    }
}