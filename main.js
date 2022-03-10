var dayVideo = document.getElementById("dayVideo")
var nightVideo = document.getElementById("nightVideo")
var button = document.getElementById("switcherButton")
dayVideo.autoplay = true
nightVideo.autoplay = true

dayVideo.muted = true
nightVideo.muted = true

// dayVideo.load()
// nightVideo.load()
// dayVideo.play()
// nightVideo.play()

// nightVideo.play()

function switchVideo() {
const isDay = dayVideo.style.display != "none"
    if (isDay) {
        nightMode()
    }
    else {
        dayMode()
    }
}

function dayMode() {
    button.textContent = "Switch To Night ☾"
    nightVideo.style.display = "none"
    dayVideo.style.display = "block"

    alwaysOneVideoMuted()
}
function nightMode() {

    // alert(nightMode.currentTime)
    button.textContent = "Switch To Day ☀️"
    nightVideo.currentTime = dayVideo.currentTime
    // console.log("Hey")
    // console.log(nightVideo.currentTime)
    dayVideo.style.display = "none"
    nightVideo.style.display = "block"
    alwaysOneVideoMuted()
    
}
function alwaysOneVideoMuted() {
    nightVideo.muted = true
    dayVideo.muted = false
}