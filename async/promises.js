hello = (name) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Hola  ${name}`);
            resolve(name);
        }, 1000);
    });
};

talk = (name) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        console.log("bla bla bla....");
        // resolve(name);
        reject("hay un error")
        }, 1000);
    })
};

bye = (name) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        console.log(`Adios  ${name}`);
        resolve()
        }, 1000);
    })
};

console.log("Iniciando el proceso");
hello("santiago")
    .then(talk)
    .then(bye)
    .then((name)=>{
        console.log("terminando el proceso");
    })
    .catch(error => {
        console.error("ha habido un error");
        console.error(error);
    })
