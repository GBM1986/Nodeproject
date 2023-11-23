import express, { response } from 'express';

const  app = express()

app.get('/',(req, resp) => {
    resp.send('blahblah');
});

app.get('/products:id([0-9]*)',(req, res) => {
    console.log(req.params);
    res.send('produkter');
});

app.listen(4242, () => {
    
    console.log("Express server kører....");
});