const {exec, spawn} = require("child_process")

/*exec("ls -la", (error, stdout, sterror)=>{
    if (error) {
        console.error(error);
        return false
    }
    console.log(stdout);
})*/

let process = spawn("ls",["-la"])