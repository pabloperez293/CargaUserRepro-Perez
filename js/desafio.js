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


// -----------------------------------------------------------

// Utilizando fetch 
 
// Declaramos variables 
const form = document.getElementById("songSearch")
const main = document.getElementById("main")
const artist = document.getElementById(".artist")
const song = document.getElementById(".song")

// simbolo dolar hace referencia al dom 
     form.addEventListener("submit", async e => {
        e.preventDefault()

        try{
// Fuerzo a que sea tanto en may como min la busqueda con tolowercase
            let artist = e.target.artist.value.toLowerCase()
            song = e.target.song.value.toLowerCase()
// definimos variables para que se cuando se concatene correctamente 
            let artistTemplate = ""
            let songTemplate = ""
            artistApi = `https://www.theaudiodb.com/api/v1/json/2/search.php?s=${artist}`
            songApi = `https://api.lyrics.ovh/v1/${artist}/${song}`
            artistFetch = fetch(artistApi)
            songFetch = fetch(songApi)
// Con esto hago que salga primero las peticiones que primero deben responder
            [artistRes, songRes]= await Promise.all([artistFetch,songFetch])

            artistData = await artistRes.json()
            songData = await songData.json()

            // console.log(artistRes, songRes)
            console.log(artistData, songData)

            if( artistData.artist === null){
                artistTemplate = `<h2>No exite ${artist}</h2>`
            }else{
                let artist = artistData.artist [0]
                artistTemplate =` <h2>${artist.strArtist}</h2>
                <img src="${artist.strArtist}" alt="${artist.strArtist}">
                <p>
                ${artist.intBornYear} - ${(artist.intDiedYear || "Presente")}</p>
                <p>${artist.strCountry}</p>
                <p>${artist.strGenre} - ${artist.strStyle}</p>
                <a href=":http://${artist.strWebsite}" target="_blank"> Pagina web</a>
                <p>${artist.strBiographyEN}</p>
                `
            }

            artist.innerHTML = artistTemplate
    
        }catch(err){
            console.log(err)
            let mensaje = err.statusText || "Error"
            error.innerHTML = `<p>Error ${err.status}: ${mensaje}</p>`
        }
    })