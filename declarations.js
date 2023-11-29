//special characters
// console.log after each one


// let escapeStr = '"';
// // console.log(escapeStr); 

// escapeStr = "\`";
// console.log(escapeStr)
// escapeStr = "\\";
// console.log(escapeStr)
// escapeStr = "\/";
// console.log(escapeStr)
// // escapeStr = "\"";
// // console.log(escapeStr)
// escapeStr = "'";
// console.log(escapeStr)


const escapeStr = "`, \\, /, \",\'"
console.log(escapeStr)





// same thing for strings bool undef num
const str = "string";
console.log(str);
const bool = true;
console.log(bool);
const undef = undefined;
console.log(undef);
const num = 123;
console.log(num);


// array (make sure you are using square brackets)
const arr = Object.freeze( [4, '2']);
console.log(arr)


// and object containing primitive values, just one console.log
const obj  = Object.freeze({
    str: "string",
    bool: true,
    undef: undefined,
    num: 123
});






const nested = Object.freeze ({
    arr :Object.freeze( [ 4, undefined, '2' ]),
    obj : Object.freeze({
        str: "string",
        num: 123,
        bool: true
    }   
    )

})

    



