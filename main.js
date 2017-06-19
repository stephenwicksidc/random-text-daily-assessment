const express = require('express');
const app = express();

const loremIpsum = require('lorem-ipsum');

app.use(express.static('public'));
console.log(__dirname);

app.get('/lorem', function(req, res){
    res.send(loremIpsum({
        count: 3,
        units: 'paragraphs',
        format: 'html' }))
});

app.listen(3000, function(){
    console.log("Hey this works");
});