/**
 * Created by huangxiaoli on 2016/7/19.
 */
var addModel = require('./add');
var fs = require('fs');

fs.readFile('hello.txt', {encoding: 'utf-8'}, function(err, data){
    if (err){
        console.log(err);
        return;
    }

    console.log(data);
});
console.log(addModel.add(3, 4));