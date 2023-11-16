// Import MongoClient.js
import { findUser, addSession, fetchSession } from './MongoClient.js'
// Import Env
import dotenv from 'dotenv'
// Import Express
import express from 'express'
// Import Path
import path from 'path'
// Import cookie-parser
import cookieParser from 'cookie-parser'
// Import dirname
import { fileURLToPath } from 'url'
import  {dirname}  from 'path'

const app = express()
app.use(cookieParser())
const port = process.env.EXPRESS_PORT

app.use(express.urlencoded())

// Create a function to get session key
const sessionChecker = (req, res, next) => {
    var noSessionFound = true;
    console.log(req.headers.cookie)
    // if (!noSessionFound) {
    //     console.log(`Found User Session`.green);
    //     next();
    // } else {
    //     console.log(`No User Session Found`.red);
    //     res.redirect('/login');
    // }
};

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'))

})

app.post('/login/post', (req, res) => {
  console.log(req.body)

  /**
   * Take input and send to mongo
   * get username and get password
   * check if it matches exactly
   * if it does then log them in, (let a cookie with session token)
   */
  findUser(req.body.username, req.body.password).then((result) => {
    console.log(result)
    if(result == 200) {
      addSession().then((sessionDetails) => {
        res.cookie('session', sessionDetails, {sameSite : "none", httpOnly: true, path: '/'})
        res.redirect('/dashboard')
        // console.log(req)
      })
    } else {
      res.redirect('/login')
    }
})
})

app.get('/', (req, res) => {
  // Set a cookie and then return a response
  try {
    console.log(req.cookies['session'])
    if(req.cookies['session'] != undefined) {
      fetchSession(req.cookies['session']).then((sessionDetails) => {
        console.log(sessionDetails)
        if(sessionDetails != null) {
          res.redirect('/dashboard')
        }else {
          res.redirect('/login')
        }
      })
      // console.log(req)
  } else {
    res.redirect('/login')
    // console.log(req)
  }
    
  } catch (err) {
    // res.cookie('test', "cookie!", {maxAge: 10800, sameSite : "none", domain: "localhost"})
    console.log(err)
  }
//  res.cookie('user', '...'); // set cookie['user'] as '...'
  // console.log(req.cookies['test']) // get cookie['user']
  // console.log(req.headers.cookie)

})

app.get('/dashboard', (req, res) => {
  res.send('You Logged in!')
})

app.listen(port, () => {
  console.log(`Express app listening at http://localhost:${port}`)
})