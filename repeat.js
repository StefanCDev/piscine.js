
function repeat(str, num) {
    let repeatedStr = '';
    for (let i = 0; i < num; i++) {
      repeatedStr += str;
    }
    return repeatedStr;
  }

  console.log(repeat('Hello!', 3)); // "HelloHelloHello"
// console.log(repeat('a', 5)); // "aaaaa"
// console.log(repeat('abc', 0)); // ""
let tests = []
const t = (f) => tests.push(f)

t(() => typeof repeat === 'function')
t(() => repeat.length === 2)
t(() => repeat('a', 3) === 'aaa')
t(() => repeat('ba', 10) === 'bababababababababab')
t(() => repeat('pouet', 2) === 'pouetpouet')
t(() => repeat('haha', 1) === 'haha')
t(() => repeat('hehehe', 0) === '')

const result = tests.filter(x=>x()===false).length >= 1 ? "Tests Failed" : `Tests passed`
console.log(result)
