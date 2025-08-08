const dotenv = require('dotenv');
dotenv.config();
const bycript = require('bcrypt');

async function passwordGenerate(password){
    const saltRounds = 10;
    const hash = await bycript.hash(password,saltRounds);
    console.log("hash gerado", hash)
}

passwordGenerate(process.env.ADMIN_PASS);