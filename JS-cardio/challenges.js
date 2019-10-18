// 1. MINUTES TO SECONDS
function convert(minutes) {
  return minutes * 60;
}

// 2. Add up the Numbers from a Single Number
function addUp(number) {
  let result = 0;
  let i = 1;
  while (i <= number) {
    result += i;
    i++;
  }
  return result;
}

// 3. No Conditionals?
function flip(num) {
  return +!num;
}

// 4. Seven Boom
function sevenBoom(numArr) {
  let isSeven = false;
  numArr.forEach(num => {
    if (num.toString().indexOf('7') !== -1) {
      isSeven = true;
      return;
    }
  });

  return isSeven ? 'Boom!' : 'There is no 7 in the array';
}

// 5. Fint the smallest and biggest numbers
function minMax(numArr) {
  return [Math.min(...numArr), Math.max(...numArr)];
}

// 6.Contact List
function sortContacts(nameArr, order = 'ASC') {
  function check(a, b, o) {
    if (o === 'ASC') {
      if (a > b) {
        return 1;
      }

      if (b > a) {
        return -1;
      }

      return 0;
    } else {
      if (a > b) {
        return -1;
      }

      if (b > a) {
        return 1;
      }

      return 0;
    }
  }

  if (nameArr == null) {
    return [];
  } else if (nameArr.length <= 1) {
    return nameArr;
  } else {
    return nameArr.sort((a, b) =>
      check(a.split(' ')[1], b.split(' ')[1], order)
    );
  }
}
