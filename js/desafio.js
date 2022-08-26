// variable global 
let player = document.querySelector("#player")

const playMusic = () => {
    player.play()
}
const pauseMusic = () => {
    player.pause()
}
const stopMusic = () => {
    player.pause()
    // con este currentTime lo vuelve a cero al pause 
    player.currentTime = 0
}
const changeVolume = (e) => {
    // console.dir(e.target.value) con esto vemos en la consola cuando es el value
    player.volume = e.target.value
}

const changeSong = (evt) => {
    // console.log(evt.target.textContent)
    player.setAttribute("src", `audio/${evt.target.textContent}.mp3`)
    player.play()
}

document.addEventListener("DOMContentLoaded", () =>{
    // Siempre hay que colocar el numeral porque no lo identifica 
    const play = document.querySelector("#play")
    const pause = document.querySelector("#pause")
    const stop = document.querySelector("#stop")
    const volume = document.querySelector("#volume")
    const songs = document.querySelectorAll("li")

    // Para que cada que vez que utilicemos el volume se llame 
    player.volume = volume.value


    // Para que recorra la lista  de los temas
    for(let song of songs) {
        song.addEventListener("click", changeSong)
    }


    // elementos que sirven para que levante los btn 
    play.addEventListener("click", playMusic)
    pause.addEventListener("click", pauseMusic)
    stop.addEventListener("click", stopMusic)
    volume.addEventListener("change", changeVolume)


})