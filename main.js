var dayVideo = document.getElementById("dayVideo")
var nightVideo = document.getElementById("nightVideo")

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

    if (dayVideo.style.display != "none") {
        dayMode()
    }
    else {
        nightMode()
    }
}

function dayMode() {
    dayVideo.style.display = "none"
    nightVideo.style.display = "block"
    alwaysOneVideoMuted()
}
function nightMode() {
    // alert(nightMode.currentTime)
    nightVideo.currentTime = dayVideo.currentTime
    console.log("Hey")
    console.log(nightVideo.currentTime)
    nightVideo.style.display = "none"
    dayVideo.style.display = "block"
    alwaysOneVideoMuted()
    
}
function alwaysOneVideoMuted() {
    nightVideo.muted = true
    dayVideo.muted = false
}