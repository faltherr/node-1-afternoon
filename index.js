
const express = require ('express');

const bodyParser = require('body-parser');

const app = express();

const controller = require('./server/controllers/messages_controller');

app.use(bodyParser.json());
app.use( express.static('./public/build' ) );

app.get('/api/messages', controller.read)
app.post('/api/messages', controller.create)
app.put('/api/messages/:id', controller.update)
app.delete('/api/messages/:id', controller.delete)

const port = 3000;
app.listen(port, () => {
    console.log('listening on port:', port)
})

