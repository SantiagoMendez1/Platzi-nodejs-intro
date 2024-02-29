hello =  (name) => {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log(`Hola  ${name}`);
        resolve(name);
    }, 1000);
    });
};

talk =  (name) => {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("bla bla bla....");
        resolve(name);
        // reject("hay un error");
    }, 1000);
    });
};

bye =  (name) => {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log(`Adios  ${name}`);
        resolve();
    }, 1000);
    });
};

main = async() => {
    let nombre = await hello("santiago")
    await talk()
    await talk()
    await talk()
    await bye(nombre)
}

console.log("inicio del proceso");
main()
console.log("fin del proceso");