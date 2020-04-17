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
    res.set({'Content-Type': 'image/png'})

    const image = await genImage(req.params.id)
    
    const path = `${__dirname}/cache/${req.params.id}.png`
    
    image.write(path, () => res.sendFile(path, () => fs.unlinkSync(path)))
    // await image.write(path)
    // await res.sendFile(path)
    // await fs.unlinkSync(path)
})

module.exports = router