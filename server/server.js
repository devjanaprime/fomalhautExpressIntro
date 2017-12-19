const express = require( 'express' );
const app = express();
const port = 23456;

// spin up server
app.listen( port, ()=>{
    console.log( 'server up on:', port );
}); 