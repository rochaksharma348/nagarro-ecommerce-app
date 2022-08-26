// add to .gitignore

module.exports = {
    google : {
        clientId : "<url>.apps.googleusercontent.com",
        clientSecret : "my-secret"
    },
    mongoDB : {
        dbURI : 'mongodb+srv://<my-user>:<my-password>@<my-url>?retryWrites=true&w=majority'
    },
    session : {
        cookieKey : 'rochakssecret'
    }
}
