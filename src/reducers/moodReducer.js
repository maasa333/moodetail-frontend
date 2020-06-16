export default function moodReducer( state = { moods: [] }, action) {
    switch (action.type) {
        case 'FETCH_MOODS':
            return {moods: action.payload}
        default:
            return state
    }
}