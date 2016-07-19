/**
 * Created by huangxiaoli on 2016/7/19.
 */
//file system Node自带模块.
var fs = require('fs');
fs.readFile('hello.txt', {encoding: 'utf-8'}, function (err, data) {
    if (err) {
        console.log(err);
        return;
    }
    console.log(data);
});

//自己写的模块.
var myAddModel = require('./add');
console.log(myAddModel.add(5, 5));

//第三方模块.
var mime = require('mime');
console.log(mime);