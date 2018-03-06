var pg = require('pg');
var pool = new pg.Pool({
    user: 'postgres',
    host: 'localhost',
    password: '123QQsuccess',
    database:'books-dev'});
pool.query(
    'SELECT * FROM books',[],function (err,result) {
        if(err) throw err;
        console.log(result.rows);
    });