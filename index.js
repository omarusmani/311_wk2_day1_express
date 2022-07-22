
const express = require('express')
const app = express()
var bodyParser = require('body-parser')
const port = process.env.PORT || 4000

const { users } = require('./state')

let count=users.length+1
/* BEGIN - create routes here */
app.use(bodyParser.json());
app.get("/users", (req,res)=>res.json(users));
app.get("/users/:userId", (req,res)=>{
  const person =users.find((user)=> user._id===Number(req.params.userId));
  console.log(person)
  res.json(person)}
  );
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
  let newuser ={
    _id:count,
    ...req.body,}
  users.push(newuser)
  count++
  res.json(users)});

app.put("/users/:userId",(req,res)=>{
  const person =users.find((user)=> user._id===Number(req.params.userId));
  const index =users.findIndex((user)=> user._id ===Number(req.params.userId));
  console.log(person,index)
  let newp={
    ...person,
    ...req.body
  }
  console.log(newp)
  users.splice(index,1,newp)
  res.json(users)
});
app.delete("/users/:userId",(req,res)=>{
  const person =users.find((user)=> user._id===Number(req.params.userId));
  const index =users.findIndex((user)=> user._id ===Number(req.params.userId));
  users.splice(index,1,{...person,isActive:false})
  res.send("deleted")
})

/* END - create routes here */

app.listen(port, () => 
  console.log(`Example app listening on port ${port}!`))