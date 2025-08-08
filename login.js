const {getUser} = require('./get-user')

function login(user, password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const foundUser = getUser(user,password)
             console.log("Fazendo login...")
            if(!foundUser){
                reject({type: "Login error", message: "Invalid user or password"})
            }else{
                resolve(foundUser)
            }
           
        },2000)
    })
}

module.exports = {login}