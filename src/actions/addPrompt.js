export const addPrompt = data => {
    return (dispatch) => {
        fetch('http://localhost:3001/api/v1/moods/{mood_id}/prompts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(data)
        })
    }
}