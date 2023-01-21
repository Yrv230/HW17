export const GET_USERS = 'GET_USERS';


export const getUsers = (user) => ({
    type: GET_USERS,
    payload: user
})

export const loadUsers = () => (dispatch) => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => dispatch(getUsers(data)))
}

