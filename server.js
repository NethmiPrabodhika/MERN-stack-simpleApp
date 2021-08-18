const express = require ("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const cors = require ('cors');



const app = express();

//import routes
const postRoutes = require('./routes/posts');

//app middleware
app.use(bodyParser.json());
app.use(cors());

//route middleware
app.use(postRoutes);

const PORT = 8070;
const DB_URL = 'mongodb+srv://Nethmi:nethmi@mernapp.wczlr.mongodb.net/mernCrud?retryWrites=true&w=majority'

mongoose.connect(DB_URL ,{
    useNewUrlParser : true,
    useUnifiedTopology:true,
    
})
.then(() =>{
    console.log('DB Connected');
})
.catch((err) => console.log('DB connection err',err) );

app.listen(PORT, () => {
    console.log(`App is running on ${PORT}`);
});

