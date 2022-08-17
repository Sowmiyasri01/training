let vegtables=['carrot', 'tomato','cucumber','cabbage','potato'];
let colors=['orange','red','green','white','brown'];
veg='cabbage';
function vegtable(veg){
for(let i=0;i<vegtables.length;i++){
if(veg==vegtables[i]){
    return(colors[i])}
}
}
console.log(vegtable(veg)) ;
