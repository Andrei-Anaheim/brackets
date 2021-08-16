module.exports = function check(str, bracketsConfig) {
  const ob = ['(', '<', '{', '[', '1', '3', '5', '+', '/'];
  const pairs = {
    [')']: '(',
    ['>']: '<',
    ['}']: '{',
    [']']: '[',
    ['2']: '1',
    ['4']: '3',
    ['6']: '5',
    ['-']: '+',
    ['*']: '/',
  }

  let string = str.split('');
  let stack = [];
  let vertical = 0;
  let seven = 0;
  let eight = 0;
  for (let i=0; i<string.length; i+=1) {
    let brack = string[i];
    if (brack === '|' && vertical %2 === 0) {
      vertical +=1;
      brack = '<'
    } else if (brack === '|' && vertical %2 === 1) {
      vertical +=1;
      brack = '>'
    }
    if (brack === '7' && seven %2 === 0) {
      seven +=1;
      brack = '+'
    } else if (brack === '7' && seven %2 === 1) {
      seven +=1;
      brack = '-'
    }
    if (brack === '8' && eight %2 === 0) {
      eight +=1;
      brack = '/'
    } else if (brack === '8' && eight %2 === 1) {
      eight +=1;
      brack = '*'
    }
    if (ob.includes(brack)) {
      stack.push(brack)
    } else {
      if (stack.length === 0) {
        return false
      } else {
        if (stack[stack.length-1] === pairs[brack]) {
          stack.pop()
        } else {
          return false
        }
      }
    }
  }

  return stack.length === 0;
}
