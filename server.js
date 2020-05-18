// Standard Nodejs Modules
const fileSystem = require('fs');
const http = require('http');
const path = require('path');
const exec = require('child_process').exec;

//Create Server Using Http managed by C/C++ wrapper to net
const server =  http.createServer();

// Register an event to server. Http Extends/Inherits Event Object to get Observer kind of behaviour.
server.on('request', handleRequest);

// Define the port on which server will respond.
server.listen(9000, listener);















// callback function to be triggerd when http request arrives.
function handleRequest(request, response) {
    
    process.stdout.write("Received Request\n");

    // Path module provides operation related to relative and absolute path.
    const filetoRead = path.join(process.cwd(), '/dist/index.html');
    
    //File System again Extends/Inherits Stream Object to send data in Buffer 
    const fileStream = fileSystem.createReadStream(filetoRead);

    // As request and response are Readable and Writable Streams we can pass the data back to incoming http.
    fileStream.pipe(response);
};

// Listen for Server and execute callback
function listener() {
    let count = 5;
    process.stdout.write("Say I am Listening on 9000 !\n");
    const interval = setInterval(()=> process.stdout.write(`${count--}\n`), 1000);
    setTimeout(() =>{ exec('open -a "Google Chrome" http://localhost:9000')
    clearInterval(interval);   
}, 5000);
}

