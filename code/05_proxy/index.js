const ezp = require('ezp')
const axios = require('axios')

axios.defaults.responseType = 'text'

module.exports = ezp({
    apply: async ([service, method], args) => {
        if (process.env.MONOLITH) {
            return require(`${service}lib`)[method](...args)
        } else {
            return axios.get(`http://${service}.service/${method}?${encodeArgs(args)}`)
        }
    }
})
