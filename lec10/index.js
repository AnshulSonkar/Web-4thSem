// localStorage.setItem("user","rahul")
// let data= localStorage.getItem("user")
// // localStorage.removeItem("user")
// // console.log(data);

// localStorage.setItem("key","hellllooooo")
//  let data=  localStorage.getItem("key")
// //  localStorage.removeItem("key")
//  console.log(data);
   let formData= document.querySelector("#formData")
   let h2= document.querySelector("h2")
   let h1= document.querySelector("h1")
   let h3= document.querySelector("h3")

   let saveData=    JSON.parse(localStorage.getItem("userData"))
   if(saveData){
      h1.innerText=saveData.name
      h2.innerText=saveData.email
      h3.innerText=saveData.pass

   } 
//    console.log(formData,"heheh");
   formData.addEventListener("submit",(e)=>{
    e.preventDefault()
  
    // console.log(formData[0].value);
    // console.log(formData[1].value);
    // console.log(formData[2].value);

    let data={
        name:formData[0].value,
        email:formData[1].value,
        pass:formData[2].value,

    }
let h2= document.querySelector("h2")
let h1= document.querySelector("h1")
let btn= document.querySelector("button")
console.log(btn,"btnn");
btn.addEventListener("click",(e)=>{
   console.log("hjeheheh");
   
         localStorage.removeItem("data")
})




    localStorage.setItem("userData",JSON.stringify(data))
   //  h2.innerText=data.name
// 
    

    // console.log("hello");
     let data=   JSON.parse(localStorage.getItem("data"))
     console.log(data,"data");
     
     if(data){
      h2.innerText=data.name
      h1.innerText=data.email

     }


     let form= document.querySelector("#formData")
 
    
//  console.log(form);
form.addEventListener("submit",(e)=>{
   e.preventDefault()

    console.log();
    console.log(form[1].value);
    console.log(form[2].value);

    let userData={
      name:form[0].value,
      email:form[1].value,
      pass:form[2].value
    }
      
   //  console.log(userData);
   localStorage.setItem('data',JSON.stringify(userData))

   })

        
   // console.log("helloo");
   
})



 





 let LoginData=  document.querySelector("#LoginData")
 LoginData.addEventListener("submit",(e)=>{
    e.preventDefault()

    let login={
        email:LoginData[0].value,
        pass:LoginData[1].value,

    }
   let localStorageData= localStorage.getItem("userData")
   console.log(localStorageData);
 let mainData=    JSON.parse(localStorageData)
 console.log(mainData);

 if(login.email===mainData.email && login.pass===mainData.pass){
    alert("aapne sab kuch sahi kiya haii...")
 }else{
    alert("kuch nhi ho sakta aapse...")
 }
 
   
//  let loginF= document.querySelector("#loginData")
//  loginF.addEventListener("submit",(e)=>{
//    e.preventDefault()
//   let lognSaveData=     JSON.parse(localStorage.getItem("data"))
//   console.log(lognSaveData);
//   let loginInputD={
//    email:loginF[0].value,
//    pass:loginF[1].value,

 })
   
 
//   }
//   if(loginInputD.email===lognSaveData.email && loginInputD.pass===lognSaveData.pass){
//    alert("login donee")
//   }else{
//    alert("errrrrr")
//   }
  

//  })