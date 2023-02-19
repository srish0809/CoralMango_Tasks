async function login(event){
    try{
    event.preventDefault();
 const email=document.getElementById('email').value;
 const password=document.getElementById('password').value;

 const loginDetails={
    email,password
 }
 console.log(loginDetails);
const response=await axios.post("http://localhost:3000/login",loginDetails)
console.log(response);
if(response.status===200){
    alert(response.data.message)

    window.location.href="../html/restaurant.html";
}
else{
    throw new Error("Failed to Login")
}


    }
    catch(error){
           document.body.innerHTML+=`<div style="color:red">${error.message}</div>`;
        alert(error.message)
    }
}