const Item = require('./items-model');

function validateItem(req, res, next ) {
    const { title, source, ingredients, instructions, category } = req.body
        if(
            !title|| !title.trim() || 
            !source || !source.trim() || 
            !ingredients || !ingredients.trim() || 
            !  instructions || !instructions.trim() || 
            !category || !category.trim())
            {
                res.status(400).json({
                message: 'Please fill out all fields.'
            })
        }else {
            next()
        }
        
}

async function verifyDeleteItem(req, res, next) {
    const deleteId = req.params.id
    const itemToDel = await Item.findById(deleteId)
    if(!itemToDel) {
        res.json({message: `Item with ID ${deleteId} does not exist`}
        )
    }else {
        next()
    }
}

module.exports = {
    validateItem, 
    verifyDeleteItem
}