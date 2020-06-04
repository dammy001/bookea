export function setUser(user) {
    
    return {
        type: "SET_USER",
        payload: new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(user)
            })
        })
    }
}