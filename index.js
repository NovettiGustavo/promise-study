/*
Crie um sistema que simule:

1 -Login de usuário

2 - Busca de dados privados

3 - Registro de log da operação

Cada função deve retornar uma Promise, e devem ser encadeadas.

fazerLogin(usuario, senha)

resolve se usuário for "admin" e senha "1234"
rejeita caso contrário

buscarDadosPrivados(usuario)
resolve com dados fictícios (ex: {segredo: "chave123"}) após 1s

rejeita se usuario !== "admin"

registrarLog(acao)
resolve imediatamente com "Log registrado"
sempre resolve (mesmo se entrada for inválida)

Tarefa final: Encadear essas chamadas de forma que:

Se qualquer uma falhar (exceto o log), apareça o erro no console

O log sempre seja registrado no final (sucesso ou falha)


Exemplo de chamada principal:
fazerLogin("admin", "1234")
  .then(usuario => buscarDadosPrivados(usuario))
  .then(dados => {
    console.log("Dados:", dados);
  })
  .catch(err => {
    console.error("Erro:", err);
  })
  .finally(() => {
    registrarLog("Tentativa de acesso").then(msg => console.log(msg));
  });
*/

const userSimulation = require('./user');

function getUser(user,password){
    const findUser = userSimulation.find(u => u.user === user && u.password === password)
    return findUser;
}

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

function logRegister(logMessage, status){
        return new Promise((resolve) =>{
            const timestamp = new Date().toISOString()

            const logEntry = {
                timestamp,
                status,
                logMessage
            }

            console.log(`${logEntry.logMessage}, ${logEntry.status}, ${logEntry.timestamp}`)

            resolve(logEntry)
        })
}

async function main(){
    try{
        const user = await login("admin", "1234");
        const data = await getPrivateData(user.user, user.password);
        console.log("Data:", data);
        return logRegister("Resolved","200" );
    }catch(error){
        await logRegister("rejected","400");
        return error.message;
    }finally{
        const msg = await logRegister("Finally process", "201");
        console.log(msg);
    }
}

main();

