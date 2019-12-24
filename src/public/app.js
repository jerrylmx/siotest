const socket = io();
document.getElementById("content").innerText = new Date().getTime();
let last = 0;
let counter = 0;

socket.on('sync', (data) => {
    if (counter % 10 === 0) {
        document.getElementById("content").innerText = new Date().getTime() - last;
    }
    last =  new Date().getTime();
    counter++;
});
