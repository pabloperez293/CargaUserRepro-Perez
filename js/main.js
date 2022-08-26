const button = document.getElementById("btn")

function login(){
    let username = document.getElementById("username").value
    let password = document.getElementById("password").value 

    if(username == "admin" && password == "12345"){
        swal.fire({
            title: `${username} ` ,
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
              },
              hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
              },
            Text: "Campo obligatorio",
            icon: "success",
            timer: 20000
        })
        // window.location = "indexPrepro.html"        
    }else{
        swal.fire({
            title: `${username}` ,
            Text:"Denegado",
                        showClass: {
                popup: 'animate__animated animate__fadeInDown'
              },
              hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
              },
            icon:"error",
            confirmButtonText:"confirmar"
        })
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

