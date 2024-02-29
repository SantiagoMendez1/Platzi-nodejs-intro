hello = (name, mycallback) => {
  setTimeout(() => {
    console.log(`Hola  ${name}`);
    mycallback(name);
  }, 1000);
};

talk = (callbackTalk) => {
  setTimeout(() => {
    console.log("bla bla bla....");
    callbackTalk();
  }, 1000);
};

bye = (name, anothercallback) => {
  setTimeout(() => {
    console.log(`Adios  ${name}`);
    anothercallback();
  }, 1000);
};

conversation = (name, quantity, callback) => {
  if (quantity > 0) {
    talk(() => {
      conversation(name, --quantity, callback);
    });
  } else {
    bye(name, callback);
  }
};

console.log("Iniciando proceso");
hello("santiago", (name) => {
  conversation(name, 5, () => {
    console.log("proceso terminado");
  });
});

/*hello("santiago",  () => {
  talk(() => {
    talk(() => {
      bye("santiago", () => {
        console.log("terminando proceso");
      });
    })  
  });
});*/
