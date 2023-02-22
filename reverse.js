function reverse(x){
let total;
let arr =[]
var toStr = x.toString()
var strValue = ""
for(var i = 0; i < toStr.length; i++){
    arr.push(toStr[i])
    
}
for(var i = 0; i < toStr.length; i++){ 
    strValue+=arr.pop()
}

var result = parseInt(strValue)


if (x < 0){
    if(result <= (2)**31){
        total = result * -1
    }else{
        total = 0
    }
    
}else if((x > 0 ) && (result <= ((2)**31)-1)){
    total = result 

}else{
    total = 0
}

return total
    
}
