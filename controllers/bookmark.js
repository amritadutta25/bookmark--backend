const express = require('express')
const Bookmark = require('../models/bookmark')

const router = express.Router()

router.get('/', async(req, res) => {
    try{
        res.json(await Bookmark.find({}))

    } catch (err) {
        res.status(400).json(err);
    }
})

router.post('/', async (req, res) => {
    console.log(req)
    const bookmark = new Bookmark({
      title: req.body.title,
      url: req.body.url,
      username: req.body.username
    });
    try {
      const newBookmark = await Bookmark.create(bookmark);
      res.status(201).json(newBookmark);
      console.log(newBookmark)
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });


router.delete('/:id', async (req, res) => {
    try {
        res.json(await Bookmark.findByIdAndDelete(req.params.id))
    } catch (err) {
        res.status(400).json(err);
    }
})
 
router.get('/:id', async (req, res) => {
    try {
        res.json(await Bookmark.findById(req.params.id))
    } catch (err) {
        res.status(400).json(err);
    }
})
 

router.put('/:id', async (req, res) => {
    try {

        res.json(await Bookmark.findByIdAndUpdate(req.params.id, req.body))
    } catch (err) {
        res.status(400).json(err);
    }
})


module.exports = router;