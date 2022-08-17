let car = {name:'Audi', model:'X400',color:'white'}
function getlist(car){
    for(let prop in car){
        console.log(prop);
    }
};
getlist(car);
