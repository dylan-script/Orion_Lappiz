var text = 'Mi papá me pegó, mi mamá me regañó, mi tió me violó'
var s = text.split(',')
debugger
let result = '';
for (let j = 0; j < s.length; j++) {
  let index = j + 1
  if (index == s.length) {
    result += `${s[j]};`
  } else {
    result += `${s[j]}, `
  }
}
console.log(result)