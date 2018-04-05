const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
require('dotenv').config()
const controller = require('./controller');

const app = express();
massive( process.env.CONNECTION_STRING ).then( dbInstance => {
  app.set('db', dbInstance);
  console.log('db connected')

    // dbInstance.new_planes()
    //   .then( planes => console.log( planes ) )
    //   .catch( err => console.log( err ) );

    // dbInstance.get_planes()
    //     .then( planes => console.log( planes ) )
    //     .catch( err => console.log( err ) );
}).catch((err) => {
    console.log('ERROR',err)
})

app.use( bodyParser.json() );
app.use( cors() );

app.get('/api/planes', controller.getPlanes);

const port = process.env.PORT || 3000
app.listen( port , () => { console.log(`Area 51 is listening on port ${port}`); } );

