const config = require('../config');
const app = require('./app');

const newPort = parseInt(config.PORT)+1;
app.listen(newPort, ()=>{
  console.log(`Listening to port...http://localhost:${newPort}`)
})