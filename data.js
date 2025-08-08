const { getUser } = require('./get-user')

async function getPrivateData(user, password) {
    await new Promise(resolve => setTimeout(resolve, 2000))
    const foundUser = await getUser(user, password)

    if (!foundUser) throw new Error("User not informed!");

    if (foundUser.user !== "admin") {
        throw new Error("User not allowed");
    }

    return foundUser.secret_key
}

module.exports = { getPrivateData }