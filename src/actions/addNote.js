// WORKING ON NEW FEATURE

export const addNote = (promptID, moodID) => {
    return dispatch => {
        debugger
        fetch(`http://localhost:3001/api/v1/moods/${moodID}/prompts/${promptID}/notes`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(prompt)
        })
        .then(response => response.json())
        .then(prompt => dispatch({ type: 'ADD_NOTE', payload: prompt }))
    }
}