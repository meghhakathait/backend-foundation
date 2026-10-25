const http = require("http");

const products = [
  { id: 1, name: "Laptop", price: 24000 },
  { id: 2, name: "Camera", price: 45000 },
];

const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/api/products") {
    res.statusCode = 200;
    res.setHeader("content-Type", "application/json; charset=utf-8");
    res.end(JSON.stringify(products));
  }
  res.statusCode = 400;
  res.setHeader("content-Type", "application/json; charset=utf-8");
  res.end(JSON.stringify({ message: "Not Found" }));
});

server.listen(5001, () => {
  console.log("Server is running on port http://localhost:5001");
});
