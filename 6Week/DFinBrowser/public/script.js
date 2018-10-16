var socket = io.connect(window.location.origin);

console.log('hi');

const socket = io.connect();

socket.emit('hi', {name: 'nicole'});
