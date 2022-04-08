//write post req to accept an element in post req body and add it to the given array and return the new array
let addToArray = function(req, res)
{
    let x = req.body.element
    console.log(x)
    let arr=[2,5,11,14]
    arr.push(x)
    res.send({msg: "post req 2", data: arr})
}
module.exports.addToArray=addToArray