const EventEmitter =  require('events')
// create object
const event = new EventEmitter();
/* The code block is registering event listeners for the 'saymyname' event. Each listener is a callback
function that will be executed when the 'saymyname' event is emitted. In this case, there are four
 listeners, each printing a different name to the console. */

// event.on('saymyname',()=>{
//     console.log('my name is pratik');
// })
// event.on('saymyname',()=>{
//     console.log('my name is adarsh');
// })
// event.on('saymyname',()=>{
//     console.log('my name is abhi');
// })
// event.on('saymyname',()=>{
//     console.log('my name is keshav');
// })
// event.emit('saymyname');


event.on('checkpage', (sc,msg) =>{
    console.log(`status code is ${sc} and the page is ${msg}`);
})
event.emit('checkpage',200,"ok");