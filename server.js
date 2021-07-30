const express=require("express")
const cors =require("cors")
const bodyParser=require("body-parser")
const path=require("path")

if(process.env.NODE_ENV != "production" ) require("dotenv").config()

const app=express()
const port= process.env.port || 5000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.use(cors())