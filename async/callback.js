function hola(nombre, mycallback) {
  setTimeout(function () {
    console.log("hola " + nombre);
    mycallback();
  }, 1000);
}

function adios(nombre, anothercallback) {
  setTimeout(() => {
    console.log("adios " + nombre);
    anothercallback();
  }, 1000);
}
console.log("Iniciando proceso");

hola("santiago", function () {
  adios("santiago", function () {
    console.log("terminando proceso");
  });
});



takeDataDb = (extraerdata) => {
    setTimeout(() => {
        console.log("conectando db....");
        extraerdata()
    }, 10000);
}



console.log('hola, estas iniciaado el programa, vamos a extrar tus datos');
takeDataDb(() => {
    console.log("Data tomada");
})

console.log('continua navegando mientras se extrae la data');