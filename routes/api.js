/*
*
*
*       Complete the API routing below
*       
*       
*/

'use strict';

require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI, {dbName: 'personal-library'})
const bookSchema= new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  comments: {
    type: Array,
    required: true
  },
  commentcount: {
    type: Number,
    default: 0,
    required: true
  }
}, {collection: 'books'})
let book = mongoose.model('book', bookSchema)
module.exports = function (app) {

  app.route('/api/books')
    .get(function (req, res){
      //response will be array of book objects
      //json res format: [{"_id": bookid, "title": book_title, "commentcount": num_of_comments },...]
    })
    
    .post(function (req, res){
      let title = req.body.title;
      //response will contain new book object including atleast _id and title
    })
    
    .delete(function(req, res){
      //if successful response will be 'complete delete successful'
    });



  app.route('/api/books/:id')
    .get(function (req, res){
      let bookid = req.params.id;
      //json res format: {"_id": bookid, "title": book_title, "comments": [comment,comment,...]}
    })
    
    .post(function(req, res){
      let bookid = req.params.id;
      let comment = req.body.comment;
      //json res format same as .get
    })
    
    .delete(function(req, res){
      let bookid = req.params.id;
      //if successful response will be 'delete successful'
    });
  
};
