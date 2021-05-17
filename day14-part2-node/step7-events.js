const events = require("events");
let EventEmitter = events.EventEmitter;

let counter = 0;
let evt = new EventEmitter();
// console.log("before add listener");
evt.addListener("ibm", function(){
    console.log("IBM Event Happened")
});
// console.log("before emit");
// setTimeout(()=> evt.emit("ibm") , 2000)

let si = setInterval(()=>{
    if( counter < 5){
        evt.emit("ibm"); 
        counter++;
    }else{
        clearInterval(si);
    };
    console.log("interval executed...");
} , 1000);