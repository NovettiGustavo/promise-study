const {getUser} = require('./get-user')

function getPrivateData(user,password){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            const foundUser = getUser(user, password);
            if(foundUser){
                if(foundUser.user !== "admin"){
                    reject("User not allowed")
                }else{
                    resolve(foundUser.secret_key)
                }
            }else{
                reject("User not informed!")
            }
        }, 2000)
    })
}

module.exports = {getPrivateData}