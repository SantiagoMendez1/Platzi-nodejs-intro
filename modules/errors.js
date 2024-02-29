anotherfunction = () => {
  breakfunction();
};

breakfunction = () => {
  return 4 + z;
};

breakfunctionasync = (cb) => {
  setTimeout(() => {
    try {
      return 4 + z;
    }catch (error) {
      console.error("error capturado");
      cb(error);
    }
  });
};

try {
  breakfunctionasync((error)=>{
    console.log(error.message);
  })
} catch (error) {
  console.error("algo se rompe");
  console.error(error);
  console.log("todo esta perfecto, hemos capturado el error");
}
console.log("esto es lo del final que si se siguio ejecutando");

