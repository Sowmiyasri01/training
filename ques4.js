let array1=[1, [2, 3]] ;
let array2=0;
function length(array){
    for(let i in array){
        if(Array.isArray(array[i])){
            length(array[i])
        }else{
            array2++;
        }
    }
    return length;
};
length(array1)
console.log(array2);