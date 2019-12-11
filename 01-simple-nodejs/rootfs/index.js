const process = require('process');
const http = require('http')
const port = 8000

// Handling web requests.

const requestHandler = (request, response) => {
  var random = Math.floor(Math.random() * 100) + 1
  console.log(`Next random number is ${random}`)
  response.end(random.toString(10))
}

http
  .createServer(requestHandler)
  .listen(port, (err) => {
    if (err) {
      return console.log('Error starting server:', err)
    }

    console.log(`Server is listening on ${port}`)
})

// Handling application termination requests.

const exitSignalHandler = (signal) => {
  console.log(`Received ${signal}, exiting`);
  process.exit();
}

process.on('SIGINT', exitSignalHandler)
process.on('SIGTERM', exitSignalHandler)
