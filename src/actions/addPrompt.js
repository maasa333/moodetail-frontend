export const addPrompt = (prompt, moodID) => {
    return dispatch => {
        fetch(`http://localhost:3001/api/v1/moods/${moodID}/prompts`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(prompt)
        })
        .then(response => response.json())
        .then(mood => dispatch({ type: 'ADD_PROMPT', payload: mood }))
    }
}