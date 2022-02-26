const express = require('express');
const app = express();
const axios = require('axios');
const port = 3000;

app.get('/say',(req,res)=>{
    const url = 'https://15efy7z3fa.execute-api.us-east-1.amazonaws.com/v3/message'+'?keyword='+req.query.keyword;
      axios.get(url)
        .then((response) => {
            res.send(response.data.body);
            console.log(response.data.body);
        }).catch(function(error){
            console.log("error");
        })
});
app.listen(port, () => {
    console.log('API served at http://localhost:'+port);
});
