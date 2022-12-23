function MCD(){
    if (arguments.length < 2) {
        return false;
    }
    if (arguments.length == 2) {
        return (arguments[1] == 0 ? arguments[0] : 
            MCD(arguments[1],arguments[0]%arguments[1]));
    }
    var arr=[].splice.call(arguments,0);
    arr.splice(0,2,MCD(arr[0],arr[1]));
    return MCD.apply(window,arr);
}

function mcm(a, b) {
    if (arguments.length < 2) {
        return false;  
    } 
    if (arguments.length == 2) {
        return arguments[0] * arguments[1] / MCD(arguments[0],arguments[1]);
    }
    var arr=[].splice.call(arguments,0);
    arr.splice(0,2, mcm(arr[0], arr[1]));
    return mcm.apply(window, arr);
}

function calcularMCDmcm() {
var input = document.getElementById('dataInput').value;
var numbers = [];
var idx = 0; 

for(var i = 0; i < input.length; i++) {
    if (input[i] == ',') { 
        numbers.push(parseInt(input.substring(idx,i))); 
        idx = i + 1; 
    } else if (i == input.length - 1) { 
        numbers.push(parseInt(input.substring(idx)));  
    }
}

document.getElementById('MCD').innerText = 'MCD: ' +  MCD.apply(window, numbers);
document.getElementById('mcm').innerText = 'mcm: ' +  mcm.apply(window, numbers);

console.log('MCD:', MCD.apply(window, numbers));
console.log('mcm: ', mcm.apply(window, numbers));
}