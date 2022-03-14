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
    button.innerText = "Switch To Night ☾"
    nightVideo.style.display = "none"
    dayVideo.style.display = "block"

    alwaysOneVideoMuted()
}
function nightMode() {

    // alert(nightMode.currentTime)
    button.innerText = "Switch To Day ☀️"
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

nightVideo.onpause = function () {
    dayVideo.pause()
}
nightVideo.onplay = function () {
    dayVideo.play()
}
dayVideo.onpause = function () {
    nightVideo.pause()
}
dayVideo.onplay = function () {
    nightVideo.play()
}
nightVideo.addEventListener("timeupdate", whenTimeChanges)

function whenTimeChanges() {
    console.log("time changed")
    const deviation = 2
    if (nightVideo.style.display != "none") {
        if (nightVideo.currentTime + deviation < dayVideo.currentTime || nightVideo.currentTime - deviation > dayVideo.currentTime) {
            dayVideo.currentTime = nightVideo.currentTime
        }
    }

}

