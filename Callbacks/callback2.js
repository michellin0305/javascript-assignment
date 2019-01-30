const callDelayFunction = function(callbackFunction){
    setTimeout(function(){
        callbackFunction();
    }, 3000);
};

console.log('starting');

callDelayFunction(function(){
    console.log('callback function');
});

console.log('ending')