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

module.exports = {logRegister}