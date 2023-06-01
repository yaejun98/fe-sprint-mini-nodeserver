const http = require("http");

const PORT = 4999;

const ip = "localhost";

const server = http.createServer((request, response) => {
  // if (request.method === "OPTIONS") {
  //   response.writeHead(200, defaultCorsHeader);
  //   response.end("hello mini-server sprints");
  // } else if (request.method === "POST") {
  //   let result = "";
  //   request
  //     .on("data", (data) => {
  //       request.url === "/upper"
  //         ? (result = data.toString().toUpperCase())
  //         : request.url === "/lower"
  //         ? (result = data.toString().toLowerCase())
  //         : (response.writeHead(200, defaultCorsHeader), response.end());
  //     })
  //     .on("end", () => {
  //       response.writeHead(201, defaultCorsHeader);
  //       // response.write("result");
  //       console.log(result);
  //       response.end(result);
  //     });
  if (request.method === "OPTIONS") {
    response.writeHead(200, defaultCorsHeader);
    response.end("hello mini-server sprints");
  } else if (request.method === "POST") {
    let result = "";
    request
      .on("data", (data) => {
        request.url === "/upper"
          ? (result = data.toString().toUpperCase())
          : request.url === "/lower"
          ? (result = data.toString().toLowerCase())
          : response.writeHead(404, defaultCorsHead).end("Not Found");
      })
      .on("end", () => {
        response.writeHead(201, defaultCorsHeader);
        response.end(result);
      });
  }
  /*console.log(
    `http request method is ${request.method}, url is ${request.url}`
  );

  response.writeHead(200, defaultCorsHeader);
  response.end('hello mini-server sprints');*/
});

server.listen(PORT, ip, () => {
  console.log(`http server listen on ${ip}:${PORT}`);
});

const defaultCorsHeader = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Accept",
  "Access-Control-Max-Age": 10,
};
