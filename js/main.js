const button = document.getElementById("btn")

function login(){
    let username = document.getElementById("username").value
    let password = document.getElementById("password").value 

    if(username == "admin" && password == "12345"){
        window.location = "indexPrepro.html"        
    }else{
        alert("login falled")
    }
}
    


// Esto sirve para que no recargue la pagina desde el btn 
button.addEventListener("click", (e) =>{
    e.preventDefault()
    const data = {
        username: username.value,
        password: password.value
    }
    console.log(data)
})

