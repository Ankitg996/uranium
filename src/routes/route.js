const express = require('express');
const loggerModule= require('../logger/logger')
const helperModule = require('../utill/helper')
const formatterModule= require('../validator/formatter')
const postwalaModule= require('../controllers/postwala')

// const formatterModule = require('../validator/formatter')
// const lodash = require('lodash')

const router = express.Router();

router.get('/test-me', function (req, res) {
    loggerModule.welcome()
    helperModule.printDate()
    helperModule.printMonth()
    helperModule.getBatchInfo()
    formatterModule.trim()
    formatterModule.changeToUpperCase()
    formatterModule.changetoLowercase()
    
    res.send({msg :'My first ever api Assignment! nodemon ka kamaal dekho'})
});

router.get('/hello', function (req, res) {
// Problem a)
let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
let subArrays = lodash.chunk(months, 3)
console.log('The result after splitting the months array is ', subArrays)

// Problem b)

let oddNumbers = [1,3,5,7,9,11,13,15,17,19]
console.log('The last 9 odd numbers in the array are: ', lodash.tail(oddNumbers))

// Problem c)
let a = [1 , 2, 1, 4]
let b = [2, 3, 4, 3]
let c = [6, 1, 5, 10]
let d = [1, 1, 1]
let e = [1, 2, 3, 4, 5]

console.log('Final array or unique numbers is : ', lodash.union(a, b, c, d, e))

// Problem d)
let arrayOfKeyValuePairs = [["horror","The Shining"],["drama","Titanic"],["thriller","Shutter Island"],["fantasy","Pans Labyrinth"]]
console.log('The object created from arrays is :', lodash.fromPairs(arrayOfKeyValuePairs))
    res.send('My hello api!')
});
router.get('/test-Api1', function(req, res){
    res.send({msg: 'Hi function up again',
   name: 'ankit'});
});
router.get('/test-Api2', function(req, res){
    res.send({msg: 'Hi function up again',
   name: 'moti'});
});
router.get('/test-Api3', function (req, res){
    res.send({msg: 'Hi function up again',
   name: 'reshu'});

});
//------------post data agar dekhna h to postman me/body/raw/JSON isme dekho-----------------------
//Post Request
router.post('/test-post1', function(req, res){
    let data= req.body// iska input maine postman me banaya h
    console.log(data)
    res.send({msg:'pehla post request'})
})


router.post('/test-post2', postwalaModule.addToArray);//it names as Hander or controller


module.exports = router;
// adding this comment for no reason