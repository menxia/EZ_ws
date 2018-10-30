const WebSocket = require('ws')

let ws = new WebSocket('ws://localhost:3000/test');
let count = 0;
// 打开WebSocket连接后立刻发送一条消息:
ws.on('open', function () {
    console.log(`[CLIENT] open()`);
    ws.send('Hello!');
});

ws.on('message', function (message) {
    console.log(`[CLIENT] Received: ${message}`);
    count++;
    if (count > 3){
        ws.send('Goodbye!');
        ws.close();
    }else {
        setTimeout(()=>{
            ws.send(`Hello, I'm Mr No.${count}!`);
        }, 1000);
    }
});