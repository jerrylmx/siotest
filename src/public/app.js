const socket = io();
document.getElementById("content").innerText = new Date().getTime();
let last = 0;

socket.on('sync', (data) => {
    document.getElementById("content").innerText = new Date().getTime() - last;
    last =  new Date().getTime();
});