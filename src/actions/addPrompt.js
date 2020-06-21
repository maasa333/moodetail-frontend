export const addPrompt = (data) => {
    // debugger
    return dispatch => {
        fetch(`http://localhost:3001/api/v1/moods/${data.mood_id}/prompts`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(prompt => dispatch({ type: 'ADD_PROMPT', payload: prompt }))
    }
}