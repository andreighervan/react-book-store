var express = require('express');
const router=express.Router();
const pg=require('pg');

var pool = new pg.Pool({
    user: 'postgres',
    host: 'localhost',
    password: '123QQsuccess',
    database:'books-dev'});

router.get('/books', function(req, res) {
    pool.query(
        'SELECT * FROM books',[],function (err,result) {
            if(err) throw err;
            res.send(result.rows);
        });
});

router.get('/books/:bookId/ratings',function (req,res) {
    pool.query("SELECT * FROM reviews where book_id=$1",[req.params.bookId],function (err,result) {
        if(err) throw err;
        res.send(result.rows);
    })
});

module.exports=router;