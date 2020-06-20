export const addPrompt = (data) => {
    return dispatch => {
        // console.log('hit addPrompt action creator')
        // dispatch({ type: 'ADD_PROMPT' })
        return fetch(`http://localhost:3001/api/v1/moods/${data.mood_id}/prompts`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(data)
        })
        // .then(console.log(data))
    }
}