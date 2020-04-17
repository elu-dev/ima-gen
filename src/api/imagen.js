const router = require('express').Router()
const Jimp = require('jimp')
const fs = require('fs')

const SIZE = 10
const MIDD = SIZE / 2

router.get('/:id', (req,res) => {
    res.set({'Content-Type': 'image/png'})

    const ID = req.params.id

    let image = new Jimp(SIZE, SIZE, '#393e46', (err, image) => { if (err) throw err })
    
    for (let y = 0; y < SIZE; ++y)
    for (let x = 0; x < SIZE; ++x) {
        const i = y * MIDD + (x < MIDD ? x : SIZE - x - 1)
        if (((ID >>> i) & 1)) image.setPixelColor(0xFFFFFFFF, x, y)
    }
    
    const path = `${__dirname}/cache/${ID}.png`

    // TODO: move to async/await if possible
    image.write(
        path, () => res.sendFile(
            path, () => fs.unlinkSync(path)
        )
    )
})

module.exports = router