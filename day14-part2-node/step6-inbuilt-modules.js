const os = require("os");

console.log(os.arch());// architecture
console.log("Bytes : ",os.totalmem());// Total memory in bytes
console.log("GB : ",os.totalmem() / 1024 / 1024 / 1024 );// Total memory in bytes
console.log("Free Memory : ",os.freemem() / 1024 / 1024 / 1024 );// Total memory in bytes
console.log("Number of CPUs : ",os.cpus().length);// Number of CPUs 
console.log("User Name : ",os.userInfo().username);// User Name 