// Dev
// (public token)
//client ID         948208241901-ahtoiredpq75236mqocikv2q5i6qdgae.apps.googleusercontent.com
// (private token)
// client secret    sAONYnXbHejE7piXxfDo3QeD
//
// Prod
//client ID         542544355143-g6feiad6nmarjm1dm6qdi5qt0o8as3cn.apps.googleusercontent.com
// client secret    HhTbAIgu1Y7E_c1OaDevMXRI
// mongoURI:       'mongodb://billj:Iforgot1@ds143573.mlab.com:43573/emaily-prod',
// cookieKey        fdsfsdfdslodfs8098687679fj39pklq

module.exports = {
    googleClientID: process.env.GOOGLE_CLIENT_ID,
    googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
    mongoURI:  process.env.MONGO_URI,
    cookieKey: process.env.COOKIE_KEY
};

