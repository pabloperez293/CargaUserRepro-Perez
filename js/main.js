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
//  tiempo en la pantalla para que valla a a la pagina de reproduccion 
        const eventoFuturo = setTimeout ( ()=> { 
            window.location = "indexPrepro.html"                               
        }, 4000)        
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
// para almacenar con el local storage 
const username = [{
    id: 1, nombre: "Pablo", pass: "12345",
    id: 2, nombre: "Adrian", pass: "12345",
    id: 3, nombre: "Vale", pass: "12345",
    id: 1, nombre: "Admin", pass: "12345"
}]

const guardarLocal = (clave, valor) =>{
    localStorage.setItem(clave, valor)
}
// Almacenamos los nombres y contraseñas
    for(const usuario of username) {
        guardarLocal(usuario.id, JSON.stringify(usuario))
    }
// para almacenar completo el array 
guardarLocal(" Lista de nombres" ,  JSON.stringify(username))

// -------------------------------------------------------------------



// Esto sirve para que no recargue la pagina desde el btn 
button.addEventListener("click", (e) =>{
    e.preventDefault()
    const data = {
        username: username.value,
        password: password.value
    }
    console.log(data)
})


// -------------------------------------------------------------------
