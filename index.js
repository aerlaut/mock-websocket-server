const io = require("socket.io")();

const channelPrefix = 'ExperimentUpdates';
const experimentId = '5928a56c7cbff9de78974ab50765ed20';
const port = 3001;
const timeInterval = 2000 //ms
const channel = `${channelPrefix}-${experimentId}`;
const response = 'Hello from server'

const pingClient = ({ channel, message }) => {

  console.log(`Emitting to ${channel} : ${message}`)
  io.emit(channel, message);
}

io.on("connection", socket => {

  socket.send('hello')

});

const message = {
  channel: channel,
  message: response
}

setInterval(pingClient, timeInterval, message)

io.listen(port);
console.log(`listening on port ${port}`)