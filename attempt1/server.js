const express = require('express');
const app = express();

app.use(express.static('public'));
app.get('/:thing', (req, res)=>{
  if (req.params.thing === 'api'){
    res.send('Hello from api');
  }else{
    res.status(404);
    res.send('404 Not FOund');
  }


});






app.listen(8000,()=>{
  console.log('listening on port 8000');
});
