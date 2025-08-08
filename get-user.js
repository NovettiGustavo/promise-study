const userSimulation = require('./user');

function getUser(user,password){
    const findUser = userSimulation.find(u => u.user === user && u.password === password)
    return findUser;
}

module.exports = {getUser}