/* async vs syncronous

syncrounous code starts at the very top of the file and executes down all the way to the bottom of the file each line in order until it gets to
the bottom and it will stop

asyncronous code is similar where it starts at the top of the file and executes the code until it gets to the bottom
BUT
during that execution it will run into certian asyncronous funcitons or code where it will split off and execute that asyncronous
code seperately from the rest of that code (and thats usually because it needs to wait to do some operation that takes a long period of time)

so the syncronous code will execute from the top to the bottom but the asyncronous code will start at the top and execute until
it hits something that is asyncronous and then it will execute that and the rest of the code at the exact same time & it will
do that for every asyncronous thing it hits, so you may have multiple different threads running your different code in different sections
so your code may execute in a different order, but in syncronous code it will always execute in the exact same order and that's where
the difference comes from.
This is what makes async code difficult to work with because it will execute in a different order every single time potentially which means
that you have to make sure that your code will work no matter which path it takes: whether it executes everything in order, in reverse order
or any other order that you may not have thought about before.

*/

//simple syncronous code example
let a= 1
let b= 2
console.log(a)
console.log(b)
//this code will first print a which is 1
//then print b which is 2
//as we can expect it prints in order  it will always execute top to bottom



//example of async code using the setTimeOut() function which is by nature an async function
//note: setTimeOut takes a function which will execute after a certain amt of time that you specify

let a= 1
let b= 2

setTimeout(function(){
    console.log('Async code')
}, 100)

console.log('Synchronous')

console.log(a)
console.log(b)

//this will be the result in the console

//Synchronous
//1
//2
//Async code                the async code prints after the other console logs even though it comes before them in the original flow of the file
//                          this is because the setTimeout doesnt actually run the function inside of it until after the 100ms & at that pt the rest of the code has already run
 /*this is what makes async so powerful because you dont have to wait, you can just keep going with the rest of the code
 and then after 100ms it will just come out
 
 the concepts of promises (which is whenver you see a .then or a .catch after a function)
is another example of async code (but you dont know how long its actually going to take since you dont specify the timeout) 
 */
 
 
//Example with a promise (fetch)

let a= 1
let b= 2

setTimeout(function(){
    console.log('Async code')
}, 100)

fetch('/').then(function(){    //this is going to fetch the index pg of the application and as soon as its done call the .then function
 console.log('fetch')
})

console.log('Synchronous')

console.log(a)
console.log(b)

//in this example fetch is logged after the syncronous code is printed out but it happens before Async code is logged to the console
//this is just because fetch is quicker than 100ms in this case, but alot of times ppl get tripped up with what will happen 
//with doing a diff setTimeout() see ex below

//Syncronous 
//1
//2
//Fetch
//Async code


//in this example setTimeout is going to print out 10 not 1000
//this is because the setTimeout occurs 100ms after it hits the line where it says console.log('Timeout:0) & we set a to 10 after the setTimeout
//so it ends up being a
//this is why if you're using some sort of async function its almost better to pass the variables into that function, other than relying
//on them outside of the async function because they could be changed by the rest of the program without you actually knowing it
//and it can cause alot of problems


let a= 1
let b= 2

setTimeout(function(){
    console.log('Timeout:0' + a)
}, 100)

a= 10

fetch('/').then(function(){    
 console.log('fetch')
})

console.log('Synchronous')

console.log(a)
console.log(b)


//Syncronous 
//10                //this is from setTimeout
//2
//Fetch
//Async code


/* A way to spot async functions:

is every single async function is going to take a function as a parameter which is going to be called after a certain delay
(which is the async part of it)
note: not every single function that takes a function as an argument is async, but in general most functions that take functions
as arguments are going to be async 
*/