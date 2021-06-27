const express = require('express')
const router = express.Router()
const Content = require('../models/Schema')

let count = 0;

router.get('/', async(req,res) => {
    try{
           const contents = await Content.find()
           res.json(contents)
    }catch(err){
        res.send('Error ' + err)
    }
})

router.get('/count', async(req,res) => {
    try{
           const apiCallCount = {count};
           res.json( apiCallCount)
    }catch(err){
        res.send('Error ' + err)
    }
})

router.get('/:id', async(req,res) => {
    try{
           const contents = await Content.findById(req.params.id)
           res.json(contents)
    }catch(err){
        res.send('Error ' + err)
    }
})


router.post('/', async(req,res) => {
    const contents = new Content({
        content: req.body.content
    })

    try{
        const a1 =  await contents.save() 
        count++;
        res.json(a1)
    }catch(err){
        res.send('Error')
    }
})

router.put('/:id',async(req,res)=> {
    try{
        const contents = await Content.findById(req.params.id) 
        contents.content = req.body.content
        const a1 = await contents.save()
        count++;
        res.json(a1)   
    }catch(err){
        res.send('Error')
    }

})

module.exports = router