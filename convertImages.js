import Jimp from "jimp";

// convert jpg to png
Jimp.read("image.jpg", function (err, image) {
    if (err) {
        console.log(err)
    } else {
        image.write("new-image.png")
    }
})

// convert png to jpg
Jimp.read("image.png", function (err, image) {
    if (err) {
        console.log(err)
    } else {
        image.write("new-image.jpg")
    }
})