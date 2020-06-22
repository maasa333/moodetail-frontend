export const addAction = (action, prompt) => {
    return dispatch => {
        // debugger
        fetch(`http://localhost:3001/api/v1/moods/${prompt.moodID}/prompts/${prompt.prompt_id}/actions`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(action)
        })
        .then(response => response.json())
        .then(prompt => dispatch({ type: 'ADD_ACTION', payload: prompt }))
    }
}