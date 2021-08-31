const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('This is our homepage')
    }
    if (req.url === '/about') {
        res.end('This is who we are.')
    }
    res.end(`
        <h1>Oops!</h1>
        <p>It seems that page doesn't exist</p>
        <a href='/'>Return to home</a>
    `)
})

server.listen(5000)