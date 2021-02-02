require('dotenv').config();

const expressSanitizer = require('express-sanitizer'),
      mongoose         = require('mongoose'),
      express          = require('express') ,
      path             = require('path');

const app = express();

// Connecting to Database 

const db = process.env.DATABASE  //Paste your mongodb database connection string here

mongoose.connect(db , {useNewUrlParser : true , useFindAndModify : false , useCreateIndex : true , useUnifiedTopology : true});
app.set('view engine' , 'ejs');
app.use('/public' , express.static(path.join(__dirname, 'public')));
app.use(expressSanitizer());

const indexRoute = require('./routes/index');


app.use(indexRoute);


const port = process.env.PORT || 3000  // process.env.PORT is for Heroku deployment
app.listen(port , ()=>{
    console.log('Server started on server 3000');
})