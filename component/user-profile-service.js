const express = require('express');
const {Book} = require('./user-profile-schema');
const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        let book = await Book.findAll();
        if (book.length) return res.status(200).json(book);
        else return res.status(400).json({ message: "No Book" });
    } catch (err) {
        next(err);
    }
});


router.get('/:id', async(req, res) => {
    try{
        let book = await Book.findOne({
            where: { id: req.params.id },
          });
        if(book == null) return res.status(422).json({ message: "no book found" });
        else res.status(200).json(book);
    } catch(err){
        return res.status(500).json(err);
    }
});

router.post('/', async (req, res) => {
    try {
        let book = await Book.create({ 
            name: req.body.name,
            dob: req.body.dob, 
            gender: req.body.gender,
            maritalStatus: req.body.maritalStatus,
            phone: req.body.phone, 
            aadharNumber: req.body.aadharNumber 
        })
        return res.status(200).json({
            data: book
          });
    } catch (err) {
        return res.status(500).json(err);
    }
});


router.put('/:id', async (req, res) => {
    try {
        let book = await Book.findOne({
            where: { id: req.params.id },
        });
        if (book == null) return res.status(422).json({ message: "no book found" });
        await Book.update(req.body, {
            where: { id: req.params.id },
        });
        return res.status(200).json(req.body);
    } catch (err) {
        return res.status(500).json(err);
    }
});

router.delete('/:id', function(req, res){
    Book.destroy({ 
        where: { id: req.params.id } 
    }).then(result => {
        res.status(200).json(result);
    });
});

module.exports = router;