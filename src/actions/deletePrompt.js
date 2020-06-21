export const deletePrompt = (promptID, moodID) => {
    // debugger
    return dispatch => {
        fetch(`http://localhost:3001/api/v1/moods/${moodID}/prompts/${promptID}`, {
            method: 'DELETE'
        })
        .then(response => response.json())
        .then(mood => dispatch({ type: 'DELETE_PROMPT', payload: mood }))
    }
}