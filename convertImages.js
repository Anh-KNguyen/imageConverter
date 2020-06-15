import Jimp from "jimp";

// convert jpg to png
Jimp.read("catalina.jpg", function (err, image) {
    if (err) {
        console.log(err)
    } else {
        image.write("catalina-newImage.png")
    }
})

// convert png to jpg
Jimp.read("mojave.png", function (err, image) {
    if (err) {
        console.log(err)
    } else {
        image.write("mojave-newImage.jpg")
    }
})