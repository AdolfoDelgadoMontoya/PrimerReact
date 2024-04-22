const WebSocket = require("ws");
//wss --> Web Socket Server
const wss = new WebSocket.Server({port:8093});
wss.on('connection',(ws)=>{
    console.log('Un usuario nuevo conectado!');
    //manipular al usuario
    ws.on('message',(data)=>{
        console.log(data);
        wss.clients.forEach(()=>{
            if(cliente != ws && cliente.readyState === WebSocket.OPEN){
                cliente.send(mensaje);
            }
        });
    });
    ws.on('cloese',()=>{
        console.log('El usuario se ha desconectado');
    });
});
console.log('WS prendido:\n');