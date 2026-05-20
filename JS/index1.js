// fetch("https://dummyjson.com/products").then((res)=>{
//     return res.json()
// }).then((data)=>{
//     console.log(data.products[1].brand)
//     data.products.map((a)=>{
//         console.log(a.brand);
//     })
// })
// fetch("https://dummyjson.com/products").
// then((res)=>{
//     return res.json()
// }).then((data)=>{
//    let body = document.querySelector("body");
   
//     data.products.map((a)=>{
//         console.log(a);
//         body.innerHTML += `<div style="border: 1px solid #ccc; padding: 10px; margin: 10px ; display: inline-block;
//         padding:20px;
//         margin:20px;
//         width:300px;
//         border-radius:21px;">
//         <img src="${a.thumbnail}" alt="${a.title}" style="width:100%; height:auto; border-radius:10px;">
//         <h2>${a.title}</h2>
//         <h2>$${a.brand}</h2>
//         <h2>$${a.price}</h2
//         <button onclick="addToCart" > </button>
//         </div>`;
//     })
// })
fetch("https://dummyjson.com/products").
then((res)=>{
    return res.json()
}).then((data)=>{
   let body=   document.querySelector("body")
    // console.log(data.products[1].brand);
    data.products.map((a)=>{
        console.log(a);
        body.innerHTML+=`<div style="border:1px solid black;
           padding:20px;
           margin:20px;
           width:300px;
           border-radius:21px"> 
           <img src="${a.
            thumbnail}" width="100px">
            <h2>  ${a.title}</h2>
            <h2>  ${a.brand}</h2>
            <button onclick="addtoCart(${a.id})">add </button>
            </div>
     `
    })
    window.allP=data.products
})
console.log(window);
function addtoCart(id){

    // console.log(id);
 let data=    window.allP.find((a)=>{
        return a.id==id


    })
    console.log(data);
    localStorage.setItem("item",JSON.stringify(data))
    

    
}