function sendResponseToUser(req, res, next) {
    res.send("Response to User.")
}

module.exports = {
    sendResponseToUser
} 