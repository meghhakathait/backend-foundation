// what is HTTP - HTTP stands for Hypertext Transfer Protocol. It is the foumdation of data communication on the World Wide Web. Http defines how messages are formatted and transmitted, and how web servers and browsers should respond to various commmands. It is a request-response protocol that allows clients (like web browsers) to communication servers to request resources such as HTML documents, image, and other types of data.

const http = require("http");

// http.createServer() - creates a HTTP server
const server = http.createServer((req, res) => {
  console.log("Method", req.method);
  console.log("URL", req.url);

  if ((req.method === "GET") & (req.url === "/")) {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain; charset=utf-8");
    res.end("Home Page");
  }

  if ((req.method === "GET") & (req.url === "/about")) {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain; charset=utf-8");
    res.end("About Page");
  }



  //req - represents the incoming request.jo req server se ayi hai 
  //res - represents the outgoing response.jo req k res mai bhejna hai 
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain; charset=utf-8"); //sets reponse headers

  res.end("Route not found"); //complete the response. we have to end response also
});

// server starts listening on the specified port.
server.listen(5000, () => {
  console.log("server is running on http://localhost:5000");
});
