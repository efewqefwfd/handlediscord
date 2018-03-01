var express = require('express');
app = express();

app.get('/', (req, res) => res.send('Hello World!')).catch(console.error)

app.listen(80, () => console.log('Example app listening on port 80!')).catch(console.error)
