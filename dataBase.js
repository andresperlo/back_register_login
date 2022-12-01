const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://admin:VkWQLSFmFxs5LOhd@cluster0.xebqd9h.mongodb.net/comision9i", (err) => {
    if(err){
        console.log(err)
    }else{
        console.log('base de dato ok')
    }
})