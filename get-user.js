const bycrypt = require('bcrypt');
const userSimulation = require('./user');

async function getUser(user,password){
    const findUser = userSimulation.find(u => u.user === user)
    if (!findUser) {
    return null;
  }

  const passwordMatch = await bycrypt.compare(password, findUser.password);
  if (!passwordMatch) {
    return null;
  }

  return findUser;
}

module.exports = {getUser}