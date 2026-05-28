let inp = document.querySelector("input");
let btn = document.querySelector("button");
let h1 = document.querySelector("h1");
let h2 = document.querySelector("h2");

btn.addEventListener("click", () => {
    let city = inp.value;
    let apiK = "9f6290d6cda9a36a63755fadee71f83d";

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiK}&units=metric`)
        .then((data) => {
            return data.json();
        })
        .then((info) => {
            console.log(info);

            let time = new Date().toLocaleTimeString();
            console.log(time);

            h2.innerText = info.name;
            h1.innerText = `${info.main.temp} °C`;
        })
        .catch((err) => {
            console.log("Error:", err);
        });
});


// btn.addEventListener("click",()=>{
//     let data=input.value
    
//     fetch(`https://api.tvmaze.com/search/shows?q=${data}`).
//     then((info)=>{
//         return info.json()

//     }).then((val)=>{
//        console.log(val);
       
//             show(val)
//     })

// })


// function show(val){
//   for(let i of val){
//     let img=  document.createElement("img")
//     console.log(i.show.image.original,"heheh");
//     img.setAttribute("src",i.show.image.original)   
//     list.append(img)

//   }
// //   img.setAttribute("src",val[0].show.image.
// //     original)

//     // list.appendChild(img)

//  }
