const express = require('express')
const cors = require('cors')
const app = express()
const Fs = require('fs')


app.use(express.json())
app.use(cors())

app.get('/',(req, res)=>{
    Fs.readFile('./lib/data.js', 'utf8', function(err, data){
      
        res.send(data)
    })
    console.log('keldi');
})
app.post('/', (req, res)=>{
    let deta = new Date()
    console.log(deta);
    const newUser =  req.body
    res.sendStatus(200)
    Fs.readFile('./lib/data.js', 'utf8', function(err, data){
      
        // Display the file content
        const users =  JSON.parse(data)
        newUser.id = users.length +1
        newUser.deta = deta
        users.push(newUser)
        Fs.writeFile('./lib/data.js', JSON.stringify(users, null ,4), Err => {
            if (Err) {
              Console.Error(Err);
            }
          });
    })
})

app.listen(9000, console.log('server working'))