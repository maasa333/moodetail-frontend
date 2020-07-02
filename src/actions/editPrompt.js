export const editPrompt = (prompt, moodID) => {
    return dispatch => {
        // console.log(prompt)
        fetch(`http://localhost:3001/api/v1/moods/${moodID}/prompts`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(prompt)
        })
        .then(response => response.json())
        .then(mood => console.log(mood))
        // .then(mood => dispatch({ type: 'ADD_PROMPT', payload: mood }))
    }
}