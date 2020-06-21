export const fetchMoods = () => {
    return dispatch => {
        fetch('http://localhost:3001/api/v1/moods')
        .then(response => response.json())
        .then(moods => dispatch({type: 'FETCH_MOODS', payload: moods}))
    }
}