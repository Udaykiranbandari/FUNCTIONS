// first
function sayHello(){
    console.log("Hello,World!")
}
sayHello()
// second
function displayWarning(){
    console.log("warning!System OverLoad!")
}
displayWarning()
// third
function printStatus(){
    console.log("system Status: Active")
}
printStatus()
// fourth
function intialiize(){
    console.log("intialization complete")
    shutDown()
}
function shutDown(){
    console.log("system Shutting Down")
}
intialiize()
// fifth
function startProcess(){
    console.log("process Started")
    endProcess()
}
function endProcess(){
    console.log("process Ended")
}
startProcess()
// six
function greetUser(name){
    console.log("Hello,uday!")
}
greetUser("uday")
greetUser("udaykiran")
// seven
function calculateSum(num1,num2){
    console.log(num1+num2)
}
calculateSum(10,20)
calculateSum(30,40)
// eight
function countDown(num){
    for(var i=num;i>=0;i--){
        console.log(i)
    }
}
countDown(5)
// nine
function checkEvenOdd(num){
    if(num%2==0){
        console.log("even")
    }
    else{
            console.log("odd")
        }
    
}
checkEvenOdd(10)
checkEvenOdd(15)
//ten
function beginSession(){
    console.log("session started")
    endSession()
}
function endSession(){
    console.log("session ended")
}
beginSession()