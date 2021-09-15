export function login(userData) {
    return {
        type: "LOG_IN",
        payload: userData
    }
}

export function logout(userData) {
    return {
        type: "LOG_OUT",
        payload: userData
    }
}

export default function loginReducer(userData = null, action) {
    switch (action.type) {
        case "LOG_IN":
            return {
                ...userData,
                ...action.payload,
            }
        case "LOG_OUT":
            return {}
        default:
            return userData
    }
}




