const initialValue = {
    user: {
        name: "",
        email: "",
        password: ""
    }   
}
const userReducer = (state = initialValue, action) => {
    switch(action.type) {
        case "SET_USER_FULFILLED":
            state = {
                state,
                user: action.payload
            }
            break;
    }
    return state;
}

export default userReducer