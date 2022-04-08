let printDate = function (){
    let currentDate = new Date()
    console.log('the current date is: ', currentDate)
}
let  printMonth = function()
{
    let currentDate = new Date()
    console.log('the current month is :', currentDate.getMonth()+1)
}
let getBatchInfo = function(){
    console.log('uranium, week2,day4, the topic is nodejs module discussion')
}
module.exports.printDate=printDate
module.exports.printMonth= printMonth
module.exports.getBatchInfo =getBatchInfo