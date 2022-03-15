var dayVideo = document.getElementById("dayVideo")
var nightVideo = document.getElementById("nightVideo")
var button = document.getElementById("switcherButton")
// dayVideo.autoplay = true
// nightVideo.autoplay = true

// dayVideo.muted = true
nightVideo.muted = true

// dayVideo.load()
// nightVideo.load()
// dayVideo.play()

// function playVideo() {
// dayVideo.play()
// nightVideo.play()
// }
function switchVideo() {
    const isDay = dayVideo.style.display != "none"
    if (isDay) {
        nightMode()
    }
    else {
        dayMode()
    }
    // setColors must be executed last since the code above changes the currently displayed video
    setColors()
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
function setColors() {
    const isDay = dayVideo.style.display != "none"
    if (isDay) {
        document.documentElement.style.setProperty("--backgroundColor", "var(--dayBackgroundColor)")
        document.documentElement.style.setProperty("--accentColor", "var(--dayAccentColor)")
        document.documentElement.style.setProperty("--primaryColor", "var(--dayPrimaryColor)")
        document.documentElement.style.setProperty("--contrastColor", "var(--nightPrimaryColor)")

    } else {
        document.documentElement.style.setProperty("--backgroundColor", "var(--nightBackgroundColor)")
        document.documentElement.style.setProperty("--accentColor", "var(--nightAccentColor)")
        document.documentElement.style.setProperty("--primaryColor", "var(--nightPrimaryColor)")
        document.documentElement.style.setProperty("--contrastColor", "var(--dayPrimaryColor)")
        // document.documentElement
    }
}
