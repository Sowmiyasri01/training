let bookList =
[
    {
        name:"Javascript Good parts ",
        author:"Douglas CrockFord ",
        stock:"10"
    },
    {
        name:"A Smarter Way to learn Javascript ",
        author:"Mark Meyers",
        stock:"12"
    },
    {
        name:"Effective Javascript ",
        author:"David Herman",
        stock:"0"
    }
]
let filterarr=bookList.filter((e)=>e.stock != 0).map((e)=>{
    return { title:e.name,author:e.author}
});
console.log(filterarr);