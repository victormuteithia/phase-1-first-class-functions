function receivesAFunction(callback){
    return callback()
}
receivesAFunction(() => console.log('Calls a callback function'))

function returnsANamedFunction(){
    return function functionName(){
        console.log('returns a named function')
    }
}
const namedFunction = returnsANamedFunction()
namedFunction()

function returnsAnAnonymousFunction(){
    return function(){
        console.log('returns an anonymous function')
    }
}
const nameFunction = returnsAnAnonymousFunction()
nameFunction()
