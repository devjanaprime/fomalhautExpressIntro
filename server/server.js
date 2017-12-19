const express = require( 'express' );
const app = express();
const port = 23456;

// spin up server
app.listen( port, function(){
    console.log( 'server up on:', port );
}); 