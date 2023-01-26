const mongoose = require('mongoose');


mongoose.connect('mongodb+srv://sampat:sampat@cluster0.nfxtiif.mongodb.net/?retryWrites=true&w=majority', () => {
  console.log('connected to mongodb')
})
