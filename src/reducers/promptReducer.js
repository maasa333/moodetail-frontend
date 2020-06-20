export default function promptReducer( state = { prompts: [] }, action) {
    switch (action.type) {
        case 'ADD_PROMPT':
            return {prompts: action.payload}
        default:
            return state
    }
}