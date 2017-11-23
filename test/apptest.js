const assert = require('chai').assert;
// const sayHello = require('../app').sayHello;
// const addTwoNumbers = require('../app').addTwoNumbers;
const app = require('../app');

const sayHelloResult = app.sayHello();

const addTwoNumbersResult = app.addTwoNumbers(5,11);


describe('App', function () {

    describe('sayHello', function () {

        it('app should return hello', function () {

            

            assert.equal(sayHelloResult, 'Hello');

        });

        it('sayHello should return type String', function () {

            assert.typeOf(sayHelloResult, 'string');

        });

        it("sayHello should return type Number", function () {
            
                    assert.typeOf(sayHelloResult, 'number');            
                
        });


    });

    describe('addTwoNumbers()',function(){

        it("addTwoNumbers should be above 5", function () {
            
                
            
                    assert.isAbove(addTwoNumbersResult, 5);
            
                });
            
                it("addTwoNumbers return type must be integers", function () {
            
                    
            
                    assert.typeOf(addTwoNumbersResult, 'number');
            
                });


    })

    
});

