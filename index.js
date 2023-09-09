console.log("Hello World California");
let the_http = require("http");
let the_fs = require("fs");
let the_port = 3000;
let the_host = "127.0.0.1";
let the_server = the_http.createServer((request, response) => {
  let file_serving = (file_location, status_code) => {
    the_fs.readFile(file_location, (error, data) => {
      response.writeHead(status_code, { "Content-Type": "text/html" });
      response.write(data);
      response.end();
    });
  };
  if (request.url == "/") {
    file_serving("files/index.html", 200);
  } else if (request.url == "/about") {
    file_serving("files/about.html", 200);
  } else if (request.url == "/contact") {
    file_serving("files/contact.html", 200);
  } else {
    file_serving("files/error.html", 404);
  }
});
the_server.listen(the_port, the_host, () => {
  console.log(`Your Server is Deployed at http://${the_host}:${the_port}`);
});
