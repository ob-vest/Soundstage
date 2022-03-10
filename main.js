var dayVideo = document.getElementById("dayVideo")
var nightVideo = document.getElementById("nightVideo")

dayVideo.autoplay = true
nightVideo.autoplay = true

dayVideo.muted = true
// dayVideo.muted = false
nightVideo.muted = true
dayVideo.load()
nightVideo.load()
dayVideo.play()
nightVideo.play()

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
    dayVideo.muted = true
    nightVideo.style.display = "block"
    nightVideo.muted = false
}
function nightMode() {
    // alert(nightMode.currentTime)
    nightVideo.currentTime = 5
    console.log("Hey")
    console.log(nightVideo.currentTime)
    nightVideo.style.display = "none"
    nightVideo.muted = true
    dayVideo.style.display = "block"
    dayVideo.muted = false
}