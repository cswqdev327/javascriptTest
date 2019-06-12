// (function(){
//     console.log("hello javascript");
// })();
//


// 전역 네임 스페이스는 모두 대문자 혹은 대문자로 시작




var test = function() {

    var testValue01 = 1;
    var testValue02 = 2;

    this.testtestValue01 = 3;

    var testFunc = function () {
        console.log("testfunc");
    };

    return {
        testV1 : testValue01,
        testV2 : testValue02,
        testFunc : testFunc();
    }

};

var testObj = new test();

console.log( testObj.testV1 );
console.log( testObj.testValue01 );
console.log( testObj.testtestValue01 );
testObj.testValue01 = 10;
console.log( testObj.testValue01 );
