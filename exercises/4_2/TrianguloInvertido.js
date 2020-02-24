  let linha = '';
  let n = 5;
  let space = '';
  for(let i = 1; i <= n; i += 1) {
    space = ''
    for(let j = n - i; j >= 0; j -= 1){
      space += ' ';
    }
    linha += '*'
    console.log(space + linha)
  }  