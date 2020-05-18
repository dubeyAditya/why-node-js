
// Simple JavaScript setInterval Execution in Nodejs
const interval =  setInterval(
    () =>  process.stdout.write("Connected No Signal !!!\n") , 2000);

/************************* Abstaraction to Nodejs Programmer ********************/
   
// Call back is just a function executed in callstack from eventque.
const callback = () => {
    process.stdout.write(`I Received Signal ! \n`);
    // removing the setIntrval registration 
    // process exits as no more registration
    // & event callback in queue.
    clearInterval(interval); 
}


// Observer Pattern Implememted on Process Object
// It is main thread refers to V8
// Can handle POSIX signals as event in Nodejs
process.on('SIGUSR1', callback);
