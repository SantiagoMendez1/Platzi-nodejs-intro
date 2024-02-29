const { error, log } = require("console");
const fs = require("fs");

read = (path, cb) => {
  fs.readFile(path, (error, data) => {
    cb(data.toString());
  });
};

// read(__dirname + "/archivo.txt", console.log);

write = (path, content, cb) => {
  fs.writeFile(path, content, (error) => {
    if (error) {
      console.error("no se ha podido escribir el archivo");
    } else {
      console.log("se ha escrito el archivo correctamente");
    }
  });
};

deletefile = (path, cb) =>{
    fs.unlink(path, cb)
}

deletefile(__dirname + "/newfile.txt", console.log)

// write(__dirname + "/newfile.txt", "hola soy un nuevo archivo", console.log)
