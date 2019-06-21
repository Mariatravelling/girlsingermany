
const port = process.env.PORT;
// || 5000
 // run hexo server 
//  var exec = require('child_process').exec, child;

// child = exec('./node_modules/.bin/hexo server -p' + port, function(error, stdout, stderr) {
//     console.log(stdout);
//  }); 

 var exec = require('child_process').exec;

 exec('hexo server -p ' + port, function (error, stdOut, stdErr) {
    console.log(stdOut); // do what you want!
    console.log(error);
 });


//  var http = require('http');

// //create a server object:
//  http.createServer(function (req, res) {
//    res.write('Hello World!  THIS IS A TEST!'); //write a response to the client
//    res.end(); //end the response
//  }).listen(process.env.PORT || 3000, function(){
//     console.log("Express server listening on port %d in %s mode", this.address().port);
//   });


//  var http = require('http');
//  var fs = require('fs');
//  var path = require('path');

//  http.createServer(function (request, response) {

//     console.log('request starting for ');
//     console.log(request);

//     var filePath = '.' + request.url;
//     if (filePath == './')
//         filePath = './index.html';

//     console.log(filePath);
//     var extname = path.extname(filePath);
//     var contentType = 'text/html';
//     switch (extname) {
//         case '.js':
//             contentType = 'text/javascript';
//             break;
//         case '.css':
//             contentType = 'text/css';
//             break;
//     }

//     fs.exists(filePath, function(exists) {

//         if (exists) {
//             fs.readFile(filePath, function(error, content) {
//                 if (error) {
//                     response.writeHead(500);
//                     response.end();
//                 }
//                 else {
//                     response.writeHead(200, { 'Content-Type': contentType });
//                     response.end(content, 'utf-8');
//                 }
//             });
//         }
//         else {
//             response.writeHead(404);
//             response.end();
//         }
//     });

//  }).listen(process.env.PORT || 3000, function(){
//          console.log("Express server listening on port %d in %s mode", this.address().port);
//   });