
const express = require('express')
const app = express()
var bodyParser = require('body-parser')
const port = process.env.PORT || 4000

const { users } = require('./state')
let count=users.length
/* BEGIN - create routes here */
app.get("/users", (req,res)=>res.json(users));
app.get("/users/:id", (req,res)=>res.json(users[req.params.id-1]));
app.post("/users",(req,res)=>{
  // let newp=
  // {
  //   "_id": 5,
  //   "name": "Donny Brown",
  //   "occupation": "Boring",
  //   "avatar": "https://pbs.twimg.com/profile_images/718881904834056192/WnMTb__R.jpg"
  // }
  // console.log(newp)
  // users.push({
  //   "_id": 5,
  //   "name": "Donny Brown",
  //   "occupation": "Boring",
  //   "avatar": "https://pbs.twimg.com/profile_images/718881904834056192/WnMTb__R.jpg"
  // })
  console.log(req.body)
  // users.push({...req.body,
  //              ..._id:count,})
  res.json(users)});
  
app.put("/users/1",(req,res)=>{
  let newp={
    ...users[0],
    ...{
      "_id":"4",
    }
  }
  console.log(newp)
  users.slice(0,1,newp)
  res.json(users)
});
app.delete("/users/1",(req,res)=>{
  users.splice(0,1)
  res.json(users)
})

/* END - create routes here */

app.listen(port, () => 
  console.log(`Example app listening on port ${port}!`))