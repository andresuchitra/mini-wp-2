const jwt = require('jsonwebtoken')

module.exports = function(payload) {
    return jwt.sign(payload, process.env.SECRET)
}