import http from 'http'

const server:http.Server = http.createServer(function(request: http.IncomingMessage, response:http.ServerResponse){
    response.writeHead(200, {"Content-Type": "text/plain"})
    response.end("Hello Heroku\n")
})

server.listen(process.env.PORT)