// GLOBAL CUSTOM FUNCTIONS
var debugMode = false;

// 01 - Check if function is available
// Warning: Not usable in strict mode!!!
function LM_isFunction(possibleFunction) {
  // return (typeof(possibleFunction) === typeof(Function));
  return (typeof possibleFunction === 'function');
}

// Debugging
function debug(msg,info){
    if(debugMode && window.console && window.console.log){
        if(info){
            window.console.log(info+': ',msg);
        }else{
            window.console.log(msg);
        }
    }
}