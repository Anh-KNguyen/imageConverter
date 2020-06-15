import Jimp from "jimp";

// convert jpg to png
Jimp.read("catalina.jpg", function (err, image) {
    if (err) {
        console.log(err)
    } else {
        image.write("new-image.png")
    }
})

// convert png to jpg
Jimp.read("mojave.png", function (err, image) {
    if (err) {
        console.log(err)
    } else {
        image.write("new-image.jpg")
    }
})