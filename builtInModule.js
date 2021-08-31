const os = require('os')
const user = os.userInfo()
const systemInfo = {
    type: os.type(),
    release: os.release(),
    memory: os.totalmem(),
    freeMem: os.freemem()
}
console.log(systemInfo);