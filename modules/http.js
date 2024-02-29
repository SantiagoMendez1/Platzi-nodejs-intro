const http = require("http");

router = (req, res) => {
  console.log("nueva peticion");
  console.log(req.url);
  switch (req.url) {
    case "/hola":
      res.write("hola que tal");
      res.end();
      break;
    default:
      res.write("error 404, no se mi bro");
      res.end();
      break;
  }

 /* res.writeHead(201, { "content-Type": "text/plain" });
  res.write("hola ya usando http con node,");
  res.end();*/
};

http.createServer(router).listen(3000);

console.log("listening port 3000");
