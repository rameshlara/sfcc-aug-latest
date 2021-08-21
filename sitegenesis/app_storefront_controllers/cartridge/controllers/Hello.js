'use strict';

var app = require('~/cartridge/scripts/app');
var guard = require('~/cartridge/scripts/guard');




function test1(){
    app.getView().render('/hello/helloworld1');   
}

exports.Sample1 = guard.ensure(['get', 'https'], test1);
