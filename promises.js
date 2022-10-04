/* How promises work
Promises are like ious you commit to something by saying 'I promise to do something' then that promise has 2 results 
its either completed (resolved) or its failed (rejected)

syntax
create a var set it to a new promise, it takes one parameter which is a function that gets passed 2 variables of resolve & reject then you 
create the definition of that function inside of it

inside of the promise section you define what that promise is in the ex below its the code block inside of the => { }
this code is saying if a == 2 resolve it if not reject it (in the resolve & the reject you can pass anything you want into it)
in this example we're just passing messages of either 'Success' or 'Failed

In this example it will call the resolve method since its true

How we interact with promises: 
    .then(() =>{})   anything that resolves is going to run the .then
    .catch(() => {}) anything that rejects is going to run the .catch

    if a promise resolves you're saying .then you're going to do something with the promise 
    .then takes a method in our ex it takes a single parameter which is our message, we then define what we want to do with our function in our ex
    we're just telling it to do a console log that says 'This is the then' and passes it the message
    //in our ex the console log will show the resolve (since 1 + 1 = 2 )
    //the console log output is:   This is in the then Success 

    to catch an error we use .catch (which are our reject states) just like our .then we're passing it a single parameter of a message & then doing a console log


    //message holds either 'Successs' if resolved or 'Failed' if rejected

    //Use Cases:
    Promises are great for if you want to do something that's going to take a long time in the background like
     downloading an image from a different server & you just want to do something after its complete instead of making everything else
     wait for it & you can catch it if its failed so you can retry it or give the user an error message if it did fail

     Promises are meant to replace call backs as shown in the next example
*/


let p= new Promise((resolve, reject) => {
    let a= 1 + 1
    if(a == 2){
        resolve('Success')
    }else{
        reject('Failed')
    }
})

p.then((message) =>{
    console.log('This is the then' + message)
}).catch((message) => {
    console.log('This is the catch' + message)
})





//Example of a callback
/* all this call back does is take 2 call backs: one for the success (callback), and one for an error (errorCallback)
   all it does is check 2 variables to see if either of them are true: and if either of them are it will throw an error

   and if neither of these are true it'll call the success callback saying that everything went well ('Thumbs up and subscribe)
   then it will run the watchTutorialCallBack and it will run the: console.log('Sucess.... + message) line (the message is 'Thumbs up and subscribe' from the above function)

   the second callback in watchTutorialCallBack function is for the error message that will run if the original function resolves to true
   either 'User left :('
   or     'User watching Cat Meme example < Cat'

*/
const userLeft= false
const userWatchingCatMeme= false

function watchTutorialCallBack(callback, errorCallback){
    if(userLeft){
        errorCallback({
            name: 'User Left',
            message: ' :( '
        })
    }else if(userWatchingCatMeme){
        errorCallback({
            name: 'User Watching Cat Meme',
            message:' example < Cat'
        })
    }else{
        callback('Thumbs up and Subscribe')
    }
}

watchTutorialCallBack((message) => {
    console.log('Success: ' + message)
}, (error) => {
    console.log(error.name + ' ' + error.message)
})


//Converting this callback to a promise
/* remove the callbacks as parameters in the function (callback, errorCallback); because that's the whole pt of using promises is that we no longer have these callbacks
   inside the code block of the function all we need to do is:
   return a new Promise(()); a Promise takes 2 parameters resolve, reject 
   new Promise((resolve, reject))
   inside of the new Promise function we want to define all of our code that was calling the callbacks in the previous callback example (move them inside the promise function)
resolve: is going to be our successful callback so we can just replace everywhere we have 'callback' with resolve
reject: is going to be our error callback so we can just replace all of our errorCallback with reject

once we refactor the code is almost the same (we just renamed some variables in with with reject and resolve) but now we're returning a promise
instead of calling the callbacks

next we change how we use this function by changing the watchTutorialCallBack to watchTutorialPromise
this is a function that takes no parameters: watchTutorialPromise() so we need to call this function and then do something afterwards since it returns a promise
so we use .then
in this example .then is going to be our success callback: 
so we can make it our very first method from the previous ex : 
            .then((message) => {
    console.log('Success: ' + message)
})

after that we do our .catch()
so we just add .catch( ) to catch all of our errors:

.catch((error) => {
    console.log(error.name + ' ' + error.message)  
})

we've now completely transformed a call back to a promise 

Even though the code hasn't changed much Promises are much cleaner and easier to write, it also eliminates the nesting of callbacks, as your 
code gets more complex callbacks become nested more and more and messy, 


With promises instead of nesting callbacks all you do is just add another .then see example below

*/

const userLeft= false
const userWatchingCatMeme= false



function watchTutorialPromise(){
    return new Promise ((resolve, reject) => {
        if(userLeft){
            reject({                                    //this was errorCallback in the prior ex
                name: 'User Left',
                message: ' :( '
            })
        }else if(userWatchingCatMeme){
             reject({                                   //this was errorCallback in the prior ex
                name: 'User Watching Cat Meme',
                message:' example < Cat'
            })
        }else{
            resolve('Thumbs up and Subscribe')    //this was callback in our previous example
        }
    })
 }

watchTutorialPromise().then((message) => {
    console.log('Success: ' + message)
}).catch((error) => {
    console.log(error.name + ' ' + error.message)  
})


// Adding additional promises 
/*(same thing as adding more nested callbacks) all you do is add additional .then statements
the body of the code above would stay exactly the same for watchTutorial Promise 


*/

const userLeft= false
const userWatchingCatMeme= false



function watchTutorialPromise(){
    return new Promise ((resolve, reject) => {
        if(userLeft){
            reject({                                    //this was errorCallback in the prior ex
                name: 'User Left',
                message: ' :( '
            })
        }else if(userWatchingCatMeme){
             reject({                                   //this was errorCallback in the prior ex
                name: 'User Watching Cat Meme',
                message:' example < Cat'
            })
        }else{
            resolve('Thumbs up and Subscribe')    //this was callback in our previous example
        }
    })
 }

 //Here is where you would add additional .then

watchTutorialPromise().then((message) => {
    console.log('Success: ' + message)
}).then((message) => {                              //added an additional .then this is the answer to getting rid of callback hell
    console.log('Another then' + message)
}).catch((error) => {
    console.log(error.name + ' ' + error.message)  
})



//Things you can do with promises
/*
in this example all of these promises just resolve and send a single message
lets say you want to do something after you've recorded all 3 of these videos & we want to run all of these in parallel at the same time so
we don't have to worry about waiting for one before starting the next 

we can use Promise.all()
inside of Promise.all() we send an array [] of all the diff promises that we want to run : 
Promise.all([
 recordVideoOne,
 recordVideoTwo,
 recordVideoThree
])

Promise.all([]) is going to run every single one of the promises that are in the array & as soon as its done:
    it is then going to call the .then  and .catch methods depending on if they resolve or reject (fail)

    the .then(()=> {}) is going to send an array of all the successful messages in our example (messages)
    so its going to send us an array with all of the different resolve parameters

    our console.log() is going to be: 
    ["video 1 recorded", "video 2 recorded", "video 3 recorded"]
    if you click on it in the console it'll show:
    0: "Video 1 recorded"
    1: "Video 2 recorded"
    2: "Video 3 recorded"
    length: 3
    __proto___: Array(0)

    this means all of our promises ran & as soon as they were returned they called the .then method
    note: these are all running at the exact same time
*/

//Note: in this example all of these resolve to true to make it easy to understand what we can do


const recordVideoOne= new Promise((resolve, reject) => {
    resolve('Video 1 recorded')
})

const recordVideoTwo= new Promise((resolve, reject) => {
    resolve('Video 2 recorded')
})

const recordVideoThree= new Promise((resolve, reject) => {
    resolve('Video 3 recorded')
})

Promise.all([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree
]).then((messages) => {
    console.log(messages)
})


//Let say you want to do something as soon as soon as one of the videos is done being completed
/* we can use:
Promise.race([])   instead of Promise.all([])

Promise.race([])  is just like Promise.all([]) EXCEPT: it will return as soon as the FIRST one is COMPLETED instead of waiting for all of 
them to complete
and because of that: It will only return a SINGLE message in the .then as opposed to all of the messages

now if we run Promise.race we are only going to one return value in the console:
Video 1 Recorded
this is as expected, because Video 1 was the first one to record (resolve); that's because this is a simple ex so its always going to run them in the same order
*/

Promise.race([                              //changed to Promise.race
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree
]).then((message) => {                          //changed to return a single message
    console.log(message)                        //changed to reuturn a single message
})
