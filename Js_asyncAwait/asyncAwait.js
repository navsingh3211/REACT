// what is async
// what is await
// How async await works behind the scene
// Example of using async await 
// Error Handling
// interviews
// Async await vs promise.then /.catch


//1.) what is async

//case:1  (when we return a value from an async function)
//note==> if we return a value from an async function then ,it will wrap the value into a promise then return it like // promise{value}

//async function Always returns a promise 
// async function getData(){
//     return "Shree Bhagawat Gita";
// }
// const data = getData();
// // console.log(data);
// data.then((res)=>console.log(res));


//case:2 (when we return a promise from an async function)
// note:==> if when we return a promise from an async function then it will not wrap the promise value

const p= new Promise((resolve,reject)=>{
    resolve("Resolved Promise!!!");
})

//always returns a promose
async function getD(){
    return p;
}
const data1 = getD();
console.log(data1);

data1.then((res)=>console.log(res));