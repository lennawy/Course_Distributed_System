const dgram = require('dgram'); 
const server = dgram.createSocket('udp4'); 

server.on('message', (msg, rinfo)=>{
    console.log(msg.toString());
    server.send(Buffer.from(rinfo.port + ":" + msg.toString()), rinfo.port, '127.0.0.1', () => server.close()); 
});

server.bind(20213); 