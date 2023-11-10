/*requires*/
const express = require('express');
const path = require('path');

/*settings*/
const app = express();
const PORT = 3030;

app.use(express.static(path.join(__dirname, 'public')));
/*routers*/
app.get('/',(requ,res) => res.sendFile(path.join(__dirname,'views', 'home.html')));

/*server*/
app.listen(PORT, () => console.log('Server running in http://localhost:' + PORT))