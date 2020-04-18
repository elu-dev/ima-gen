const router = require('express').Router()
const Jimp = require('jimp')
const fs = require('fs')

const SIZE = 10
const MIDD = SIZE / 2

/**
 * Creates a 10x10 pattern using the bits of ID as white pixels
 */
async function genImage(ID) {
    let image = new Jimp(SIZE, SIZE, '#393e46', (err, image) => { if (err) throw err })
    
    for (let y = 0; y < SIZE; ++y)
    for (let x = 0; x < SIZE; ++x) {
        const i = y * MIDD + (x < MIDD ? x : SIZE - x - 1)
        if (((ID >>> i) & 1)) image.setPixelColor(0xFFFFFFFF, x, y)
    }

    return image
}

router.get('/:id', async (req,res) => {
    const pic = await genImage(req.params.id)
    pic.getBuffer('image/png', (e,b) => res.send(b))
})

module.exports = router