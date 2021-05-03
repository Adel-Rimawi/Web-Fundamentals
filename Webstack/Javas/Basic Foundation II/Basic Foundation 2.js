//1 
var arr = [1,5,2,-2,4,-5,-3];


function biggiesize(x) {
for(var i =0; i<arr.length; i++){
    if (arr[i] >= 0){
        arr[i]= "big";
    }
}
return arr;
}
console.log(biggiesize(arr))




//2
function PrintlReturnh(x) { //bug
    var max = 0;
    var min = 0;
    for(var i =0; i<arr.length; i++){
    
        if (arr[i] > max){
            max = arr[i];
    console.log(max)
    
        }
        if (arr[i]<min){
            min = arr[i];
        }
    }
    console.log(min)
    return max;
    }
    var test = PrintlReturnh(arr);
    

//3 
function printoreturna(x) {
    console.log(arr[arr.length-2]);
    for(var i =0; i<arr.length; i++){
        if (arr[i] %2!=0){
            return arr[i];

        }
    }
    }
    console.log(printoreturna(arr))


//4

function doublevision(x) {
    var newarr =[];
    for(var i =0; i<arr.length; i++){
        newarr[i]=arr[i]*2;
    }
    return newarr;
}
console.log(doublevision(arr));



//5 
function countpositives(x) {
    var counter =0;
    for(var i =0; i<arr.length; i++){
        if (arr[i] >=0){
            counter++;

        }
    }
    arr[arr.length-1]= counter;
    return arr;
}
console.log(countpositives(arr));


//6

function evensodds(arr){
var odd = 0;
var even = 0;
    for (var i = 0; i < arr.length; i++){
    if (arr[i] % 2 == 1){
    odd++;
    even = 0;
    }else{
    even++;
    odd = 0;
    }
    if (odd == 3){
    console.log("That's odd!")
    odd = 0;
    }else if(even == 3){
    console.log("Even more so!")
    even = 0;
}
}
}
console.log(evensodds(arr))

//7

function incrementtheseconds(x) {
    for(var i =0; i<arr.length; i++){
        if (i%2==1){
            arr[i]++
        }
        console.log(arr[i])
    }
    return arr;
}
console.log(incrementtheseconds(arr));

//8 
var str = ["big", "new", 'what','why']

function previouslengths(str) {

    for(var i =str.length-1; i>0; i--){
        var temp = str[i-1];
        console.log(i)
        console.log(temp)
        console.log(temp.length)
        str[i]=temp.length
        }

    return str;
}


console.log(previouslengths(arr))

//9 
function addseven(str) {
    var narr = [];
    for(var i =0; i<arr.length; i++){
    narr[i]= arr[i]+7
        }

    return narr;
}
var test = addseven(arr)
console.log(test)

//10 
function reversearray(str) {
    for (var i = 0; i < arr.length/2; i++){
    var temp = arr[i];
    arr[i] = arr[arr.length-1-i]
    arr[arr.length-1-i] = temp;
    }
    return arr;
}
console.log(reversearray)


//11
function outlooknegative(str) {
    for (var i = 0; i < arr.length; i++){
    if (arr[i]<0){
        arr[i]=arr[i]*-1;
    }
    }
    return arr;
}
console.log(outlooknegative)




//12
function outlooknegative(str) {
    var stomach = empty;
    for (var i = 0; i < arr.length; i++){
    if (arr[i]== 'food'){
        stomach=full;
    }
    }
if (stomach = 'full'){
    console.log('yummy')
}
else{
    console.log('Im hungry')
}
}
console.log(outlooknegative)



//13
function swapttc() {
for (var i = 0; i < arr.length/2; i+=2){
    var temp = arr[i];
    arr[i] = arr[arr.length-1-i];
    arr[arr.length-1-i] = temp;
}
return arr;}


function swapttc(arr , num) {
    for (var i = 0; i < arr.length; i++){
        arr[i] = arr[i]*num;
    
    }
    return arr;}
    