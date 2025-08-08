const {getUser} = require('./get-user')

async function login(user, password) {
        await new Promise(resolve => setTimeout(resolve,2000));

        const foundUser = await getUser(user, password);
         if (!foundUser) {
        throw { type: "Login error", message: "Invalid user or password" };
    }

    return foundUser;
    }


module.exports = {login}